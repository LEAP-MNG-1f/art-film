import { ExitIcon } from "@/public/Icons/SvgFiles";
import Link from "next/link";

export const UserProfile = () => {
  return (
    <div className="flex justify-end">
      <div className="flex bg-gray-400 items-center gap-5 px-5 my-2 rounded-xl py-2">
        <div>Admin. Admin</div>
        <img className="rounded-full " width={50} src="/propic.png" alt="" />
        <Link href={"/login"}>
          <div className="transition-transform transform hover:scale-150">
            <ExitIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};
