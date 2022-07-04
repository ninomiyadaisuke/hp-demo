import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import NewsTemplate from "../components/templates/NewsTemplate";

const News: NextPage = () => {
  return (
    <Layout>
      <NewsTemplate />
    </Layout>
  );
};

export default News;
