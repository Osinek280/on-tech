"use client";

import { useState } from "react";
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

// Dostępne głębokości
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

// Schemat walidacji
const formSchema = z.object({
  type: z.string().nonempty({ message: "Proszę wybrać typ." }),
  depth: z.string().nonempty({ message: "Proszę wybrać głębokość." }),
  color: z.string().nonempty({ message: "Proszę wybrać kolor." }),
  length: z.string().min(1, { message: "Długość musi być większa niż 0." }),
});

export default function PricingCalculator() {
  const [items, setItems] = useState<
    {
      type: string;
      depth: string;
      color: string;
      length: string;
      price: string;
    }[]
  >([]);

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
  const availableDepths =
    type === "softline" ? softLineAvailable : classicAvailable;

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

    setItems((prev) => [
      ...prev,
      {
        ...data,
        price,
      },
    ]);

    form.reset();
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
                {/* Typ */}
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Typ</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Wybierz typ" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="classic">Classic</SelectItem>
                                <SelectItem value="softline">
                                  Softline
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Głębokość */}
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="depth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Głębokość (mm)</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Wybierz głębokość" />
                            </SelectTrigger>
                            <SelectContent>
                              {availableDepths.map((depth) => (
                                <SelectItem
                                  key={depth}
                                  value={depth.toString()}
                                >
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

              {/* Kolor */}
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kolor</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
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

              {/* Długość */}
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
                Dodaj
              </Button>
            </form>
          </Form>
        </div>

        {/* Lista dodanych pozycji */}
        {items.length > 0 && (
          <div className="mt-10 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Dodane pozycje:</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
                    <th className="px-4 py-2 border">Typ</th>
                    <th className="px-4 py-2 border">Głębokość</th>
                    <th className="px-4 py-2 border">Kolor</th>
                    <th className="px-4 py-2 border">Długość (m)</th>
                    <th className="px-4 py-2 border">Cena (zł)</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    <tr key={idx} className="text-sm">
                      <td className="px-4 py-2 border">{item.type}</td>
                      <td className="px-4 py-2 border">{item.depth} mm</td>
                      <td className="px-4 py-2 border">
                        {colors.find((c) => c.value === item.color)?.label ??
                          item.color}
                      </td>
                      <td className="px-4 py-2 border">{item.length}</td>
                      <td className="px-4 py-2 border">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
