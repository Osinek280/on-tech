"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { Package, Plus, Trash2 } from "lucide-react";

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
import { classicAvailable, softLineAvailable } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

// Opcje kolorów
const colors = [
  { value: "ral-9016", label: "Biały - RAL 9016 mat / satyna" },
  { value: "ral-7016", label: "Grafit - RAL 7016 mat" },
  { value: "ral-8017", label: "Brąz - RAL 8017 mat" },
  { value: "ral-8019", label: "Ciemny brąz - RAL 8019 mat" },
];

const getItemTypeLabel = (itemType: string) => {
  switch (itemType) {
    case "parapet":
      return "Parapet";
    case "endCap":
      return "Zaślepka";
    case "straightConnector":
      return "Łącznik prosty";
    case "angleConnector":
      return "Łącznik kątowy";
    default:
      return itemType;
  }
};

const getItemUnit = (itemType: string) => {
  switch (itemType) {
    case "parapet":
      return "m";
    case "endCap":
      return "szt.";
    case "straightConnector":
      return "szt.";
    case "angleConnector":
      return "szt.";
    default:
      return "szt.";
  }
};

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

const accessoryFormSchema = z.object({
  itemType: z.enum(["endCap", "straightConnector", "angleConnector"], {
    message: "Proszę wybrać typ akcesoriów.",
  }),
  type: z.enum(["classic", "softline"], { message: "Proszę wybrać typ." }),
  depth: z.string().nonempty({ message: "Ilość musi być większa niż 0." }),
  quantity: z.string().min(1, { message: "Ilość musi być większa niż 0." }),
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

  const accessoryForm = useForm({
    resolver: zodResolver(accessoryFormSchema),
    defaultValues: {
      itemType: "" as "endCap" | "straightConnector" | "angleConnector",
      type: "" as "classic" | "softline",
      depth: "",
      quantity: "1",
    },
  });

  const onAccessorySubmit = () =>
    // data: z.infer<typeof accessoryFormSchema>
    {
      // try {
      //   const calculatedItem = calculateItemPrice({
      //     itemType: data.itemType,
      //     type: data.type,
      //     depth: Number(data.depth),
      //     quantity: Number(data.quantity),
      //   });
      //   setItems((prev) => [...prev, calculatedItem]);
      //   // Reset form but keep type and itemType for convenience
      //   accessoryForm.reset({
      //     itemType: data.itemType,
      //     type: data.type,
      //     depth: "",
      //     quantity: "1",
      //   });
      // } catch (error) {
      //   console.error("Błąd obliczania ceny:", error);
      // }
    };

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
  };

  const deleteItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formularz */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Dodaj pozycję
              </CardTitle>
              <CardDescription>
                Wybierz typ pozycji i wypełnij formularz
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="parapet" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="parapet">Parapet</TabsTrigger>
                  <TabsTrigger value="accessories">Akcesoria</TabsTrigger>
                </TabsList>

                <TabsContent value="parapet" className="space-y-4">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {/* Typ */}
                        <FormField
                          control={form.control}
                          name="type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Typ</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    form.setValue("depth", "");
                                  }}
                                  value={field.value}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Wybierz typ" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectItem value="classic">
                                        Classic
                                      </SelectItem>
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

                        {/* Głębokość */}
                        <FormField
                          control={form.control}
                          name="depth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Głębokość (mm)</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
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
                                value={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Wybierz kolor" />
                                </SelectTrigger>
                                <SelectContent>
                                  {colors.map((color) => (
                                    <SelectItem
                                      key={color.value}
                                      value={color.value}
                                    >
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
                                step="0.01"
                                min="0.01"
                                {...field}
                                placeholder="1.00"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Dodaj parapet
                      </Button>
                    </form>
                  </Form>
                </TabsContent>

                <TabsContent value="accessories" className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-blue-800">
                      <strong>Uwaga:</strong> Zaślepki i łączniki muszą mieć
                      taką samą głębokość jak parapet, do którego będą
                      montowane.
                    </p>
                  </div>
                  <Form {...accessoryForm}>
                    <form
                      onSubmit={accessoryForm.handleSubmit(onAccessorySubmit)}
                      className="space-y-4"
                    >
                      {/* Typ akcesoriów */}
                      <FormField
                        control={accessoryForm.control}
                        name="itemType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Typ akcesoriów</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Wybierz typ akcesoriów" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="endCap">
                                      Zaślepka
                                    </SelectItem>
                                    <SelectItem value="straightConnector">
                                      Łącznik prosty
                                    </SelectItem>
                                    <SelectItem value="angleConnector">
                                      Łącznik kątowy
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        {/* Typ parapetu */}
                        <FormField
                          control={accessoryForm.control}
                          name="type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Typ parapetu</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    accessoryForm.setValue("depth", "");
                                  }}
                                  value={field.value}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Wybierz typ" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectItem value="classic">
                                        Classic
                                      </SelectItem>
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

                        {/* Głębokość */}
                        <FormField
                          control={accessoryForm.control}
                          name="depth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Głębokość parapetu (mm)</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
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
                              <p className="text-xs text-muted-foreground">
                                Głębokość akcesoriów musi odpowiadać głębokości
                                parapetu
                              </p>
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Ilość */}
                      <FormField
                        control={accessoryForm.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ilość (szt.)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                min="1"
                                {...field}
                                placeholder="1"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Dodaj akcesoria
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Lista pozycji */}
          <Card>
            <CardHeader>
              <CardTitle>Wycena</CardTitle>
              <CardDescription>
                {items.length === 0
                  ? "Brak pozycji w wycenie"
                  : `${items.length} ${
                      items.length === 1
                        ? "pozycja"
                        : items.length < 5
                        ? "pozycje"
                        : "pozycji"
                    } w wycenie`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {items.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Dodaj pierwszą pozycję aby rozpocząć wycenę</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, i) => (
                    <div key={i} className="border rounded-lg p-4 bg-white">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline">
                              ss
                              {item.type}
                              {/* {getItemTypeLabel(item.itemType)} */}
                            </Badge>
                            <Badge variant="secondary">
                              {item.type === "classic" ? "Classic" : "Softline"}
                            </Badge>
                            <span className="font-medium">{item.depth}mm</span>
                          </div>
                          {item.color && (
                            <p className="text-sm text-gray-600">
                              {
                                colors.find((c) => c.value === item.color)
                                  ?.label
                              }
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteItem(i)}
                          className="text-red-600 hover:text-red-800 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm mb-2">
                        <div>
                          Ilość: {item.length} mm
                          {/* {getItemUnit(item.itemType)} */}
                        </div>
                        <div>Cena jedn.: {item.unitPrice.toFixed(2)} zł</div>
                        <div className="font-semibold">
                          Razem: {item.totalPrice.toFixed(2)} zł
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-blue-900">
                        Suma całkowita:
                      </span>
                      <span className="text-2xl font-bold text-blue-900">
                        {totalSum.toFixed(2)} zł
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
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
                      <td className="px-4 py-2 border">
                        <div className="flex items-center justify-between">
                          <span>{item.price}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteItem(idx)}
                            className="text-red-600 hover:text-red-800 hover:bg-red-50 ml-2 h-6 w-6 p-0"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-lg font-semibold">
                  Suma całkowita:{" "}
                  {items
                    .reduce(
                      (total, item) => total + Number.parseFloat(item.price),
                      0
                    )
                    .toFixed(2)}{" "}
                  zł
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
