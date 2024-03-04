import { MENU_LINKS } from "@/lib/constants";
import { NavigationLink } from "@/components/commons/NavigationLink";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface MenuContentProps {
  className?: string;
}
export const MenuContent = ({ className }: MenuContentProps) => {
  return (
    <div className={cn("flex w-full text-sm", className)}>
      <div className="flex w-full md:justify-between md:items-center gap-4 py-3 md:flex-row flex-col px-3 md:px-0">
        <Link
          href="/"
          className="link-card inline-flex md:items-center gap-2 p-2"
        >
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
        <div className="flex md:flex-row flex-col gap-4 md:gap-0">
          <ul className="gap-2.5 flex  md:items-center md:flex-row flex-col">
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
          <div className="px-3 flex gap-2 md:items-center">
            <a href="https://github.com/furkancanzirek" target="blank">
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/furkancanzirek/"
              target="blank"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
