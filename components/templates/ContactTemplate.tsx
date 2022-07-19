import { FC } from "react";
import Text from "../atoms/Text";
import MenuLinks from "../atoms/MenuLink";

import styles from "../../styles/templates/contact_template.module.scss";

const ContactTemplate: FC = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <h1>お問合せ</h1>
        <Text
          className={styles.contact__text}
          text="概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載しますお問い合わせの前にFAQをご参照ください。"
        />

        <div className={styles.contact__links}>
          <MenuLinks type={"toContact"} text={"お問合せフォームへ"} path={"/"} />
          <MenuLinks type={"toContact"} text={"FAQ"} path={"/faq"} />
        </div>
      </div>
    </section>
  );
};

export default ContactTemplate;
