import { FC } from "react";
import useBreakpoint from "use-breakpoint";
import Spacer from "react-spacer";

const BREAKPOINTS = { mobile: 0, tablet: 768 };

type Props = {
  spSize?: number;
  pcSize: number;
};

const Wspacer: FC<Props> = (props) => {
  const { spSize = 0, pcSize } = props;
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");

  return (
    <>
      {breakpoint === "mobile" ? (
        <Spacer width={spSize} />
      ) : (
        <Spacer width={pcSize} />
      )}
    </>
  );
};

export default Wspacer;