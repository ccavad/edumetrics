export const registerFormTemplate = [
  {
    label: "Hesab adı",
    key: "username",
    placeholder: "Cemile",
  },
  {
    label: "Parol",
    key: "password",
    placeholder: "******",
    type: "password",
  },
  {
    label: "Cins",
    key: "gender",
    type: "select",
    options: [
      { label: "male", value: 0 },
      { label: "female", value: 1 },
    ],
  },
  {
    label: "Email",
    key: "email",
    placeholder: "cemile@gmail.com",
    type: "email",
  },
];
