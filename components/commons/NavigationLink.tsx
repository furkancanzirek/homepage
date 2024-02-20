import Link from "next/link";
import { AtSignIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const isActive = false;
  const iconCmp = icon ?? <AtSignIcon size={16} />
  return (
    <Link
      key={href}
      href={href}
      className={cn(
        "group flex items-center justify-between rounded-lg p-2",
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
  );
};
