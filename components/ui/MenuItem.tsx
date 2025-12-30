import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function MenuItem({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu.Item className="px-[8px] py-[6px] rounded hover:bg-white/10 cursor-pointer">
      {children}
    </DropdownMenu.Item>
  );
}
