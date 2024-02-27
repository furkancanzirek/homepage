import WritingList from "./components/WritingList";
import { ScrollArea } from "@/components/commons/ScrollArea";
const WritingsPage = () => {
  return (
    <div className="content-wrapper flex-1">
      <div className="content">
        <WritingList />
      </div>
    </div>
  );
};

export default WritingsPage;
