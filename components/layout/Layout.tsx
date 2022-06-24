import { FC, ReactNode, useState } from "react";
import Header from "../molecules/Header";
import Footer from "../organisms/layout/Footer";
import DrawerMenu from "../organisms/layout/DrawerMenu";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <DrawerMenu open={open} setOpen={setOpen} />
      <Header setOpen={setOpen} open={open} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
