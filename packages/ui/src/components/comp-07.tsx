import { useId } from "react";

import { Input } from "@nexack/ui/components/input";
import { Label } from "@nexack/ui/components/label";

export default function OriginInput() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Email</Label>
      <Input
        id={id}
        className="bg-muted border-transparent shadow-none"
        placeholder="Email"
        type="email"
      />
    </div>
  );
}
