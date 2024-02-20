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
    <div className={cn("scrollable-area", className)}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};
