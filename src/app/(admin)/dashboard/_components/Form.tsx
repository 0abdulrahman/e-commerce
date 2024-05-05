"use client";

import { addProduct } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";

export default function Form() {
  const [state, formAction] = useFormState(addProduct, { message: "" });
  return (
    <form className="border rounded-md p-4 gap-7 flex flex-col" action={formAction}>
      <div className="flex flex-col gap-2">
        <Input type="text" name="name" placeholder="الإسم" />
        <Input type="number" name="price" placeholder="السعر" />
        <Input type="text" name="type" placeholder="النوع" />
        <Input type="number" name="rate" placeholder="التقييم" />
      </div>
      {state?.message && <p className="my-2 text-green-500 text-center">{state.message}</p>}
      <Button type="submit">إضافة</Button>
    </form>
  );
}
