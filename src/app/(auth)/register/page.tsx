"use client";
import TextField from "@/src/components/textField";
import { useSignUp } from "@/src/services/auth.service";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const mutation = useSignUp();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await mutation.mutateAsync({
      firstName,
      lastName,
      email,
    });

    toast.success("Registration Successful");
  };

  return (
    <form onSubmit={onSubmit} className="text-white z-[4]">
      {/* title */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[1.6rem] font-bold uppercase">Registration</h1>
        <p className="text-[.85rem] mt-3">Register for NEXUS 2024</p>
      </div>

      <div className="flex w-full gap-[1rem] flex-col">
        <TextField
          label="FirstName"
          InputProps={{
            placeholder: "Enter your first name",
            type: "firstName",
            required: true,
            value: firstName,
            onChange(e) {
              setFirstName(e.target.value);
            },
          }}
          className="mt-6 focus:border-[#004080]"
          LabelProps={{ className: "text-[.8rem] font-[500]" }}
        />
        <TextField
          label="LastName"
          InputProps={{
            placeholder: "Enter your last name",
            type: "lastName",
            required: true,
            value: lastName,
            onChange(e) {
              setLastName(e.target.value);
            },
          }}
          className="mt-3 focus:border-[#004080]"
          LabelProps={{ className: "text-[.8rem] font-[500]" }}
        />{" "}
        <TextField
          label="Email Address"
          InputProps={{
            placeholder: "Enter your email address",
            type: "email",
            required: true,
            value: email,
            onChange(e) {
              setEmail(e.target.value);
            },
          }}
          className="mt-3 focus:border-[#004080]"
          LabelProps={{ className: "text-[.8rem] font-[500]" }}
        />
        <button
          type="submit"
          className={`bg-[#1a1a1a] text-[#fff] text-[.95rem] md:text-[1rem] lg:text-[1.05rem] font-semibold mt-3 py-3 px-4 rounded-md uppercase`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
