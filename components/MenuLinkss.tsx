import { forwardRef, DetailedHTMLProps, AnchorHTMLAttributes } from "react";

type Props = {
  className?: string;
  text: string;
  side?: string;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
// eslint-disable-next-line react/display-name
const MenuLinkss = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { side, text, href, onClick, className } = props;

  return (
    <>
      <a href={href} className={className} onClick={onClick} ref={ref}>
        {text}
      </a>
    </>
  );
});

export default MenuLinkss;
