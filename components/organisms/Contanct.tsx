import { FC } from "react";
import MenuLink from "../atoms/MenuLink";
import Text from "../atoms/Text";

import styles from "../../styles/contact.module.scss";

const Contanct: FC = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <h2>Contact</h2>
        <div className={styles.contact__link}>
          <div className={styles.contact__link_position}>
            <MenuLink path="/" type={"toContact"} text={"FAQ"} />
          </div>
          <div className={styles.contact__link_position}>
            <MenuLink path="/" type={"toContact"} text={"Contact form"} />
          </div>
        </div>
        <Text text="お問い合わせの前にFAQをご参照ください。<br>〇〇を□□の際は▷▷をθθθθにてお願いいたします。" />
      </div>
    </section>
  );
};

export default Contanct;
