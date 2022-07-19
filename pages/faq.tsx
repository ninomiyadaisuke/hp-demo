import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import FaqTemplate from "../components/templates/FaqTemplate";

const Faq: NextPage = () => {
  return (
    <Layout>
      <FaqTemplate />
    </Layout>
  );
};

export default Faq;