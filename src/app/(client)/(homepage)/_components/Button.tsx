import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="default" size="lg" disabled={pending}>
      Submit {pending && "(Loading...)"}
    </Button>
  );
}
