import { NextPage } from "next";
import React from "react";
import Layout from "../components/layout/Layout";
import CaffeLetterTemplate from "../components/templates/CaffeLetterTemplate";

const CaffeLetter: NextPage = () => {
  return (
    <Layout>
      <CaffeLetterTemplate />
    </Layout>
  );
};

export default CaffeLetter;
