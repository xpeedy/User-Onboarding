import * as yup from "yup";


export default yup.object().shape({
    name: yup
    .string()
    .required("name is required")
    .min(3, "name must be at least 3 characters long"),
    email: yup
    .string()
    .email("must be valid email address")
    .required("must include email address"),
    password: yup
    .string()
    .required("please enter password")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    termsOfService: yup
    .boolean()
    .oneOf([true], "please agree to the terms")
})