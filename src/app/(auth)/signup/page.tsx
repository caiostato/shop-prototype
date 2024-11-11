"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Apple, ArrowLeft, Google } from "iconsax-react";

import { SignUpSchema } from "@/schemas";

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

const SignUpPage = () => {
  const { push } = useRouter();

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof SignUpSchema>) => {
    console.log(values);
  };
  const handleBack = () => {
    push("/");
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
          <div className="w-full mx-auto flex justify-center items-center  overflow-x-hidden">
            <Image src={Logo} alt="logo" width={150} height={100} />
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-gold-600">Nome</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="h-9 w-full rounded-md px-6 py-1 bg-[#f8f5f1] outline-none ring-none placeholder-gold-600/50 text-gold-600 placeholder:font-light"
                    type="text"
                    placeholder="John Doe"
                  />
                </FormControl>
                {fieldState.isTouched ? <FormMessage /> : null}
              </FormItem>
            )}
          />
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
              Sign Up
            </Button>
          </div>

          <div className="w-full flex justify-center items-center gap-2 pt-10 text-gold-600/70 overflow-x-hidden">
            Already have a account?
            <Link
              href={"/signin"}
              className="font-medium text-gold-600 hover:text-gold-600/50 duration-150"
            >
              Sign in here.
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUpPage;
