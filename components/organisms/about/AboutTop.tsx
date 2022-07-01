import { FC } from "react";
import Image from "next/image";
import Text from "../../atoms/Text";

import styles from '../../../styles/organisms/about_top.module.scss'

const AboutTop: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__title}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 135">
            <text
              id="About_The_Nayuta_Zero"
              data-name="About The Nayuta Zero"
              transform="translate(226 46)"
              fill="#444"
              fontSize="60"
              fontFamily="Helvetica"
            >
              <tspan x="-78.398" y="0">
                About
              </tspan>
              <tspan x="-225.103" y="75">
                The Nayuta Zero
              </tspan>
            </text>
          </svg>
          <Text
            text="Nayuta概要説明欄。ここに何か文章を掲載します。ここに何か文章を掲載します。ここに何か文章を掲載します。"
          />
        </div>
      </div>
      <Image src={"/abouttop.jpg"} alt={"backbround image"} layout={"fill"} objectFit={'cover'} />
      <div className={styles.about__scroll}>
        <Image
          src={"/scroll_icon.png"}
          alt={"scroll icon"}
          height={30}
          width={30}
        />
      </div>
    </section>
  );
};

export default AboutTop;
