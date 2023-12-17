import { FC, useState } from "react";
import {
  Card,
  Layout,
  Button,
  Switch,
  Row,
  Col,
  Typography,
  Input,
  message,
  Form,
} from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { IPassword } from "../../type/password";
import { generateShortener } from "./DashboardService";
import UrlModal from "./UrlModal";
import Header from "./Header";
import { URLS } from "../../constant/url";

const { Title } = Typography;

const Dashboard: FC = () => {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [shortenerUrl, setShortenerUrl] = useState<string>("");

  const getTitle = () => {
    return (
      <Row gutter={24} justify="center">
        <Col lg={{ span: 16 }} xs={{ span: 24 }} sm={{ span: 24 }}>
          <Title level={4}>Generate Short Url</Title>
        </Col>
      </Row>
    );
  };

  const validation = () => {
    const isValid = true;
    if (!url) {
      message.error("Please Enter Url to continue");
      return false;
    }
    return isValid;
  };

  const handleOnFinish = async () => {
    if (validation()) {
      try {
        setLoading(true);
        console.log(url);
        const response: any = await generateShortener({ url: url });
        setShortenerUrl(`${URLS.REDIRECTION}/${response.hashCode}`);
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const onReset = () => {
    setUrl("");
    setShortenerUrl("");
  };

  return (
    <>
      <Header />
      <Layout style={{ minHeight: "80vh", backgroundColor: "#f0f2f5" }}>
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <UrlModal
            loading={loading}
            password={shortenerUrl}
            onReset={onReset}
          />
          <Card
            title={getTitle()}
            style={{ width: 600, height: 250, textAlign: "center" }}
          >
            <Row gutter={24} justify="center">
              <Col
                lg={{ span: 24 }}
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                style={{ marginBottom: "20px" }}
              >
                <Input
                  width="100%"
                  type="text"
                  placeholder="Enter Url"
                  value={url}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setUrl(event.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row gutter={24} justify="center">
              <Col lg={{ span: 16 }} xs={{ span: 24 }} sm={{ span: 24 }}>
                <Button
                  type="primary"
                  size="large"
                  onClick={handleOnFinish}
                  loading={loading}
                >
                  Generate
                </Button>
              </Col>
            </Row>
          </Card>
        </Content>
      </Layout>
      <Footer
        style={{
          textAlign: "center",
          position: "sticky",
          bottom: 0,
          backgroundColor: "#ebebeb",
        }}
      >
        &copy; 2023 url-shortener. All rights reserved.
      </Footer>
    </>
  );
};

export default Dashboard;
