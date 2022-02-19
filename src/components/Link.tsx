import { Link as ReactPDFLink } from "@react-pdf/renderer";

export const Link = ({ children, style, href = "" }) => {
  return (
    <ReactPDFLink src={href} style={[{ textDecoration: "none" }, style]}>
      {children}
    </ReactPDFLink>
  );
};
