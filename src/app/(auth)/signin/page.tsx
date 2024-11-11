"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Apple, ArrowLeft, Google } from "iconsax-react";

import { SignInSchema } from "@/schemas";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Button from "@/components/Button";

import Logo from "@/assets/logo-min.svg";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  const { push } = useRouter();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof SignInSchema>) => {
    console.log(values);
  };
  const handleBack = () => {
    push("/");
  };

  const handleLoginWithGoogle = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/admin" });
  };

  return (
    <div className="w-full h-full flex flex-col bg-cream md:bg-white overflow-x-hidden overflow-y-hidden">
      <div className="mx-2 mt-2 self-start" onClick={handleBack}>
        <ArrowLeft size="36" className="text-gold-600" onClick={handleBack} />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="gap-2 flex flex-col p-4 w-full md:w-1/4 md:mt-32 md:bg-cream md:rounded-md md:border-gold-600/20 md:border-[1px] overflow-x-hidden overflow-y-hidden self-center"
        >
          <div className="w-full mx-auto flex justify-center items-center overflow-x-hidden">
            <Image src={Logo} alt="logo" width={150} />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-gold-600">E-mail</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="h-9 w-full rounded-md px-6 py-1 bg-[#f8f5f1] outline-none ring-none placeholder-gold-600/50 text-gold-600 placeholder:font-light"
                    type="text"
                    placeholder="john.doe@example.com"
                  />
                </FormControl>
                {fieldState.isTouched ? <FormMessage /> : null}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-gold-600">Senha</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="h-9 w-full rounded-md px-6 py-1 bg-[#f8f5f1] outline-none ring-none placeholder-gold-600/50 text-gold-600 placeholder:font-light"
                    type="password"
                  />
                </FormControl>
                {fieldState.isTouched ? <FormMessage /> : null}
              </FormItem>
            )}
          />
          <div className="w-full mt-8 overflow-x-hidden">
            <Button mode="border" type="submit">
              Sign In
            </Button>
          </div>
          <div className="font-medium text-gold-600 w-full flex justify-center items-center py-2 overflow-x-hidden">
            or connect with
          </div>
          <div className="p-0 gap-4 flex items-center justify-center overflow-x-hidden">
            <Button mode="border" onClick={handleLoginWithGoogle}>
              <div className="flex align-middle my-auto font-medium gap-4 text-base justify-center">
                <Google size="24" className="text-gold-600" variant="Bold" />
              </div>
            </Button>
            <Button mode="border">
              <div className="flex align-middle my-auto font-medium gap-4 text-base justify-center">
                <Apple size="24" className="text-gold-600" variant="Bold" />
              </div>
            </Button>
          </div>

          <div className="w-full flex justify-center items-center gap-2 pt-10 text-gold-600/70 overflow-x-hidden">
            Doesn't have account?
            <Link
              href={"/signup"}
              className="font-medium text-gold-600 hover:text-gold-600/50 duration-150"
            >
              Sign up here.
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInPage;
