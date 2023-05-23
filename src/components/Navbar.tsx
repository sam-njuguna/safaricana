"use client";
import { btn, logo } from "@/assets";
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
    <nav className={`navbar fixed w-full z-40 top-0  pt-2 `}>
      <div className={`width h-[80px] relative`}>
        {scrolled ? (
          <Image
            src={btn}
            alt="header"
            className="object-fit h-[80px] w-full duration-300 ease-out"
          />
        ) : (
          ""
        )}
        <div className="absolute top-0 w-full flex items-baseline px-8 py-5 ">
          <a
            href="#"
            className={`flex items-baseline w-max ${
              activeSection === "" ? "text-text_c" : ""
            } `}
            onClick={() => setActiveSection("")}
          >
            <Image src={logo} alt="logo" className="w-[40px]" />
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
      </div>
    </nav>
  );
};

export default Navbar;
