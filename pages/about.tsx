import type { NextPage } from "next";
import Layout from "../components/layout/Layout";

import AboutTemplate from "../components/templates/AboutTemplate";

const About: NextPage = () => {
  return (
    <Layout>
      <AboutTemplate />
    </Layout>
  );
};

export default About;
