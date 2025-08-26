import z from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName:  z.string().min(2).max(50),
  email: z.email(),
  phone: z.string().or(z.literal('')).or(z.undefined()),
  society: z.string().or(z.literal('')).or(z.undefined()),
  projectType: z.string(),
  budget: z.string(),
  projectInfo: z.string().or(z.literal('')).or(z.undefined()),
})