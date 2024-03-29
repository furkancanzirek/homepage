import { cn, dateToMonthDay, dateToYear } from "@/lib/utils";
import Link from "next/link";
import { getFilesWithCount } from "@/lib/readMdxFile";

interface Write {
  title: string;
  summary: string;
  date: string;
  slug: string;
}

const MenuList = async () => {
  const writes = await getFilesWithCount(10);
  let groupedWrites: { [key: string]: Write[] } = {};
  writes.forEach((write) => {
    const year = dateToYear(new Date(write.date));
    if (!groupedWrites[year]) {
      groupedWrites[year] = [];
    }

    groupedWrites[year].push(write);
  });

  return (
    <div className="text-sm ">
      <div className="grid grid-cols-6 py-2 font-medium text-gray-500">
        <span className="col-span-1 text-left grid">Year</span>
        <span className="col-span-1 text-left grid">Date</span>
        <span className="col-span-4 text-left grid">Title</span>
      </div>
      <div className="group/wrapper">
        {Object.entries(groupedWrites)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, writes], yearIndex) => (
            <div key={year} className="mb-4 group/col">
              <ul className="group/item">
                {writes.map((write, writeIndex) => (
                  <Link
                    key={write.slug}
                    href={`/writings/${write.slug}`}
                    className=""
                  >
                    <li
                      key={write.slug}
                      className="grid grid-cols-6 pl-0  group-hover/wrapper:text-gray-300 
                  transition-all duration-100
                    hover:!text-gray-900
                  "
                    >
                      <span
                        className={cn(
                          "col-span-1 py-4 group-hover/item:text-gray-900 transition-all",
                          writeIndex === 0 ? "border-t" : ""
                        )}
                      >
                        {writeIndex === 0
                          ? dateToYear(new Date(write.date))
                          : ""}
                      </span>
                      <span className="col-span-1 border-t py-4">
                        {dateToMonthDay(new Date(write.date))}
                      </span>
                      <span className="col-span-4 border-t py-4 line-clamp-2">
                        <span className={cn("hover:underline")}>
                          {write.title}
                        </span>
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuList;
