import { FC, ElementType, ReactNode,memo } from "react";

type Props = {
  level: number;
  children: ReactNode;
 
  className?: string;
};

const Title: FC<Props> = (props) => {
  const { level, children } = props;
  const H = `h${level}` as ElementType;
  return <H >{children}</H>;
};

export default Title;
