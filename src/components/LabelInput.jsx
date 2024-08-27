import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export default function InputText({children, type}) {
  return (
    <>
      <Label className="w-full ">
        {children}
        <Input className="w-full" type={type} />
      </Label>
    </>
  );
}
