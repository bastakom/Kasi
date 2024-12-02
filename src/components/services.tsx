/* 
import { storyblokEditable } from "@storyblok/react/rsc";

const Services = ({ blok }: any) => {
  
  const { tjanster_block, Heading } = blok;

  return (
    <section {...storyblokEditable(blok)} className="services-section">
      <div className="pb-[2rem] md:pb-[0rem] md:flex-row flex ">
        <div className=" flex-col justify-center items-center p-[0rem] md:p-[4rem] md:items-baseline flex-wrap flex md:flex-row gap-10 w-[100%]">
          <h2 className="text-[25px] font-medium">{Heading}</h2>
          {tjanster_block.map((el: any) => {
            const contentItems = el.content?.content?.[1]?.content || [];

            const firstHalf = contentItems.slice(0, 3);
            const secondHalf = contentItems.slice(3);

            return (
              <div
                key={el._uid}
                className="serviceWrapper w-[60%] flex justify-center flex-col gap-[20px]"
              >
                <h3 className="text-[25px] font-semibold">{el.title}</h3>
                <p className="text-[38px] font-medium ">{el.paragraph}</p>

              
                <div className="flex list-disc mt-[1.5rem] ml-[23px]">
                  {contentItems.length > 4 ? (
                    <>
                      <ul className="flex justify-between flex-wrap list-disc mt-[1.5rem] ml-[23px]">
                        {firstHalf.map((contentItem: any, index: number) => (
                          <li
                            className="text-[25px] mb-[10px] font-medium"
                            key={index}
                          >
                            {contentItem.content?.[0]?.content?.[0]?.text ||
                              "Text not available"}
                          </li>
                        ))}
                      </ul>
                      <ul className="flex justify-between flex-wrap list-disc mt-[1.5rem] ml-[23px]">
                        {secondHalf.map((contentItem: any, index: number) => (
                          <li className="text-[25px] font-medium" key={index}>
                            {contentItem.content?.[0]?.content?.[0]?.text ||
                              "Text not available"}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <ul className="flex justify-between list-disc w-[70%] mt-[1.5rem] ml-[23px]">
                      {contentItems.map((contentItem: any, index: number) => (
                        <li className="text-[25px] font-medium" key={index}>
                          {contentItem.content?.[0]?.content?.[0]?.text ||
                            "Text not available"}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <hr className="mt-[20px] border-t-2 border-gray-400"></hr>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

*/

import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Services = ({ blok }: any) => {
  console.log("ifrån services ", blok.tjanster_block[2]);

  const { tjanster_block, Heading } = blok;

  return (
    <section {...storyblokEditable(blok)} className="services-section">
      <div className="pb-[2rem]  md:pb-[0rem] md:flex-row flex">
        <div className="p-[0rem] gap-6 flex-col md:p-[5rem] flex-wrap flex items-start md:flex-row md:gap-10 w-[100%]">
          <h2
            id="tjanster"
            className="text-[25px] text-start font-medium pl-[1.5rem]"
          >
            {Heading}
          </h2>
          {tjanster_block.map((el: any) => {
            return (
              <div
                key={el._uid}
                className="serviceWrapper w-[90%] gap-[10px] md:w-[60%] flex justify-center flex-col md:gap-[20px]"
              >
                <h3 className="text-[25px]  ml-[1.5rem] md:ml-[0rem] text-start font-semibold">
                  {el.title}
                </h3>
                <p className="text-[25px] md:text-[38px] md:ml-[0rem] font-medium text-start ml-[1.5rem] ">
                  {el.paragraph}
                </p>

                <div
                  className={`grid   ${
                    el.fullWith
                      ? "grid-cols-1 interimContent"
                      : "grid-cols-2 projectContent"
                  } `}
                >
                  {el.content1 && (
                    <div className=" textarea ml-[2.5rem] md:ml-[0rem]">
                      {render(el.content1)}
                    </div>
                  )}
                  {el.content2 && (
                    <div className=" textarea ml-[2.5rem] md:ml-[0rem]">
                      {render(el.content2)}
                    </div>
                  )}
                </div>
                <hr className="ml-[2rem] mt-[20px] border-t-2 border-gray-400 md:ml-[0rem]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
