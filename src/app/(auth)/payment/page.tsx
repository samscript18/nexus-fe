"use client";
import TextField from "@/src/components/textField";
import { useSignUp } from "@/src/services/auth.service";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Payment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { push } = useRouter();

  const handlePayment = async () => {
    const transaction = await axios.post(
      `https://sandbox-api-d.squadco.com/transaction/initiate`,
      {
        email: "adeolasam20@gmail.com",
        amount: 1000 * 100,
        currency: "NGN",
        initiate_type: "inline",
        transaction_ref: tx_ref,
        callback_url: `https://nexus-2024.vercel.app/dashboard/verify-trx/${tx_ref}`,
      },
      {
        headers: {
          Authorization: `Bearer sandbox_sk_13f56bb394656a2ead543764384ac8e7fd59328721ed`,
          "Content-Type": "application/json",
        },
      }
    );
    return transaction?.data;
  };

  return (
    <div className="text-white z-[4]">
      {/* title */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[1.6rem] font-bold uppercase">Payment</h1>
        <p className="text-[.85rem] mt-3">
          Kindly input your details and proceed to payment for NEXUS 2024
        </p>
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
          type="button"
          className={`bg-[#1a1a1a] text-[#fff] text-[.95rem] md:text-[1rem] lg:text-[1.05rem] font-semibold mt-3 py-3 px-4 rounded-md uppercase`}
          onClick={() => handlePayment()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Payment;
