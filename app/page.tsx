import MenuList from "@/components/MenuList";
import { PageTitle } from "@/components/commons/PageTitle";
import Header from "@/components/commons/Header";
import { Suspense } from "react";

export default async function Home() {

  return (
    <>
      <Header />
      <div className="content-wrapper flex-1">
        <div className="content">
          <PageTitle title="Home" className="md:hidden" />
          <p>
            {`Hi 👋 I'm Furkan Can Zirek, and I’m a Software Engineer at Monopayments. I live in Istanbul, Turkey
            Some of my main interest areas are Music, Traveling, Video Games and JavaScript (programming language).`}
          </p>

          <p>
            Here, on my website, you’ll find my writings and thoughts about
            random topics. You can also find some of my projects and learn more
            about me.
            {/*  <Link className="text-black font-bold hover:underline" href="/about">
            learn more about me.
          </Link> */}
          </p>

          <div className="py-20">
            <MenuList />
          </div>
        </div>
      </div>
    </>
  );
}
