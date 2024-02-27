import Image from "next/image";
import { ScrollArea } from "@/components/commons/ScrollArea";

export default function Home() {
  return (
    <div className="content-wrapper flex-1">
      <div className="content">
        <p>
          {
            "Hi 👋 I'm Furkan, a software engineer, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quidem, accusantium iure sit eaque officiis qui praesentium quam? Neque, quam!"
          }
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          nihil! Doloremque placeat ipsam vel magni, sit consectetur inventore
          nam optio at dolores autem id qui laboriosam, quis laborum soluta
          quisquam? Nobis odio quam cupiditate officia saepe est sint ut,
          aliquam culpa dolore vitae doloremque! Deleniti quisquam consectetur
          neque asperiores vero.
        </p>
      </div>
    </div>
  );
}
