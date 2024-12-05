"use client";
import { useState } from "react";
import { PopUpModal } from "@/components/PopUpModal";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckBox = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { content: "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: "", number: "", email: "", message: "" });
        setIsChecked(false);
        setIsModalOpen(true);
      }
    } catch {
      throw new Error("failed");
    }
  };

  return (
    <div id="contact-form" className="p-[2rem] md:p-[0rem]">
      {isModalOpen && <PopUpModal />}
      <div className=" ">
        <div className=" "></div>
        <form className="lg:ml-[-12rem]" onSubmit={handleSubmit}>
          <div className="flex items-center lg:w-[37.5vw] flex-col mb-6">
            <input
              className="w-full smallerFont lg:mediumFont  border-2 rounded py-2 px-4 focus:outline-none bg-[#24272D] focus:bg-white  focus:text-[black] focus:border-white"
              id="name"
              name="name"
              type="text"
              placeholder="För och efternamn*"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Telefon */}
          <div className="flex items-center lg:w-[37.5vw] flex-col mb-6">
            <input
              className="w-full  smallerFont md:mediumFont border-2 rounded py-2 px-4 focus:outline-none bg-[#24272D] focus:bg-white focus:text-[black] focus:border-white"
              id="number"
              name="number"
              type="text"
              placeholder="Telefon"
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>

          {/* E-post */}
          <div className="flex items-center lg:w-[37.5vw] flex-col mb-6">
            <input
              className="w-full smallerFont md:mediumFont border-2 rounded py-2 px-4 focus:outline-none bg-[#24272D] focus:bg-white  focus:text-[black] focus:border-white"
              id="email"
              name="email"
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Meddelande */}
          <div className="flex items-center lg:w-[37.5vw] flex-col mb-6">
            <textarea
              className="w-full smallerFont md:mediumFont md:h-[216px] resize-none border-2 rounded py-2 px-4 focus:outline-none bg-[#24272D] focus:bg-white  focus:text-[black] focus:border-white"
              id="message"
              name="message"
              rows={5}
              placeholder="Meddelande"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="flex items-start gap-2 mb-[30px]">
            <input
              id="checkbox"
              className=" bg-[#24272D] w-[22px] h-[22px] md:w-[22px]"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBox}
            />
            <label htmlFor="checkbox" className="text-white ">
              Jag godkänner att ni hanterar mina personuppgifter enligt ovan.{" "}
              <br></br>
              Läs mer om hur vi behandlar dina personuppgifter här
            </label>
          </div>
          {/* Submit knapp */}
          <div className="flex lg:w-[37.5vw] ">
            <button
              type="submit"
              className={`border-2 w-[100%] border-white bg-transparent text-white  active:bg-white active:text-black hover:bg-white hover:text-black font-bold py-2 px-6 focus:outline-none ${
                !isChecked ? "opacity-50 cursor-not-allowed" : "opacity-100"
              }`}
              disabled={!isChecked}
            >
              Skicka
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
