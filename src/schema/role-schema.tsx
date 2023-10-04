import * as Yup from "yup";
export const roleSchema = Yup.object().shape({
  role: Yup.string().required("Email is required."),
  permission: Yup.array().required("Permission is required."),
});
