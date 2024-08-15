import { useMutation } from "@tanstack/react-query";
import { http } from "../config/axios.config";
import { errorHandler } from "../utils/error";

export const useVerifyTransaction = () => {
  const mutation = useMutation({
    mutationKey: ["useVerifyTransaction"],
    mutationFn: async (data: string) => {
      const response = await http.get(`/payment/verify-trx/${data}`);
      return response?.data?.data;
    },
    onError: (error: Error) => {
      errorHandler(error);
    },
  });
  return mutation;
};
