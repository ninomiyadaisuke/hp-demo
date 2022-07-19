import type { NextPage } from "next";
import FaqItem from "../components/atoms/FaqItem";
import FaqList from "../components/organisms/faq/FaqList";
import { faqData } from "../lib/data";

import styles from "../styles/organisms/faq_list.module.scss";

const Sample: NextPage = () => {
  return (
    <section>
      <FaqList faqData={faqData} />
    </section>
  );
};
export default Sample;
