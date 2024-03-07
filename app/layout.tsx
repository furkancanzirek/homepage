import { MenuContent } from "@/components/menu/MenuContent";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import MobileMenuDrawer from "@/components/commons/MobileMenuDrawer";
import { ScrollArea } from "@/components/commons/ScrollArea";
import type { Metadata } from 'next'
interface RootLayoutProps {
  children: React.ReactNode;
}

 
export const metadata: Metadata = {
  metadataBase: new URL('https://zirek.dev'),
  robots: {
    index: true,
    follow: true
  },
  title: 'Furkan Can Zirek',
  description: 'Furkan Can Zirek is a Software Engineer at Monopayments. He lives in Istanbul, Turkey. Some of his main interest areas are Music, Traveling, Video Games and JavaScript (programming language).',
  applicationName: 'Furkan Can Zirek',
  keywords: ['Furkan Can Zirek', 'Software Engineer', 'Monopayments', 'Istanbul', 'Turkey', 'Music', 'Traveling', 'Video Games', 'JavaScript','Next.js','React','Tailwind CSS'],
  category: 'Personal',
  

  
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
