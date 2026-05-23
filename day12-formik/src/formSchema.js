import * as myschema from "yup";
export let formSchema = myschema.object({
  username: myschema
    .string()
    .min(3, "At least three characters required")
    .max(20, "Characters exceeded the length")
    .required(),
  password: myschema
    .string()
    .min(8, "At least 8 characters required")
    .max(15, "maximum 15 characters allowed")
    .required(),
});
