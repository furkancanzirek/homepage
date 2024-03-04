import { MenuContent } from "@/components/menu/MenuContent";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import MobileMenuDrawer from "@/components/commons/MobileMenuDrawer";
import { ScrollArea } from "@/components/commons/ScrollArea";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="scrollbar-stable">
        <ScrollArea className="bg-white">
          <div vaul-drawer-wrapper="" className="flex-col flex ">
            <div className="container sticky top-0 bg-white z-10">
              <MenuContent className="hidden md:flex" />
            </div>
            <main>{children}</main>
          </div>
        </ScrollArea>
      </body>
    </html>
  );
}
