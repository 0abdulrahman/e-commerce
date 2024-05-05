"use server";

import { revalidatePath } from "next/cache";

export async function addProduct(prevState: any, formData: FormData) {
  const product = {
    name: formData.get("name"),
    price: formData.get("price"),
    type: formData.get("type"),
    rate: formData.get("rate"),
  };

  try {
    const res = await fetch("https://e-commerce-c5320-default-rtdb.europe-west1.firebasedatabase.app/products.json", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidatePath("/");

    return {
      message: "Created Successfully",
    };
  } catch (err) {
    return {
      message: (err as string) ?? "Something went wrong",
    };
  }
}
