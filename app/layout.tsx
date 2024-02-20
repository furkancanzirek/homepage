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
      <body>
        <div className="lg:flex">
          <ScrollArea className="hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r lg:w-60 xl:w-72">
            <div className="bg-zinc-50 p-3">
              <MenuContent />
            </div>
          </ScrollArea>
          {children}
        </div>
      </body>
    </html>
  );
}
