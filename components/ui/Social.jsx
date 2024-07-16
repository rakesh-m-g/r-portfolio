import Link from "next/link";
import { Container } from "postcss";
import { FaGithu, FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/rakesh-m-g" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rakesh-mg/" },
  {
    icon: <FaEnvelope />,
    path: "https://mail.google.com/mail/?view=cm&fs=1&to=vsk00444@gmail.com",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
