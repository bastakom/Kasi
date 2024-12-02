import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkBtn from "@/components/LinkBtn";
import LocationOn from "@mui/icons-material/LocationOn";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

export const FooterSection = (props: any) => {
  const { footer_blocks, Logo, home } = props.props.story.content;
  return (
    <footer className="bg-[#ececeb] h-[50vh]">
      <div className="flex justify-center">
        <div className="w-[95%]">
          {footer_blocks.map((el: any) => (
            <div
              className="flex justify-around mt-[20px]  relative"
              key={el._uid}
            >
              <div>
                <h2 className="font-extralight uppercase">
                  {el.NavigationHeader}
                </h2>
                <hr className="border-black w-[90%]  my-4 absolute left-10 right-0 top-[10%]"></hr>
              </div>
              <div>
                <h2 className="font-extralight uppercase">
                  {el.contactHeading}
                </h2>

                <div className="flex items-center space-x-2 mt-[20px] mb-2">
                  <LuPhone />
                  <div className="font-extralight text-xs uppercase">
                    {el.number}
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <MdOutlineAlternateEmail />
                  <div className="font-extralight text-xs uppercase">
                    {el.email}
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <SlLocationPin />
                  <div className="font-extralight text-xs uppercase mb-2">
                    {" " + el.adress + "  ·  " + el.zipCode}
                  </div>
                </div>
                <div className="font-extralight text-xs uppercase mb-2"></div>
              </div>
              <div>
                <h2 className="font-extralight uppercase">{el.followHeader}</h2>

                <a
                  href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFbjrcSnY_NwAAAAZNzUgto7aVxWhyjbROF8-3f36DYSPGI-VisVhBiIg2G_9kk6maP-BmJeG_ZWm-CKQvNnCuXFFnXBLA31NxfzUZTTh4c77TorJJ34JXhue3Z8LpMCDsL6jc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdavid-andersson-919869131"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin mt-[20px] text-blue-600 text-2xl hover:text-blue-800 transition-colors"></i>
                </a>
              </div>
              <div>
                <LinkBtn
                  link={home.url}
                  className="flex items-center mt-[50px]"
                >
                  {Logo && Logo.filename ? (
                    <img src={Logo.filename} alt="Logo" className="h-8" />
                  ) : (
                    <span>No logo available</span>
                  )}
                </LinkBtn>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-[80px]">
        <small className="block text-center">
          © {footer_blocks[0].copyrightText}
        </small>
      </div>
    </footer>
  );
};
