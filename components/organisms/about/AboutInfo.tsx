import { FC } from "react";
import SnsIconLink from "../../atoms/SnsIconLink";
import useBreakpoint from "use-breakpoint";
import Yspacer from "../../atoms/Yspacer";
import styles from "../../../styles/organisms/about_info.module.scss";

const BREAKPOINTS = { mobile: 0, tablet: 768 };

const AboutInfo: FC = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");
  const mobile = breakpoint === "mobile";
  return (
    <section className={styles.info}>
      <h2>The Nayuta Zero</h2>
      <div className={styles.info__adress}>
        <div className={styles.info__adress_container}>
          <p className={styles.info__text}>
            〒811-2501 福岡県糟屋郡久山町久原１８２２
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.667514279705!2d130.5170433155751!3d33.639861946795385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541842937c2dfc5%3A0xe50d6cc4ab978cb5!2z5LmF5bGx5rip5rOJIOODm-ODhuODq-WkouWutg!5e0!3m2!1sja!2sjp!4v1655274026934!5m2!1sja!2sjp"
            loading="lazy"
            frameBorder={0}
          />
        </div>
      </div>
      <Yspacer spSize={40} pcSize={40} />
      <div className={styles.business}>
        <h3>営業時間</h3>
        {mobile && <span />}
        <div className={styles.business__container}>
          <p className={styles.business__week}>月曜日 〜 金曜日</p>
          <div >
            <div className={styles.business__flex}>
              <p className={styles.business__shop}>レストラン</p>
              <p className={styles.business__hours}>
                11:00 〜 18:00 <br />(ラストオーダー 17:00)
              </p>
            </div>
            <div className={styles.business__flex}>
              <p className={styles.business__shop}>カフェスペース</p>
              <p className={styles.business__hours}>
                11:00 〜 18:00 <br />(ラストオーダー 17:00)
              </p>
            </div>
            <div className={styles.business__flex}>
              <p className={styles.business__shop}>ジュースバー</p>
              <p className={styles.business__hours}>
                11:00 〜 18:00 <br />(ラストオーダー 17:00)
              </p>
            </div>
            <div className={styles.business__flex}>
              <p className={styles.business__shop}>セレクトショップ</p>
              <p className={styles.business__hours}>11:00 〜 18:00 </p>
            </div>
            <div className={styles.business__flex}>
              <p className={styles.business__shop}>産直・量り売り</p>
              <p>11:00 〜 18:00 </p>
            </div>
          </div>
        </div>
        <Yspacer pcSize={40} spSize={20} />
        <div className={styles.business__container}>
          <p className={styles.business__week}>月曜日 〜 金曜日</p>
          <div >
            <div className={styles.business__flex}>
              <p className={styles.business__shop}>レストラン</p>
              <p className={styles.business__hours}>
                11:00 〜 18:00 <br />(ラストオーダー 17:00)
              </p>
            </div>
            <div className={styles.business__flex}>
              <p className={styles.business__shop}>カフェスペース</p>
              <p className={styles.business__hours}>
                11:00 〜 18:00 <br />(ラストオーダー 17:00)
              </p>
            </div>
            <div className={styles.business__flex}>
              <p className={styles.business__shop}>ジュースバー</p>
              <p className={styles.business__hours}>
                11:00 〜 18:00 <br />(ラストオーダー 17:00)
              </p>
            </div>
            <div className={styles.business__flex}>
              <p className={styles.business__shop}>セレクトショップ</p>
              <p className={styles.business__hours}>11:00 〜 18:00 </p>
            </div>
            <div className={styles.business__flex}>
              <p className={styles.business__shop}>産直・量り売り</p>
              <p>11:00 〜 18:00 </p>
            </div>
          </div>
        </div>
      </div>
      <Yspacer spSize={40} pcSize={40} />
      <div className={styles.info__sns}>
        <div className={styles.info__sns_position}>
          <div className={styles.info__position}>
            <SnsIconLink
              link="/"
              path="/youtube-navy.png"
              text="Youtube"
              height={mobile ? 25 : 34}
              width={mobile ? 35 : 48}
            />{" "}
            {mobile && <Yspacer spSize={45} />}
            <SnsIconLink
              link="/"
              path="/Twitter.png"
              text="Twitter"
              height={mobile ? 25 : 34}
              width={mobile ? 31 : 42}
            />
            {mobile && <Yspacer spSize={45} />}
            <SnsIconLink
              link="/"
              path="/Instagram-navy.png"
              text="Instagram"
              height={mobile ? 29 : 40}
              width={mobile ? 29 : 40}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
