import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const addressFields = [
  { type: "text", label: "Nombre(s):", ref: "firstName" },
  { type: "text", label: "Apellido(s):", ref: "lastName" },
  { type: "date", label: "Fecha de nacimiento:", ref: "birthdate" },
  { type: "tel", label: "Teléfono", ref: "phone" },
  { type: "text", label: "Calle:", ref: "street" },
  { type: "number", label: "Número:", ref: "addresNumber" },
  { type: "text", label: "Colonia/vecindario:", ref: "neighborhood" },
  { type: "text", label: "Ciudad:", ref: "city" },
  { type: "text", label: "Estado/provincia:", ref: "province" },
  { type: "number", label: "Código postal:", ref: "postCode" },
  { type: "email", label: "Correo electrónico:", ref: "email" },
  { type: "password", label: "Contraseña:", ref: "password" },
  { type: "password", label: "Confirmar contraseña:", ref: "confirmPassword" },
  { type: "file", label: "Foto de perfil:", ref: "avatar" },
  {
    type: "checkbox",
    label: "Acepto los términos y condiciones",
    ref: "terms",
  },
  { type: "submit", label: "Registrar", ref: "submit" },
];

export default function App() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto">
      <h1 className="block text-3xl font-bold w-full text-center mb-6">
        Nueva dirección
      </h1>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        {addressFields.map((field) => (
          <Label key={field.ref}>
            {field.label}
            <Input type={field.type} {...register(field.ref)} />
          </Label>
        ))}
      </form>
    </div>
  );
}
