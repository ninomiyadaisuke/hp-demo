import { FC } from "react";
import SliderAndButton from "../molecules/SliderAndButton";
import AccessGoogleMap from "../atoms/AccessGoogleMap";
import styles from "../../styles/templates/restaurant_template.module.scss";
import RestaurantTop from "../organisms/restaurant/RestaurantTop";
import RestaurantMenu from "../organisms/restaurant/RestaurantMenu";

const RestaurantTemplate: FC = () => {
  return (
    <article className={styles.restaurant}>
      <RestaurantTop />
      <RestaurantMenu />
      <RestaurantMenu />
      <SliderAndButton />
      <AccessGoogleMap />
    </article>
  );
};

export default RestaurantTemplate;
