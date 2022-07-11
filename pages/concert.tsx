import type { NextPage } from "next";
import Layout from "../components/layout/Layout";

import ConcertTemplate from "../components/templates/ConcertTemplate";

const Concert: NextPage = () => {
  return (
    <Layout>
      <ConcertTemplate />
    </Layout>
  );
};

export default Concert;
