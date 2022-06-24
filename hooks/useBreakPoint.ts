import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, tablet: 800 };

export const useBreakPoint = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");
  const mobile = breakpoint === "mobile";
  return { mobile }
}