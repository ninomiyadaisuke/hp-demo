import { FC } from "react";
import FaqList from "../organisms/faq/FaqList";
import { faqData } from "../../lib/data";

import styles from '../../styles/templates/faq_template.module.scss'

const FaqTemplate: FC = () => {
  return (
    <article className={styles.faq}>
      <FaqList faqData={faqData} />
    </article>
  );
};

export default FaqTemplate;
