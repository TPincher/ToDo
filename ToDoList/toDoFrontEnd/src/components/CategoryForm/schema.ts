import * as z from "zod";

export const schema = z.object({
  name: z.string().min(3, "Category must be 3 characters long"),
});
