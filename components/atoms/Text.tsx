import { FC } from "react";
import HTMLReactParser from "html-react-parser";
import { returnCodeToBr } from "../../lib/helper";

type Props = {
  text: string;
};

const Text: FC<Props> = (props) => {
  const { text } = props;
  return <p>{HTMLReactParser(returnCodeToBr(text))}</p>;
};

export default Text;
