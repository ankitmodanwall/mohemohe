import { cn } from "@/lib/utils";
import Link from "next/link";
import { badgeVariants } from "./ui/badge";

interface ChapterProps {
  slug: string;
  chapterNum: number;
  currentNum?: boolean;
  chapterName?: string;
  

}
export default function ChapterBox({ slug, currentNum, chapterName, chapterNum }: ChapterProps) {

  return (<Link className={cn(" p-2 gap-3 grid-rows-2 w-full group flex items-center rounded-md hover:bg-secondary")} href={"/" + slug}>

    <div className={cn( ` w-8 h-8 rounded-full flex flex-shrink-0 items-center justify-center group-hover:bg-gray-300  ${currentNum? "bg-blue-600":"bg-blue-200"}` )}>
      <p className={cn(` text-center font-extrabold group-hover:text-gray-700 ${currentNum ? "text-white": "text-blue-500"}`)}>{chapterNum}</p>
    </div>
    <div className={cn("flex flex-col")}>
      <p className={cn(" text-sm text-muted-foreground")}>Chapter {chapterNum}</p>
      <p className={cn("text-sm text-wrap")}>{chapterName}</p>
    </div>

  </Link>)
}