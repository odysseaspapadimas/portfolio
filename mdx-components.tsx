import type { MDXComponents } from "mdx/types";
import Brainrot from "@/content/case-studies/brainrot.mdx";

const components: MDXComponents = {
  Brainrot,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
