import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export default function InputText({children, type}) {
  return (
    <>
      <Label className="w-full pb-4">
        {children}
        <Input className="w-full mb-4" type={type} />
      </Label>
    </>
  );
}
