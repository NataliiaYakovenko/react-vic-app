import * as yup from "yup";

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(20).required(),
});

export const CONTACT_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().min(2).max(30).required(),
  phone: yup
    .string()
    .length(13)
    .matches(/^\+\d{12}$/, "Phone must correspond patern +000000000000 ")
    .required(),
  email: yup.string().email(),
  birthday: yup.date().max(new Date())
});

//-----------------------------------------------------------------
const USER_SCHEMA = yup.object({
  name: yup
    .string()
    .min(2)
    .max(20)
    .required()
    .matches(/^[A-Z]/, "Name must start with capital letter")
    .matches(/^.[a-z]*$/, "Second letter must be lower"),
  email: yup.string().email().required(),
});

USER_SCHEMA.validate({
  name: "Nataliia",
  email: "yakovenkonatali999@gmail.com",
})
  .then((data) => {
    return console.log(data);
  })
  .catch((err) => {
    return console.log(err);
  });
