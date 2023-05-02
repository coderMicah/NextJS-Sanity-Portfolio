"use client";
import { useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:ismiki977@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}.${data.message} `;
  };
  return (
    <div className=" relative flex text-left md:text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        contact me
      </h3>

      <div className="absolute top-36 flex flex-col space-y-5 md:space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+2458962566</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer Lane</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">johnDoe@mail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-[80%] md:w-fit mx-auto"
        >
          <div className="flex  flex-col md:flex-row space-y-4 md:space-x-2 md:space-y-0">
            <input
              {...register("name")}
              className="contactInput"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          ></textarea>
          <button
            className="bg-[#f7ab0a] font-bold text-lg rounded-md text-black py-3 px-10 "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
