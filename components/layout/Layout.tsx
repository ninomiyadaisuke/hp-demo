import { FC, ReactNode, useState } from "react";
import Header from "../molecules/Header";
import Footer from "../organisms/layout/Footer";
import DrawerMenu from "../organisms/layout/DrawerMenu";

import styles from "../../styles/layouts.module.scss";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <DrawerMenu open={open} setOpen={setOpen} />
      <div className={styles.backgroud}>
        <Header setOpen={setOpen} open={open} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
