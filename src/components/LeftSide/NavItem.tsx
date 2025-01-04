interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
}
const NavItem = ({ href, label, isActive }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={`group flex items-center py-3 w-max ${
          isActive ? "text-slate-200" : ""
        }`}
        aria-label={label}>
        <span
          className={` bg-slate-600 mr-4 inline-block transition-all duration-200 ${
            isActive
              ? "bg-slate-200 w-16 h-[2px]"
              : "w-8 h-px group-hover:w-16 group-hover:bg-slate-200"
          }`}></span>
        <span
          className={`uppercase text-xs font-bold tracking-widest transition-all duration-200 ${
            isActive
              ? "text-slate-200"
              : "text-slate-500 group-hover:text-slate-200"
          }`}>
          {label}
        </span>
      </a>
    </li>
  );
};

export default NavItem;
