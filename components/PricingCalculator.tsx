"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Typy dostępnych głębokości
const classicAvailable = [150, 200, 250, 300];
const softLineAvailable = [160, 210, 260, 310];

// Opcje kolorów
const colors = [
  { value: "ral-9016", label: "Biały - RAL 9016 mat / satyna" },
  { value: "ral-7016", label: "Grafit - RAL 7016 mat" },
  { value: "ral-8017", label: "Brąz - RAL 8017 mat" },
  { value: "ral-8019", label: "Ciemny brąz - RAL 8019 mat" },
];

// Funkcja obliczająca cenę
const calculatePrice = ({
  type,
  color,
  length,
}: {
  type: string;
  color: string;
  length: number;
}) => {
  const basePrice = type === "classic" ? 50 : 60;
  const colorMultiplier = color === "ral-9016" ? 1 : 1.2;
  return (basePrice * length * colorMultiplier).toFixed(2);
};

// Schemat walidacji Zod
const formSchema = z.object({
  type: z.string().nonempty({ message: "Proszę wybrać typ." }),
  depth: z.string().nonempty({ message: "Proszę wybrać głębokość." }),
  color: z.string().nonempty({ message: "Proszę wybrać kolor." }),
  length: z.string().min(0.1, { message: "Długość musi być większa niż 0." }),
});

export default function PricingCalculator() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      depth: "",
      color: "",
      length: "1",
    },
  });

  const type = useWatch({ control: form.control, name: "type" });
  const availableDepths = type === "softline" ? softLineAvailable : classicAvailable;

  const onSubmit = (data: {
    type: string;
    depth: string;
    color: string;
    length: string;
  }) => {
    const price = calculatePrice({
      type: data.type,
      color: data.color,
      length: Number(data.length),
    });
    alert(`Szacowana cena: ${price} zł`);
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Wycena
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Oblicz swoją cenę
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex space-x-4">
                {/* Wybór typu */}
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Typ</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Wybierz typ" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="classic">Classic</SelectItem>
                                <SelectItem value="softline">Softline</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Wybór koloru */}
                <div className="flex-1">
                <FormField
                control={form.control}
                name="depth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Głębokość (mm)</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Wybierz głębokość" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableDepths.map((depth) => (
                            <SelectItem key={depth} value={depth.toString()}>
                              {depth} mm
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                  
                </div>
              </div>

              {/* Wybór głębokości */}
              <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kolor</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Wybierz kolor" />
                            </SelectTrigger>
                            <SelectContent>
                              {colors.map((color) => (
                                <SelectItem key={color.value} value={color.value}>
                                  {color.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

              {/* Wprowadzenie długości */}
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Długość (m)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.1"
                        {...field}
                        placeholder="Wprowadź długość"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Oblicz cenę
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
