import { FC } from "react";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <Image src={"/MaedaGumi-Logo.png"} alt={"ロゴ"} height={71} width={98} />
  );
};

export default Logo;
