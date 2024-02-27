import { MENU_LINKS } from "@/lib/constants";
import { NavigationLink } from "@/components/commons/NavigationLink";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

export const MenuContent: React.FC<{}> = ({}) => {
  return (
    <div className="flex w-full text-sm">
      <div className="flex w-full justify-between items-center gap-4 py-3">
        <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
          <img
            src="/assets/me.jpeg"
            alt="Furkan Can Zirek"
            width={40}
            height={40}
            loading="lazy"
            className="rounded-full border shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">
              Furkan Can Zirek
            </span>
            <span className="text-gray-600">Frontend Engineer</span>
          </div>
        </Link>
        <div className="flex">
          <ul className="space-x-2.5 flex  items-center">
            {MENU_LINKS.map((link) => (
              <NavigationLink
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
              >
                {link.label}
              </NavigationLink>
            ))}
          </ul>
          <div
            className="
        px-3 flex gap-2 items-center
        "
          >
            <a href="https://github.com/furkancanzirek" target="blank">
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/furkancanzirek/"
              target="blank"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
