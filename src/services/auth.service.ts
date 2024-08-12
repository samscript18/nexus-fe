import { useMutation } from "@tanstack/react-query";
import { http } from "../config/axios.config";
import { errorHandler } from "../utils/error";
import { SignUpDTO } from "../schema/dto/signup.dto";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const mutation = useMutation({
    mutationKey: ["useSignUp"],
    mutationFn: async (data: SignUpDTO) => {
      const response = await http.post("/user/signup", {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
      });

      return response?.data;
    },

    onError(error) {
      return errorHandler(error);
    },
    onSuccess() {
      toast.success("Registration Successful");
    },
  });

  return mutation;
};
