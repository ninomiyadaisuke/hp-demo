import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import TopTemplate from "../components/templates/TopTemplate";

const Home: NextPage = () => {
  return (
    <Layout>
      <TopTemplate />
    </Layout>
  );
};

export default Home;
