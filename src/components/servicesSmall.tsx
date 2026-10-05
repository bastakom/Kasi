import { storyblokEditable } from "@storyblok/react/rsc";

const ServicesSmall = ({ blok }: any) => {
  const { tjanster_block, Heading, heading } = blok;
  const sectionHeading = Heading || heading;

  return (
    <section {...storyblokEditable(blok)} className="services-section">
      <div className=" md:pb-[0rem] md:flex-row flex md:pt-[2rem]">
        <div className="p-[1rem] gap-6 flex-col  lg:p-[5rem] flex-wrap flex items-start md:flex-row md:gap-10 w-[100%]">
          <h2
            id="tjanster"
            className="text-[20px] md:text-[25px] text-start font-medium lg:pl-[1.5rem]"
          >
            {sectionHeading}
          </h2>
          {tjanster_block.map((el: any) => {
            return (
              <div
                key={el._uid}
                className="serviceWrapper gap-[10px] lg:w-[60%] flex justify-center flex-col md:gap-[20px]"
              >
                <h3 className="text-[20px] md:text-[25px]  text-start font-semibold">
                  {el.title}
                </h3>
                <p className="!block !w-full !max-w-[65ch] !text-[25px] !font-normal !leading-[1.45] text-start">
                  {el.paragraph}
                </p>
                <hr className=" mt-[20px] border-t-2 border-gray-400 md:ml-[0rem]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSmall;
