"use client";

import Link from "next/link";
import { AtSignIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  label: string;
  icon?: React.ReactNode;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  className,
  label,
  icon,
}) => {
  const pathname = usePathname();
  //make active if the current path is the same as the href or the href is a substring of the current path starts with
  const isActive =
    pathname === href || (pathname.startsWith(href) && href !== "/");
  const iconCmp = icon ?? <AtSignIcon size={16} />;
  return (
    <>
      <Link
        key={href}
        href={href}
        className={cn(
          "group flex items-center justify-between rounded-lg py-2 px-3.5 ",
          isActive ? "bg-black text-white" : "hover:bg-gray-200"
        )}
      >
        <span className="flex items-center gap-2">
          {iconCmp}
          <span className={cn("font-medium", isActive && "text-white")}>
            {label}
          </span>
        </span>
      </Link>
    </>
  );
};
