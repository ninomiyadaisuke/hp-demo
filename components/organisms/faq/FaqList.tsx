import { FC } from "react";
import { FaqType } from "../../../lib/types";
import FaqItem from "../../atoms/FaqItem";

import styles from "../../../styles/organisms/faq_list.module.scss";

type Props = {
  faqData: FaqType[];
};

const FaqList: FC<Props> = props => {
  const { faqData } = props;
  return (
    <section className={styles.list}>
      <h1>FAQ</h1>
      <ul>
        {faqData &&
          faqData.map(data => (
            <FaqItem key={data.id} title={data.title} text={data.text} />
          ))}
      </ul>
    </section>
  );
};

export default FaqList;
