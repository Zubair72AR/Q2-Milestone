"use client";
import Button from "@/components/Button";
import Headings from "@/components/Headings";
import { ReactEventHandler, useState } from "react";
import { FiSend } from "react-icons/fi";
import React, { ChangeEvent } from "react";

export default function Contact() {
  const [inputValue, setInputValue] = useState<string>("");

  // Specify the event type for the change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Specify the event type for the form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted value:", inputValue);
  };
  return (
    <div className="px-6 lg:px-12 2xl:px-24 relative">
      <Headings headText="Contact." headClass="mb-6" />
      <div></div>
      <div>
        <form onSubmit={handleSubmit} className="grid gap-2">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full sm:w-1/2 outline-none border-[1px] border-zinc-300 bg-white px-4 py-2 text-zinc-400 text-sm rounded-md"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full sm:w-1/2 outline-none border-[1px] border-zinc-300 bg-white px-4 py-2 text-zinc-400 text-sm rounded-md"
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full outline-none border-[1px] border-zinc-300 bg-white px-4 py-2 text-zinc-400 text-sm rounded-md"
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            required
            className="w-full outline-none border-[1px] border-zinc-300 bg-white px-4 py-2 text-zinc-400 text-sm rounded-md"
          ></textarea>
          <Button btnText="Send Message" btnClass="" btnIcon={<FiSend />} />
        </form>
      </div>

      
    </div>
  );
}
