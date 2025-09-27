import type React from "react";

declare module "*.mdx" {
  const MDXComponent: (props: React.ComponentPropsWithoutRef<"div">) => JSX.Element;
  export default MDXComponent;
}
