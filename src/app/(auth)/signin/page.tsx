"use client";
import React from "react";
import Image from "next/image";
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

import Logo from "@/assets/logo-min.png";

const SignInPage = () => {
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

  return (
    <div className="w-screen h-screen flex flex-col justify-start overflow-x-hidden overflow-y-hidden">
      <div className="mx-2 mt-2">
        <ArrowLeft size="36" color="#F89595" />
      </div>
      <div className="w-full mx-auto flex justify-center items-center  overflow-x-hidden">
        <Image src={Logo} alt="logo" width={150} />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="gap-2 flex flex-col p-4 w-full overflow-x-hidden"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="john.doe@example.com"
                    className="rounded-lg shadow-sm border-none bg-white"
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
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    className="rounded-lg shadow-sm border-none bg-white"
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

          <div className="font-medium w-full flex justify-center items-center py-2 overflow-x-hidden">
            or connect with
          </div>
          <div className="p-0 gap-4 flex items-center justify-center overflow-x-hidden">
            <Button mode="border">
              <div className="flex align-middle my-auto font-medium gap-4 text-base justify-center">
                <Google size="24" color="#F89595" variant="Bold" />
              </div>
            </Button>
            <Button mode="border">
              <div className="flex align-middle my-auto font-medium gap-4 text-base justify-center">
                <Apple size="24" color="#F89595" variant="Bold" />
              </div>
            </Button>
          </div>

          <div className="w-full flex justify-center items-center gap-2 absolute bottom-8 overflow-x-hidden">
            Doesn't have account?
            <Link href={"/"} className="font-medium text-[#F89595]">
              Sign up here.
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInPage;
