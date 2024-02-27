import { ScrollArea } from "@/components/commons/ScrollArea";
import { MenuContent } from "@/components/menu/MenuContent";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="scrollbar-stable">
        <div className="flex-col flex">
          <div className="container sticky top-0 bg-white z-10">
            <MenuContent />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
