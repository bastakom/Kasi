"use client";
import { useState, useEffect } from "react";
import LinkBtn from "@/components/LinkBtn";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const HeaderSection = (props: any) => {
  const [isVisible, setIsVisible] = useState(true);
  const [textColor, setTextColor] = useState("text-white");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [headerActive, setHeaderActive] = useState();
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  let lastScrollPosition = 0;
  const sections = [
    { id: "hero", name: "Sektion 1", color: "text-white" },
    { id: "main", name: "Sektion 2", color: "text-black" },
    { id: "footer", name: "Sektion 3", color: "text-white" },
  ];

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 900);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 8;

    // Kontrollera scroll-riktningen
    if (scrollPosition > lastScrollPosition) {
      // Scrollar ner
      setIsScrollingUp(false);
    } else if (scrollPosition < lastScrollPosition) {
      // Scrollar upp
      setIsScrollingUp(true);
    }

    lastScrollPosition = scrollPosition;

    if (window.scrollY <= 790 && !isMobile) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setIsVisible(window.scrollY <= 790 && !isMobile);

    let currentSection = "";
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        const offsetBottom = offsetTop + element.offsetHeight;

        let buffer = 100;
        if (section.id === "hero") buffer = 150;
        if (section.id === "footer") buffer = 20;
        if (
          scrollPosition >= offsetTop + buffer &&
          scrollPosition <= offsetBottom - buffer
        ) {
          currentSection = section.id;
        }
      }
    });

    // Kontrollera hero-sektionens specifika synlighet
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      const heroRect = heroElement.getBoundingClientRect();
      const heroTop = heroRect.top + window.scrollY;
      const heroBottom = heroTop + heroElement.offsetHeight;

      if (scrollPosition >= heroTop && scrollPosition <= heroBottom) {
        currentSection = "hero";
      }
    }

    setActiveSection(currentSection);
  };
  useEffect(() => {
    const activeSectionData = sections.find(
      (section) => section.id === activeSection
    );
    if (activeSectionData) {
      setTextColor(activeSectionData.color);
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuClick = (id: any) => {
    setHeaderActive(id);
  };

  const menuItems = props.props.story.content.header_menu;
  const { url } = props.props.story.content.LinkedIn;

  return (
    <header>
      <nav
        className={`absolute top-[6%] left-[77%] lg:fixed lg:top-[6%] lg:left-[75%] right-0 z-10 ${
          isScrollingUp ? "visible opacity-100" : "invisible opacity-0"
        } transition-opacity duration-300`}
        style={{ zIndex: 1000 }}
      >
        <div className="max-w-screen-xl mx-auto md:p-4 lg:p-0">
          <div className="flex  items-center md:justify-center">
            <div className="flex md:items-center lg:ml-[5rem] lg:min-w-[19.54vw]">
              {/* Hamburger-meny knapp */}
              <button
                type="button"
                className="inline-flex items-center p-2 w-16 h-16 justify-center text-sm rounded-lg lg:hidden focus:outline-none"
                aria-controls="navbar-search"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-[200px] ${
                    textColor === "text-white" ? "text-white" : "text-black"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>

              {/* Meny för större skärmar */}
              <div className="flex items-center lg:w-full justify-between lg:justify-center">
                <ul className="hidden lg:flex lg:flex-grow lg:flex-col lg:mt-0 lg:border-0 lg:bg-transparent justify-evenly">
                  {menuItems.map((element: any, i: number) => (
                    <li
                      key={i}
                      onClick={() => handleMenuClick(i)}
                      className={"cursor-pointer md:flex-grow lg:flex-grow "}
                    >
                      <LinkBtn
                        className={`${textColor} font-small text-[38px] ${
                          headerActive === i && "underline"
                        }`}
                        link={element.link.url}
                        title={element.title}
                      />
                    </li>
                  ))}
                </ul>
                {/* LinkedIn ikonen */}
                {!isMobile && (
                  <div
                    className="hidden xl:flex xl:justify-center xl:h-[145px] xl:w-[7.81vw]"
                    style={{ display: isVisible ? "flex" : "none" }}
                  >
                    <LinkBtn link={url}>
                      <FaLinkedinIn
                        className={`text-white text-[38px] transition-opacity duration-300 ${
                          isVisible ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </LinkBtn>
                  </div>
                )}
              </div>

              <div
                className={`fixed flex-col h-[100vh] w-full left-0 top-0 z-50 bg-white gap-5 pt-24  transition-all duration-500 right-0 ${
                  isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <button
                  className="fixed top-0 right-0 z-10"
                  onClick={toggleMenu}
                >
                  <IoMdClose
                    fontSize={60}
                    className="mt-[2rem] mr-[2rem] md:mt-[2rem] md:mr-[2rem]"
                  />
                </button>
                <div className="flex items-center justify-center h-[62vh]">
                  <ul>
                    {menuItems.map((element: any, i: number) => (
                      <li key={i} className="mb-[20px]" onClick={toggleMenu}>
                        <LinkBtn
                          className={"font-small text-[38px]"}
                          link={element.link.url}
                          title={element.title}
                        />
                      </li>
                    ))}
                    <div className="flex justify-center mt-[4rem]">
                      <LinkBtn link={url}>
                        <FaLinkedinIn className="text-[#3f3f46] text-[38px]" />
                      </LinkBtn>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
