import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import BarsTemplate from "../components/templates/BarTemplate";

const Concert: NextPage = () => {
  return (
    <Layout>
      <BarsTemplate />
    </Layout>
  );
};

export default Concert;
