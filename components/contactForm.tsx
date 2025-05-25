"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { sendMail } from "@/send-email";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Imię musi mieć co najmniej 2 znaki.",
  }),
  email: z.string().email({
    message: "Nieprawidłowy adres email.",
  }),
  message: z.string().min(10, {
    message: "Wiadomość musi mieć co najmniej 10 znaków.",
  }),
  attachPricing: z.boolean().default(false),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      attachPricing: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const mailData = {
      name: values.name,
      email: values.email,
      message: values.message,
      quotes: [],
    };
    console.log("Form submitted:", mailData);
    // sendMail(mailData);
    setSubmitStatus("success");
  }

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase"></h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Skontaktuj się z nami
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imię</FormLabel>
                    <FormControl>
                      <Input placeholder="Jan Kowalski" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="jan@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wiadomość</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Twoja wiadomość..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="attachPricing"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Dołącz wycenę</FormLabel>
                      <div className="text-sm text-muted-foreground">
                        Otrzymaj email z wyceną wybranych parapetów
                      </div>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Wyślij
              </Button>

              {submitStatus === "success" && (
                <div className="text-center text-green-600">
                  Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
