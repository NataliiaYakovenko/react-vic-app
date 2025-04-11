import * as yup from "yup";

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
  