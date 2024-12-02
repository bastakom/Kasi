/* "use client";
import { useState, useEffect } from "react";
import LinkBtn from "@/components/LinkBtn";

const HeaderSection = (props: any) => {
  console.log("in headerSection", props.props.story.content);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("bg-transparent");
  const [textColor, setTextColor] = useState<string>("text-white");

  const handleMenu = () => {
    // Hanterar scroll-effekt för att dölja/visa header
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);

    // Ändrar bakgrunds- och textfärg beroende på scroll-position
    if (window.scrollY > 30) {
      setBgColor("bg-[#ececeb]");
      setTextColor("text-black"); // Ändrar textfärg till svart när scroll-position är mer än 400px
    } else {
      setBgColor("bg-transparent");
      setTextColor("text-white"); // Återställ till vit text när vi är på toppen
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMenu);

    return () => {
      window.removeEventListener("scroll", handleMenu);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = props.props.story.content.header_menu;
  const { Logo, button, title, home } = props.props.story.content;

  return (
    <header>
      <nav
        className={`${bgColor} border-gray-200 dark:bg-gray-900 fixed top-[7%] left-90 right-0 z-10 ${
          isVisible
            ? "transform translate-y-0"
            : "transform translate-y-[-100%]"
        } transition-all duration-300`}
        style={{ zIndex: 1000 }}
      >
        <div className="max-w-screen-xl mx-auto p-4">
          
          <div className="flex items-center justify-center">
            

            <div className="flex items-center">
              
              <button
                type="button"
                className="  inline-flex items-center p-2 w-16 h-16 justify-center text-sm rounded-lg md:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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

          
              <div
                className="flex items-center w-full justify-between md:justify-center"
                id="navbar-default"
              >
                <ul className="hidden md:flex md:flex-col md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-evenly w-[380px]">
                  {menuItems.map((element: any, i: number) => (
                    <li key={i}>
                      <LinkBtn
                        className={`${textColor} font-small text-[38px]`}
                        link={element.link.url}
                        title={element.title}
                      />
                    </li>
                  ))}
                </ul>

                <div
                  className={`md:hidden w-full ${
                    isMenuOpen ? "block" : "hidden"
                  }`}
                  id="mobile-menu"
                >
                  <ul
                    className={`flex absolute z-[100] h-[50vh] left-[20%] w-[80%] top-[0px] flex-col space-y-4 px-4 py-4 bg-white dark:bg-gray-800 ${
                      isVisible
                        ? "transform translate-y-0"
                        : "transform translate-y-[-100%]"
                    }`}
                  >
                    <div className="cross" onClick={toggleMenu}>
                      <span></span>
                      <span></span>
                    </div>
                    {menuItems.map((element: any, i: number) => (
                      <li key={i}>
                        <a className="font-bold text-lg">{element.title}</a>
                      </li>
                    ))}
                    <a
                      className="text-white p-[0.3rem] w-[45%] text-center bg-[#f26627] hover:bg-[#f15a39] rounded-full"
                      href={button.url}
                    >
                      {title}
                    </a>
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

const HeaderSection = (props: any) => {
  console.log("in headerSection", props.props.story.content);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [positioning, setPositioning] = useState("right: 0%;");
  const [ulStyling, setÚlStyling] = useState({
    color: "transparent",
    padding: "0",
    paddingLeft: "0",
  });
  const [textColor, setTextColor] = useState<string>("text-white");

  const handleMenu = () => {
    // Visa ikonen endast inom de första 400 pixlarna
    if (window.scrollY <= 550) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Ändra textfärg baserat på scrollposition
    if (window.scrollY > 550) {
      setTextColor("text-black");
      setÚlStyling({ color: "#ececeb", padding: "30px", paddingLeft: "40px" });
      setPositioning("-15%");
    } else {
      setTextColor("text-white");
      setPositioning("0%");
      setÚlStyling({
        color: "transparent",
        padding: "0",
        paddingLeft: "0",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMenu);

    return () => {
      window.removeEventListener("scroll", handleMenu);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = props.props.story.content.header_menu;

  return (
    <header>
      <nav
        className="dark:bg-gray-900 fixed top-[4%] left-85 right-0 z-10"
        style={{ right: positioning, zIndex: 1000 }}
      >
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              {/* Hamburger-meny knapp */}
              <button
                type="button"
                className="inline-flex items-center p-2 w-16 h-16 justify-center text-sm rounded-lg md:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              <div className="flex items-center w-full justify-between md:justify-center">
                <ul
                  className="hidden md:flex md:flex-col md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-evenly w-[380px]"
                  style={{
                    backgroundColor: ulStyling.color,
                    padding: ulStyling.padding,
                    paddingLeft: ulStyling.paddingLeft,
                  }}
                >
                  {menuItems.map((element: any, i: number) => (
                    <li key={i}>
                      <LinkBtn
                        className={`${textColor} font-small text-[38px]`}
                        link={element.link.url}
                        title={element.title}
                      />
                    </li>
                  ))}
                </ul>
                <div className="flex justify-start h-[145px] w-[120px]">
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
