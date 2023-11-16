"use client";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";

let locales = ["vi", "en"];

export const ChangeLangComponent = () => {
  const router = useRouter();

  const changeLangAction = (locale: "vi" | "en") => {
    Cookies.set("locale", locale);
    router.refresh();
  };

  return (
    <div className="flex flex-row gap-2">
      <div
        className="px-4 py-2 bg-cyan-400 cursor-pointer"
        onClick={() => changeLangAction("vi")}
      >
        <span>vi</span>
      </div>
      <div
        className="px-4 py-2 bg-red-400 cursor-pointer"
        onClick={() => changeLangAction("en")}
      >
        <span>en</span>
      </div>
    </div>
  );
};
