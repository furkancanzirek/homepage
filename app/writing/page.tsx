import WritingList from "./components/WritingList"
import { ScrollArea } from "@/components/commons/ScrollArea"
const page = () => {
  return (
    <ScrollArea className='flex-1'>
    <div className='content-wrapper'>
        <div className='content'>
            <WritingList />
        </div>
    </div>
    </ScrollArea>
  )
}

export default page