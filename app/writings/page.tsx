import WritingList from "./components/WritingList";
import { ScrollArea } from "@/components/commons/ScrollArea";
import Header from "@/components/commons/Header";
const WritingsPage = () => {
  return (
    <>
      <Header />
      <div className="content-wrapper flex-1">
        <div className="content">
          <WritingList />
        </div>
      </div>
    </>
  );
};

export default WritingsPage;
