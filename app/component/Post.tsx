import { IoAdd } from "react-icons/io5";
import getUserChoose from "@/lib/getUserChoose";
export default function Post() {
    const userChoose:String[]=getUserChoose();
  return (
    <>
    <div className="w-[60vw]">
        <div className="flex items-center justify-evenly">
        <span><IoAdd/></span>
        {userChoose? userChoose.map((item,key)=>{
            return <span key={key}>{item}</span>
        }):<span>Not Found</span>}
        </div>
    </div>
    </>
  )
}
