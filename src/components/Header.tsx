import IconLogoEmail from "./ICONS/IconLogoEmail";
import IconTextEmail from "./ICONS/IconTextEmail";


type HeaderProps = {
  isDark: boolean
}

export default function Header({ isDark }: HeaderProps) {
  return (
    <div className="w-full px-[16px] flex items-center h-[56px] shadow-header-light bg-white dark:bg-[#232324]">
      <div className="flex cursor-pointer h-full items-center">
        <IconLogoEmail/>
        <IconTextEmail color={isDark ? "#ffffff" : undefined} className="ml-[9px] pb-[6px]" />
      </div>
    </div>
  );
}
