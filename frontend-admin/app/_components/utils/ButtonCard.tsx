"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type buttonType = {
  title: string;
  route?: string;
};

export const ButtonCardWO = (props: buttonType) => {
  const pathname = usePathname();

  return (
    <Link href={`${props.route}`}>
      <button
        className={` ${
          pathname === `${props.route}` ? "text-orange-500" : "text-black"
        } relative  text-black group`}
      >
        {props.title}
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </button>
    </Link>
  );
};

export const ButtonCardBO = (props: buttonType) => {
  const pathname = usePathname();
  return (
    <Link href={`${props.route}`}>
      <button
        className={` ${
          pathname === "/" ? "text-orange-500" : "text-slate-900"
        } relative  text-slate-900 group`}
      >
        {props.title}
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </button>
    </Link>
  );
};
