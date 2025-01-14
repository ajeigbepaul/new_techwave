import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";

import NavModal from "./NavModal";

// Define the structure of each sublink (inside subLinks)
interface subLinkProps {
  title: string;
  Icon: string; // If the icon is a React component, you can refine this further to React.FC or JSX.Element
  link: string;
}

// Define the structure for navItems
interface navItemProps {
  id: number;
  title: string;
  link: string;
  subLinks?: subLinkProps[]; // subLinks is optional since not all navItems have subLinks
}

const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null); // State to manage dropdown visibility
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to manage modal visibility
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
  const toggleDropdown = (id: number | null) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
    setIsModalOpen((prev) => (prev ? !prev : true));
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setOpenDropdownId(null);
  };
  const pathname = usePathname();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<number | null>(1); // Track active item
  useEffect(() => {
    // Set active item based on pathname when the component mounts or pathname changes
    const activeNavItem = navItems.find((item) => {
      // Check if the pathname matches the item's link or if the pathname starts with the item's link
      return pathname === item.link || pathname.startsWith(item.link + "/");
    }); // || navItems[0]; Default to first item (Home)

    setActiveItem(activeNavItem?.id ?? null);
  }, [pathname]); // Run effect when pathname changes

  const handleNavClick = (id: number, link: string) => {
    setActiveItem(id); // Set clicked item as active
    if (link === "#") {
      // If the link is '#', do not navigate, just set active
      return;
    }
    closeMenu();
    router.push(link);
  };
  return (
    <div className="lg:flex gap-4 items-center w-full">
      {navItems.map((item: navItemProps) => (
        <div
          onClick={() => handleNavClick(item.id, item.link)}
          key={item.id}
          className={cn(
            "flex items-center my-8 text-[18px] max-md:text-[14px] font-normal mx-3 transition-all duration-75 ease-in list-none w-fit cursor-pointer ",
            activeItem === item.id ||
              (item.link === "#" && activeItem === item.id)
              ? "font-semibold text-[#181818]"
              : "text-[#888888]"
          )}
        >
          <div className="flex items-center justify-center">
            <span>
              <Link
                onClick={(e) => {
                  if (item.subLinks) {
                    e.stopPropagation(); // Prevents unwanted link click
                    toggleDropdown(item.id);
                  }
                }}
                href={item?.link}
              >
                {item.title}
              </Link>
            </span>
            {item.subLinks && (
              <button
                className="ml-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents unwanted link click
                  toggleDropdown(item.id);
                }}
              >
                {openDropdownId === item.id ? (
                  <RxCaretUp size={24} />
                ) : (
                  <RxCaretDown size={24} />
                )}
              </button>
            )}
          </div>
          {/* Modal only opens for items with sublinks */}
          {openDropdownId === item.id && isModalOpen && (
            <NavModal
              isOpen={isModalOpen}
              item={item.subLinks ?? []} // Pass subLinks directly
              onClose={closeModal}
            />
          )}
        </div>
      ))}
      <div className="flex items-center px-6">
        <Image src={"/flag1.svg"} width={28} height={28} alt="country-flag" />
        <span className="text-[16px] text-[#888888]">ENG</span>
        <RxCaretDown size={24} />
      </div>
    </div>
  );
};

export default NavLinks;
