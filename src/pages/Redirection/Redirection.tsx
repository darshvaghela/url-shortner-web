import { Layout, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchHashUrl } from "../dashboard/DashboardService";
import Header from "../dashboard/Header";
import { Content } from "antd/es/layout/layout";
import Loader from "../../components/Loader";

const Redirection = () => {
  const { hash } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const getHashUrl = async (hash: any) => {
    try {
      setLoading(true);
      const response = await fetchHashUrl(hash);
      window.location.href = response.url;
    } catch (error) {
      message.error("Please try after some time!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHashUrl(hash);
  }, [hash]);

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
          {loading ? <Loader /> : <></>}
        </Content>
      </Layout>
    </>
  );
};

export default Redirection;
