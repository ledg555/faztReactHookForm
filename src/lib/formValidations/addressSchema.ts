import { z } from "zod";

const addressSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "El nombre debe contener al menos 2 carácteres" })
    .max(50, { message: "El nombre puede contener hasta 50 carácteres" }),
  lastName: z
    .string()
    .min(3, { message: "El apellido debe contener al menos 2 carácteres" })
    .max(50, { message: "El apellido puede contener hasta 50 carácteres" }),
    birthDate: z.string().refine(date => new Date(date).toString() !== "Invalid date", {message: "Ingresa una fecha válida"}),
    phone: z.string(),
  email: z.string().email({message: "Ingresa un correo válido"}),
  password: z.string().min(8, {message: "La contraseña debe contener al menos 8 carácteres"}),
  confirmPassword: z.string().min(6),
});
