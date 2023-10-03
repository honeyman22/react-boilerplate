import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .test("valid-username-email", "Invalid username or email.", (value) => {
      // Check if the value is a valid email or a valid username
      const isEmail = Yup.string().email().isValidSync(value);
      const isUsername = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9_]{3,40}$/.test(
        value as string
      );

      return isEmail || isUsername;
    })
    .required("Username or Email is required."),
  password: Yup.string().required("Password is required."),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must have at least one uppercase , one lowercase and one digit."
    )
    .required("Password is required."),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password")],
    "Must be same as Password."
  ),
});

export const resetEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Valid email is required.")
    .required("Email is required."),
});
