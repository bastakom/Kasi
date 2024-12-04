import { Form } from "../Form/Form";
import { FaLinkedinIn } from "react-icons/fa6";

export const FooterSection = (props: any) => {
  const { footer_blocks, Logo, home } = props.props.story.content;

  return (
    <footer
      className="flex flex-col lg:min-h-screen bg-[#24272D]  mt-[2rem] md:mt-[2rem]"
      id="footer"
    >
      <div className="gridContainer grid grid-cols-1 md:grid-cols-2 lg:h-[100vh] md:p-[1rem] lg:p-[5rem] flex-grow">
        {/* Kontaktinformation */}
        <div className="wrapper">
          {footer_blocks.map((el: any) => (
            <div key={el._uid} className="p-[1rem] md:p-[0rem}">
              <div className="lg:w-[60%]">
                <h1 className="text-white smallerFont mb-[1rem]">Kontakt</h1>
                <div className=" smallerFont md:bigFont">{el.number}</div>
                <div className="smallerFont md:bigFont mb-[2rem]">
                  {el.email}
                </div>
                <div className="smallerFont mb-[2rem]">
                  <div className="smallerFont md:bigFont">{el.adress}</div>
                  <div className="smallerFont md:bigFont mb-2">
                    {el.zipCode}
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFbjrcSnY_NwAAAAZNzUgto7aVxWhyjbROF8-3f36DYSPGI-VisVhBiIg2G_9kk6maP-BmJeG_ZWm-CKQvNnCuXFFnXBLA31NxfzUZTTh4c77TorJJ34JXhue3Z8LpMCDsL6jc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdavid-andersson-919869131"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-white text-[28px] md:text-[34px]" />
                </a>
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
