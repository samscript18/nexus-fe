"use client";

import Loader from "@/src/components/Loader";
import { useVerifyTransaction } from "@/src/services/payment.service";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";
import { MdOutlinePending } from "react-icons/md";

const VerifyPayment = () => {
  const transaction_ref = useSearchParams().get("reference");
  const { data, mutate, isPending } = useVerifyTransaction();

  useEffect(() => {
    mutate(transaction_ref!);
  }, []);

  if (isPending)
    return <Loader loading={true} loadingText="Verifying Transaction..." />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[600px] flex flex-col justify-center items-center p-8 rounded-xl shadow-md text-center">
        {data?.transaction_status === "successful" && (
          <>
            <HiOutlineCheckCircle size={100} className="text-green-700 mb-8" />
            <h2 className="sm:text-xl md:text-2xl text-green-700 pb-3 font-bold">
              Payment Successful!
            </h2>
            <p className="my-2 text-gray-600">
              Your payment of {data?.transaction_amount} was successful.
            </p>
          </>
        )}
        {data?.transaction_status === "failed" && (
          <>
            <HiOutlineXCircle size={100} className="text-red-700 mb-8" />
            <h2 className="sm:text-xl md:text-2xl text-red-700 pb-3 font-bold">
              Payment Failed!
            </h2>
            <p className="my-2 text-gray-600">
              Your payment of {data?.transaction_amount} failed.
            </p>
          </>
        )}
        {data?.transaction_status === "pending" && (
          <div id={data?._id}>
            <MdOutlinePending size={100} className="text-gray-700 mb-8" />
            <h2 className="sm:text-xl md:text-2xl text-gray-700 pb-3 font-bold">
              Payment pending!
            </h2>
            <p className="my-2 text-gray-600">
              Your payment of {data?.transaction_amount} is pending.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default VerifyPayment;
