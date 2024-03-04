import MobileMenuDrawer from "@/components/commons/MobileMenuDrawer";

interface WritingLayoutProps {
  children: React.ReactNode;
}


export default async function WritingLayout({ children }: WritingLayoutProps) {
  return (
    <div className="flex-1">
      {children}
    </div>
  );
}
