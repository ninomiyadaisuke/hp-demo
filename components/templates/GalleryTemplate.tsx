import { FC } from "react";
import GalleryTop from "../organisms/gallery/GalleryTop";
import GalleryConcept from "../molecules/gallery/GalleryConcept";
import GalleryImageText from "../molecules/gallery/GalleryImageText";
import AccessGoogleMap from "../atoms/AccessGoogleMap";
import ToEcButton from "../atoms/ToEcButton";
import ImportantPoints from "../atoms/ImportantPoints";
import Yspacer from "../atoms/Yspacer";

import styles from "../../styles/templates/gallery_template.module.scss";

const GalleryTemplate: FC = () => {
  return (
    <article className={styles.gallery}>
      <GalleryTop />
      <GalleryConcept />
      <section className={styles.gallery__images}>
        <GalleryImageText
          type="left"
          path="/tougei.jpg"
          title="取り扱い商品の紹介 ： 陶芸品"
          subTitle="2行目も必要な場合の行"
          text="コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。
        コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。
        コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。"
        />
        <Yspacer pcSize={80} spSize={146} />
        <GalleryImageText
          type="right"
          path="/huku.jpg"
          title="取り扱い商品の紹介 ： 衣服"
          subTitle="2行目も必要な場合の行"
          text="コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。
        コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。
        コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。"
        />
        <Yspacer pcSize={80} spSize={146} />
        <GalleryImageText
          type="left"
          path="/katorari.jpg"
          title="取り扱い商品の紹介 ： カトラリー"
          subTitle="2行目も必要な場合の行"
          text="コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。
        コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。
        コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。"
        />
        <Yspacer pcSize={80} spSize={146} />
        <GalleryImageText
          type="right"
          path="/daidokoro.jpg"
          title="取り扱い商品の紹介 ： 台所用品"
          subTitle="2行目も必要な場合の行"
          text="コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。
        コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。
        コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。コンセプトやキャッチコピーなどを掲載します。"
        />
      </section>
      <AccessGoogleMap />
      <ToEcButton />
      <ImportantPoints />
    </article>
  );
};

export default GalleryTemplate;
