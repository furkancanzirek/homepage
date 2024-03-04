"use client";
import { Drawer } from "vaul";
import { CommandIcon } from "lucide-react";
import { MenuContent } from "../menu/MenuContent";
import { useEffect, useState } from "react";
export default function CustomDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  //listen window size change and close
  useEffect(() => {
    const closeDrawer = () => {
      setIsOpen(false);
    };
    window.addEventListener("resize", closeDrawer);
    return () => {
      window.removeEventListener("resize", closeDrawer);
    };
  }, []);
  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen} shouldScaleBackground>
      <Drawer.Trigger>
        <CommandIcon size={16} />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[11]" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[80%] flex-col rounded-t-lg bg-gray-100 z-50">
          <div className="flex-1 overflow-y-auto rounded-t-lg bg-white">
            <div className="pointer-events-none sticky inset-x-0 top-0 flex h-10 items-center justify-center overflow-hidden bg-white">
              <div className="h-1.5 w-12 shrink-0 rounded-full bg-gray-300" />
            </div>
            <div>
              <MenuContent />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
