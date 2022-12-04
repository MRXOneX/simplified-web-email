import IconArchive from "./ICONS/IconArchive";
import IconBasket from "./ICONS/IconBasket";
import IconDrafts from "./ICONS/IconDrafts";
import IconImportant from "./ICONS/IconImportant";
import IconInBox from "./ICONS/IconInBox";
import IconSent from "./ICONS/IconSent";
import IconSpam from "./ICONS/IconSpam";
import IconTopic from "./ICONS/IconTopic";

type SidebarProps = {
  isDark: boolean;
  setIsDark: (prevIsDark: any) => void;
};

export default function Sidebar({ setIsDark, isDark }: SidebarProps) {
  const onHandleToggleDarkTopic = () => setIsDark((prev: boolean) => !prev);

  return (
    <div
      style={{
        height: "calc(100% - 56px)",
      }}
      className="w-[232px] py-[12px] px-[16px] flex flex-col justify-between"
    >
      <div className="flex font-[Arial] text-[15px] leading-[20px] font-bold flex-col">
        <button className="rounded-[8px] bg-white border py-[8px] border-[rgba(0, 16, 61, 0.12)] text-[#333333]">
          Написать письмо
        </button>

        <div className="flex text-[#333333] font-[Arial] font-normal text-[15px] leading-[20px] dark:text-[#E7E8EA] flex-col mt-[12px]">
          <button className="rounded-[8px] flex items-center text-left bg-[#e3e5ea] dark:bg-[#FFFFFF14] px-[14px] py-[11px]">
            <IconInBox color={isDark ? "#E7E8EA" : undefined} />
            <span className="ml-[10px] font-bold">Входящие</span>
          </button>
          <button className="rounded-[8px] flex items-center text-left px-[14px] py-[11px]">
            <IconImportant color={isDark ? "#E7E8EA" : undefined} />
            <span className="ml-[10px]">Важное</span>
          </button>
          <button className="rounded-[8px] flex items-center text-left px-[14px] py-[11px]">
            <IconSent color={isDark ? "#E7E8EA" : undefined} />
            <span className="ml-[10px]">Отправленные</span>
          </button>
          <button className="rounded-[8px] flex items-center text-left px-[14px] py-[11px]">
            <IconDrafts color={isDark ? "#E7E8EA" : undefined} />
            <span className="ml-[10px]">Черновики</span>
          </button>
          <button className="rounded-[8px] flex items-center text-left px-[14px] py-[11px]">
            <IconArchive color={isDark ? "#E7E8EA" : undefined} />
            <span className="ml-[10px]">Архив</span>
          </button>
          <button className="rounded-[8px] flex items-center text-left px-[14px] py-[11px]">
            <IconSpam color={isDark ? "#E7E8EA" : undefined} />
            <span className="ml-[10px]">Спам</span>
          </button>
          <button className="rounded-[8px] flex items-center text-left px-[14px] py-[11px]">
            <IconBasket color={isDark ? "#E7E8EA" : undefined} />
            <span className="ml-[10px]">Корзина</span>
          </button>
          <div className="w-full h-[1px] bg-[#00103D1F] dark:bg-[#00000066] my-[8px]" />
        </div>
      </div>
      <button
        onClick={onHandleToggleDarkTopic}
        className="flex px-[16px] py-[8px] items-center"
      >
        <IconTopic color={isDark ? "#E7E8EA" : undefined} />
        <span className="font-normal dark:text-[#E7E8EA] ml-[9px] leading-[20px] text-[15px] font-[Arial] text-[#333333]">
          Тема: {isDark ? "темная" : "светлая"}
        </span>
      </button>
    </div>
  );
}
