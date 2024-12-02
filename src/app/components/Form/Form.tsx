"use client";
import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        console.log("success");
        setFormData({ name: "", number: "", email: "", message: "" });
      } else {
        console.log("failed");
      }
    } catch {
      throw new Error("failed");
    }
    console.log("Form Submitted", formData);
  };

  return (
    <div
      id="contact-form"
      className="flex items-center  mt-10 mb-24  bg-[#24272D] h-[110vh]"
    >
      <div className="flex w-[100%] p-[4rem] mt-10 mb-24 ">
        <div className="w-[35%]">
          <h1 className="text-white text-[25px]">Kontakta oss</h1>
        </div>
        <form className="max-w-lg" onSubmit={handleSubmit}>
          {/* Namn */}

          <div className="flex flex-col items-center mb-6">
            <input
              className="w-full md:w-[542px] border-2 rounded py-2 px-4 focus:outline-none focus:bg-[#24272D] focus:border-white"
              id="name"
              name="name"
              type="text"
              placeholder="För och efternamn*"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Telefon */}
          <div className="flex items-center flex-col mb-6">
            <input
              className="w-full md:w-[542px]  border-2 rounded py-2 px-4 focus:outline-none focus:bg-[#24272D] focus:border-white"
              id="number"
              name="number"
              type="text"
              placeholder="Telefon"
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>

          {/* E-post */}
          <div className="flex items-center flex-col mb-6">
            <input
              className="w-full md:w-[542px]  border-2 rounded py-2 px-4 focus:outline-none focus:bg-[#24272D] focus:border-white"
              id="email"
              name="email"
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Meddelande */}
          <div className="flex items-center flex-col mb-6">
            <textarea
              className="w-full md:w-[542px] md:h-[216px] resize-none border-2 rounded py-2 px-4 focus:outline-none focus:bg-[#24272D] focus:border-white"
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
              className=" bg-[#24272D] w-[42px] h-[42px]"
              type="checkbox"
            />
            <label htmlFor="checkbox" className="text-white mt-[5px]">
              Jag godkänner att ni hanterar mina personuppgifter enligt ovan.
              Läs mer om hur vi behandlar dina personuppgifter här
            </label>
          </div>
          {/* Submit knapp */}
          <div className="flex">
            <button
              type="submit"
              className=" border-2 border-white bg-transparent text-white font-bold py-2 px-6 focus:outline-none"
            >
              Skicka
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
