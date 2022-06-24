import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import GalleryTemplate from "../components/templates/GalleryTemplate";

const Gallery: NextPage = () => {
  return (
    <Layout>
      <GalleryTemplate />
    </Layout>
  );
};

export default Gallery;