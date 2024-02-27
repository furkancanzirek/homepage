import { cn } from "@/lib/utils";

interface ScrollAreaProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <div className={cn("scrollable-area relative w-full", className)}>
      {children}
    </div>
  );
};
