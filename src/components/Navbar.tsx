"use client";
import { logo } from "@/assets";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop - 50; // Adjust the offset as needed

        if (scrollPosition >= sectionTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar fixed w-full z-40 top-0  pt-4 `}>
      <div
        className={`width flex items-baseline py-2 px-4 border-[2px] border-transparent  ${
          scrolled
            ? " duration-500 ease-in-out bg-bg_btn_var rounded-full border-[2px] border-[#8f6a4c]"
            : ""
        } `}
      >
        <a
          href="#"
          className={`flex items-baseline w-max ${
            activeSection === "" ? "text-text_c" : ""
          } `}
          onClick={() => setActiveSection("")}
        >
          <Image src={logo} alt="logo" className="w-[30px]" />
          <h4>Safaricana.</h4>
        </a>
        <ul className=" flex-1 flex items-center justify-center gap-8">
          <li>
            <a
              href="#places"
              className={` text-[1.1rem] max-mobile:text-[.9rem] capitalize font-semibold duration-500 ease-out hover:text-text_c ${
                activeSection === "places" ? " text-text_c" : ""
              }`}
              onClick={() => setActiveSection("places")}
            >
              Places
            </a>
          </li>
          <li>
            <a
              href="#facts"
              className={` text-[1.1rem] max-mobile:text-[.9rem]  capitalize font-semibold duration-500 ease-out hover:text-text_c ${
                activeSection === "facts" ? "text-text_c" : ""
              }`}
              onClick={() => setActiveSection("facts")}
            >
              Facts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
