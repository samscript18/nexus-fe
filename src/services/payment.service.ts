import { useMutation } from "@tanstack/react-query";
import { http } from "../config/axios.config";
import { errorHandler } from "../utils/error";

export const useVerifyTransaction = () => {
  const mutation = useMutation({
    mutationKey: ["useVerifyTransaction"],
    mutationFn: async (data: string) => {
      const response = await http.post(`/payment/verify-trx`, {
        transaction_ref: data,
      });
      return response?.data;
    },
    onError: (error: Error) => {
      errorHandler(error);
    },
  });
  return mutation;
};
