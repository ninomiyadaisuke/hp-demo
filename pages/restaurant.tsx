import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import RestaurantTemplate from "../components/templates/RestaurantTemplate";
import SliderAndButton from "../components/molecules/SliderAndButton";
import AccessGoogleMap from "../components/atoms/AccessGoogleMap";

const Restaurant: NextPage = () => {
  return (
    <Layout>
      <RestaurantTemplate />
    </Layout>
  );
};

export default Restaurant;
