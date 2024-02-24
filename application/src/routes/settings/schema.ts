import { z } from "zod";
 
export const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string()
});
 
export type FormSchema = typeof formSchema;
