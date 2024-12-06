"use client";
import LinkBtn from "@/components/LinkBtn";
import { Form } from "../Form/Form";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export const FooterSection = (props: any) => {
  const { footer_blocks, Logo, home } = props.props.story.content;

  return (
    <footer
      id="footer"
      className="flex flex-col lg:min-h-screen bg-[#24272D] pb-[2rem] md:pb-[3rem] mt-[2rem] md:mt-[2rem]"
    >
      <div className="gridContainer pr-[1rem] pl-[1rem] grid grid-cols-1 md:grid-cols-2 lg:h-[100vh] md:p-[2rem] lg:p-[5rem] flex-grow">
        {/* Kontaktinformation */}
        <div className="wrapper">
          {footer_blocks.map((el: any) => (
            <div key={el._uid} className="p-[1rem] md:p-[0rem}">
              <div className="lg:w-[60%]">
                <h1 className="text-white smallerFont mb-[1rem]">Kontakt</h1>
                <div className=" smallerFont md:bigFont">{el.number}</div>
                <div className="smallerFont md:bigFont mb-[2rem]">
                  <Link href={"mailto:david.andersson@kasi.se"}>
                    {el.email}
                  </Link>
                </div>

                <div className="smallerFont mb-[2rem]">
                  <div className="smallerFont md:bigFont">{el.adress}</div>
                  <div className="smallerFont md:bigFont mb-2">
                    {el.zipCode}
                  </div>
                </div>

                <LinkBtn link={el.linkedIn.url}>
                  <FaLinkedinIn className="text-white text-[28px] md:text-[34px]" />
                </LinkBtn>
              </div>
            </div>
          ))}
        </div>

        {/* Formulär */}
        <div className="wrapper">
          <Form />
        </div>
      </div>

      {/* Copyright */}
      <div className=" wrapper smallerFont md:mediumFont ml-[25px] lg:ml-[80px]">
        {footer_blocks[0]?.copyrightText && (
          <div className="text-white">© {footer_blocks[0]?.copyrightText}</div>
        )}
      </div>
    </footer>
  );
};
