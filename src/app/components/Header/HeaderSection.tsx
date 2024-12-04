/* "use client";
import { useState, useEffect } from "react";
import LinkBtn from "@/components/LinkBtn";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const HeaderSection = (props: any) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [textColor, setTextColor] = useState<string>("text-white");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleResize = () => {
    // Kolla skärmstorlek för att sätta isMobile flaggan
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleScroll = () => {
    // Ändra visibilitet av LinkedIn-ikonen baserat på scrollposition och skärmstorlek
    if (window.scrollY <= 790 && !isMobile) {
      setIsVisible(true); // Visa LinkedIn-ikonen om scrollposition är under 450px och inte mobil
    } else {
      setIsVisible(false);
    }

    if (window.scrollY > 790 && window.scrollY < 4890) {
      setTextColor("text-black");
    } else {
      setTextColor("text-white");
    }
  };

  useEffect(() => {
    // Lägg till event listeners för scroll och resize
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initiera om vid mount för att kontrollera skärmstorlek direkt
    handleResize();

    // Rensa event listeners vid unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (index: number) => {
    console.log(activeMenu);
    setActiveMenu(index); // Set active menu index
  };

  const menuItems = props.props.story.content.header_menu;
  const { Logo, button, title, home } = props.props.story.content;

  return (
    <header>
      <nav
        className="absolute top-[6%] left-[77%] lg:fixed  lg:top-[8%] lg:left-[75%] right-0 z-10"
        style={{ zIndex: 1000 }}
      >
        <div className="max-w-screen-xl mx-auto md:p-4">
          <div className="flex  items-center md:justify-center">
            <div className="flex md:items-center lg:ml-[5rem]">
              
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

              <div className="flex items-center lg:w-full lg:min-w-[298.4px] justify-between lg:justify-center">
                <ul className="hidden lg:flex lg:flex-grow lg:flex-col lg:mt-0 lg:border-0 lg:bg-transparent justify-evenly">
                  {menuItems.map((element: any, i: number) => (
                    <li
                      key={i}
                      onClick={() => handleMenuClick(i)}
                      className={`cursor-pointer md:flex-grow  ${
                        activeMenu === i ? "underline" : ""
                      }`}
                    >
                      <LinkBtn
                        className={`${textColor} font-small text-[38px]`}
                        link={element.link.url}
                        title={element.title}
                      />
                    </li>
                  ))}
                </ul>
              
                {!isMobile && (
                  <div
                    className="hidden xl:flex xl:justify-center xl:h-[145px] xl:w-[150px]"
                    style={{ display: isVisible ? "flex" : "none" }}
                  >
                    <a
                      href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFbjrcSnY_NwAAAAZNzUgto7aVxWhyjbROF8-3f36DYSPGI-VisVhBiIg2G_9kk6maP-BmJeG_ZWm-CKQvNnCuXFFnXBLA31NxfzUZTTh4c77TorJJ34JXhue3Z8LpMCDsL6jc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdavid-andersson-919869131"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn
                        className={`text-white text-[38px] transition-opacity duration-300 ${
                          isVisible ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </a>
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
                  <IoMdClose fontSize={60} />
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

                    <div className="flex justify-end mt-[4rem]">
                      <a
                        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFbjrcSnY_NwAAAAZNzUgto7aVxWhyjbROF8-3f36DYSPGI-VisVhBiIg2G_9kk6maP-BmJeG_ZWm-CKQvNnCuXFFnXBLA31NxfzUZTTh4c77TorJJ34JXhue3Z8LpMCDsL6jc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdavid-andersson-919869131"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="text-[#3f3f46] text-[38px]" />
                      </a>
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

export default HeaderSection; */
"use client";
import { useState, useEffect } from "react";
import LinkBtn from "@/components/LinkBtn";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const HeaderSection = (props: any) => {
  const [isVisible, setIsVisible] = useState(true); // LinkedIn-ikonens synlighet
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobila menyns öppna/stängda status
  const [activeSection, setActiveSection] = useState(""); // Aktiv sektion
  const [isMobile, setIsMobile] = useState(false); // Mobilstatus
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const sections = [
    { id: "hero", name: "Sektion 1", color: "text-white" },
    { id: "main", name: "Sektion 2", color: "text-black" },
    { id: "footer", name: "Sektion 2", color: "text-white" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 8; // Justera här (1/3 av skärmen används som "tröskel")

      let currentSection = "";

      if (window.scrollY <= 790 && !isMobile) {
        setIsVisible(true); // Visa LinkedIn-ikonen om scrollposition är under 450px och inte mobil
      } else {
        setIsVisible(false);
      }

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetBottom = offsetTop + element.offsetHeight;

          let buffer = 100; // Standardbuffert
          if (section.id === "hero") buffer = 150; // Öka bufferten för hero
          if (section.id === "footer") buffer = 1200;
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
          currentSection = "hero"; // Prioritera hero
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("resize", handleResize);

    // Initiera om vid mount för att kontrollera skärmstorlek direkt
    handleResize();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleMenuClick = (index: number) => {
    console.log(activeMenu);
    setActiveMenu(index); // Set active menu index
  };
  const handleResize = () => {
    // Kolla skärmstorlek för att sätta isMobile flaggan
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  const menuItems = props.props.story.content.header_menu;
  const textColor =
    sections.find((section) => section.id === activeSection)?.color ||
    "text-white";

  return (
    <header>
      <nav
        className="absolute top-[6%] left-[77%] lg:fixed  lg:top-[8%] lg:left-[75%] right-0 z-10"
        style={{ zIndex: 1000 }}
      >
        <div className="max-w-screen-xl mx-auto md:p-4">
          <div className="flex  items-center md:justify-center">
            <div className="flex md:items-center lg:ml-[5rem]">
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

              <div className="flex items-center lg:w-full lg:min-w-[298.4px] justify-between lg:justify-center">
                <ul className="hidden lg:flex lg:flex-grow lg:flex-col lg:mt-0 lg:border-0 lg:bg-transparent justify-evenly">
                  {menuItems.map((element: any, i: number) => (
                    <li
                      key={i}
                      onClick={() => handleMenuClick(i)}
                      className={`cursor-pointer md:flex-grow  ${
                        activeMenu === i ? "underline" : ""
                      }`}
                    >
                      <LinkBtn
                        className={`${textColor} font-small text-[38px]`}
                        link={element.link.url}
                        title={element.title}
                      />
                    </li>
                  ))}
                </ul>

                {!isMobile && (
                  <div
                    className="hidden xl:flex xl:justify-center xl:h-[145px] xl:w-[150px]"
                    style={{ display: isVisible ? "flex" : "none" }}
                  >
                    <a
                      href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFbjrcSnY_NwAAAAZNzUgto7aVxWhyjbROF8-3f36DYSPGI-VisVhBiIg2G_9kk6maP-BmJeG_ZWm-CKQvNnCuXFFnXBLA31NxfzUZTTh4c77TorJJ34JXhue3Z8LpMCDsL6jc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdavid-andersson-919869131"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn
                        className={`text-white text-[38px] transition-opacity duration-300 ${
                          isVisible ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </a>
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
                  <IoMdClose fontSize={60} />
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

                    <div className="flex justify-end mt-[4rem]">
                      <a
                        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFbjrcSnY_NwAAAAZNzUgto7aVxWhyjbROF8-3f36DYSPGI-VisVhBiIg2G_9kk6maP-BmJeG_ZWm-CKQvNnCuXFFnXBLA31NxfzUZTTh4c77TorJJ34JXhue3Z8LpMCDsL6jc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdavid-andersson-919869131"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="text-[#3f3f46] text-[38px]" />
                      </a>
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
