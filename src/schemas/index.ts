import * as z from "zod";

export const SignInSchema = z.object({
  email: z.string().email({ message: "E-mail é um campo necessário" }),
  password: z.string().min(1, { message: "Senha é um campo necessário" }),
});
