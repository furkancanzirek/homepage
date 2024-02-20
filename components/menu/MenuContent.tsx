import { MENU_LINKS } from "@/lib/constants";
import { NavigationLink } from "@/components/commons/NavigationLink";
import Link from "next/link";
export const MenuContent: React.FC<{}> = ({}) => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
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
        <ul>
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
      </div>
    </div>
  );
};
