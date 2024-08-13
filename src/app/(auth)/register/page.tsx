"use client";
import { Button } from "@/src/components/Button";
import TextField from "@/src/components/textField";
import { useSignUp } from "@/src/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast/headless";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { push } = useRouter();

  const mutation = useSignUp();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await mutation.mutateAsync({
      firstName,
      lastName,
      email,
    });
  };

  return (
    <form onSubmit={onSubmit} className="text-white z-[4]">
      {/* title */}
      <div>
        <h1 className="text-[1.6rem] font-bold uppercase">Register</h1>
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
          label="Email"
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
      </div>
    </form>
  );
}
