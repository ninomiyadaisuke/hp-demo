import type { NextPage, GetStaticProps } from "next";
import { fetchTopics } from "../lib/topics";
import Banner from "../components/molecules/top/Banner";
import Banners from "../components/organisms/top/Banners";

export type Topic = {
  id: string;
  title: string;
  text: string;
};

type Props = { topics: Topic[] };

const Sample: NextPage<Props> = (props) => {
  const { topics } = props;

  return (
    <Banners
      
    />
  );
};
export default Sample;
