import styles from "../../styles/organisms/access_map.module.scss";

const AccessGoogleMap = (props: { showTitle: boolean; typeColumn: boolean }) => {
  const { showTitle, typeColumn } = props;

  const classes = typeColumn ? "access__map" : "access__map_row";
  return (
    <section className={styles[classes]}>
      <div className={styles[`${classes}_mapouter`]}>
        <div className={styles[`${classes}_mapouter_gmap_canvas`]}>
          <iframe
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.667514279705!2d130.5170433155751!3d33.639861946795385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541842937c2dfc5%3A0xe50d6cc4ab978cb5!2z5LmF5bGx5rip5rOJIOODm-ODhuODq-WkouWutg!5e0!3m2!1sja!2sjp!4v1655274026934!5m2!1sja!2sjp"
            frameBorder="0"
            loading="lazy"
            // scrolling="yes"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
        </div>
      </div>
      <div className={styles[`${classes}_text`]}>
        {showTitle && <h3>Access</h3>}
        <p>〒811-2501 福岡県糟屋郡久山町久原１８２２</p>
      </div>
    </section>
  );
};

export default AccessGoogleMap;
