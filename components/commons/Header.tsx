"use client";
import { Button } from "../ui/button";
import MobileMenuDrawer from "./MobileMenuDrawer";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  goBackLink?: string;
};

const Header = ({ goBackLink }: Props) => {
  return (
    <>
      {goBackLink ? (
        <div className="py-2 border-b  h-12 flex w-full items-center px-3 md:hidden">
          <Button variant="ghost" size="icon" className="shrink-0" asChild>
            <Link href={goBackLink} title="Go back">
              <ArrowLeftIcon size={16} />
            </Link>
          </Button>
        </div>
      ) : (
        <MobileMenuDrawer />
      )}
    </>
  );
};
export default Header;
