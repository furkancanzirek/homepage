import Image from "next/image";
import { ScrollArea } from "@/components/commons/ScrollArea";
import Link from "next/link";
import WritingMore from "./writings/components/WritingMore";
import MenuList from "@/components/MenuList";

export default function Home() {
  return (
    <div className="content-wrapper flex-1">
      <div className="content">
        <p>
          {`Hi 👋 I'm Furkan Can Zirek, and I’m a Software Engineer at Monopayments. I live in Istanbul, Turkey
            Some of my main interest areas are Music, Traveling, Video Games and JavaScript (programming language).`}
        </p>

        <p>
          Here, on my website, you’ll find my writings and thoughts about random
          topics. You can also find some of my projects and{" "}
          <Link className="text-black font-bold hover:underline" href="/about">
            learn more about me.
          </Link>
        </p>

        <div className="py-20">
          <MenuList />
        </div>
      </div>
    </div>
  );
}
