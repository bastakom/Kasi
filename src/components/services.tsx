/* import { storyblokEditable } from "@storyblok/react/rsc";

const Services = ({ blok }: any) => {
  console.log("ifrån services ", blok);

  const { tjanster_block, Heading } = blok;

  return (
    <section {...storyblokEditable(blok)}>
      <div className="pb-[2rem] md:pb-[0rem] md:flex-row flex ">
        <div className="p-[0rem] md:p-[4rem] flex-wrap flex flex-row gap-4 w-[75%]">
          <h2 className="text-[25px] w-[10%] font-medium">{Heading}</h2>
          {tjanster_block.map((el: any) => {
            return (
              <div
                key={el._uid}
                className=" section w-[75%] flex justify-center flex-col gap-[20px] "
              >
                <h3 className="text-[25px] font-semibold">{el.title}</h3>
                <p className="text-[38px] font-medium ">{el.paragraph}</p>

                <ul className="flex justify-between list-disc w-[70%] mt-[1.5rem] ml-[23px]">
                  {el.content?.content?.[1]?.content?.map(
                    (contentItem: any, index: number) => {
                      return (
                        <li className="text-[25px] font-medium" key={index}>
                          {contentItem.content[0].content[0].text}
                        </li>
                      );
                    }
                  )}
                </ul>
                <hr className="mt-[20px] border-t-2 border-gray-400"></hr>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; */
/* 
import { storyblokEditable } from "@storyblok/react/rsc";

const Services = ({ blok }: any) => {
  console.log("ifrån services ", blok);

  const { tjanster_block, Heading } = blok;

  return (
    <section {...storyblokEditable(blok)} className="services-section">
      <div className="pb-[2rem] md:pb-[0rem] md:flex-row flex ">
        <div className="p-[0rem] md:p-[4rem] flex-wrap flex flex-row gap-4 w-[100%]">
          <h2 className="text-[25px] w-[10%] font-medium">{Heading}</h2>
          {tjanster_block.map((el: any) => {
            return (
              <div
                key={el._uid}
                className=" serviceWrapper w-[60%] flex justify-center flex-col gap-[20px] "
              >
                <h3 className="text-[25px] font-semibold">{el.title}</h3>
                <p className="text-[38px] font-medium ">{el.paragraph}</p>

                <ul className="flex justify-between list-disc w-[70%] mt-[1.5rem] ml-[23px]">
                  {el.content?.content?.[1]?.content?.map(
                    (contentItem: any, index: number) => {
                      return (
                        <li className="text-[25px] font-medium" key={index}>
                          {contentItem.content[0].content[0].text}
                        </li>
                      );
                    }
                  )}
                </ul>
                <hr className="mt-[20px] border-t-2 border-gray-400"></hr>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; */

import { storyblokEditable } from "@storyblok/react/rsc";

const Services = ({ blok }: any) => {
  console.log("ifrån services ", blok);

  const { tjanster_block, Heading } = blok;

  return (
    <section {...storyblokEditable(blok)} className="services-section">
      <div className="pb-[2rem] md:pb-[0rem] md:flex-row flex ">
        <div className="p-[0rem] md:p-[4rem] flex-wrap flex flex-row gap-10 w-[100%]">
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

                {/* Om contentItems har fler än 4 objekt, dela upp i två listor */}
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
