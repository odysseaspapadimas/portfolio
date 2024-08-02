import { ReactElement } from "react";

type Props = {
  href: string;
  Icon: ReactElement;
};

const SocialLink = ({ href, Icon }: Props) => {
  return (
    <a
      className="mx-2  [&_svg]:hover:stroke-primary [&_svg]:transition-colors "
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon}
    </a>
  );
};
export default SocialLink;
