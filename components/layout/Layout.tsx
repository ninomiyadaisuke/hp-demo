import { FC, ReactNode, useState } from "react";
import Header from "../molecules/Header";
import Footer from "../organisms/layout/Footer";
import DrawerMenu from "../organisms/layout/DrawerMenu";

import styles from "../../styles/layouts.module.scss";
//! ⇩ DELETE 消さないといけない ⇩ //
import LinkModalMenu from "../organisms/layout/LinkModalMenu";
//! ⇧ DELETE 消さないといけない ⇧ //

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = props => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  //! ⇩ DELETE 消さないといけない ⇩ //
  const [openLink, setOpenLink] = useState(false);
  const openLinkHandler = () => {
    setOpenLink(prevState => !prevState);
  };
  //! ⇧ DELETE 消さないといけない ⇧ //

  return (
    <>
      <DrawerMenu open={open} setOpen={setOpen} />

      {/* ⇩ DELETE 消さないといけない ⇩ */}
      <LinkModalMenu
        openLinkHandler={openLinkHandler}
        open={openLink}
        setOpen={setOpenLink}
      />
      {/* ⇧ DELETE 消さないといけない ⇧ */}

      <div className={styles.backgroud}>
        <Header setOpen={setOpen} open={open} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
