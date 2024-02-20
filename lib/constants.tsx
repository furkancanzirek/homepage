//import from lucide
import { BriefcaseIcon, SparklesIcon, UserIcon } from "lucide-react";
export const MENU_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: <SparklesIcon size={16} />,
  },
  {
    label: "Work",
    href: "/work",
    //find a icon interesting for about
    icon: <BriefcaseIcon size={16} />,
  },
  {
    label: "About",
    href: "/about",
    //find a icon interesting for about
    icon: <UserIcon size={16} />
  },
];
