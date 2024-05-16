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

import Logo from "@/assets/logo-min.png";

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
    <div className="w-screen h-screen bg-white flex flex-col justify-start overflow-x-hidden overflow-y-hidden">
      <div className="mx-2 mt-2" onClick={handleBack}>
        <ArrowLeft size="36" color="#F89595" onClick={handleBack} />
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
            name="name"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="John Doe"
                    className="rounded-lg shadow-sm border-none bg-zinc-50"
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
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="john.doe@example.com"
                    className="rounded-lg shadow-sm border-none bg-zinc-50"
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
                    className="rounded-lg shadow-sm border-none bg-zinc-50"
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

          <div className="w-full flex justify-center items-center gap-2 absolute bottom-8 overflow-x-hidden">
            Already have a account?
            <Link href={"/signin"} className="font-medium text-[#F89595]">
              Sign in here.
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUpPage;
