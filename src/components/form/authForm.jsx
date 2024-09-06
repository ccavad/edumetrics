import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import {
  registerFormControlStyle,
  registerInputStyle,
  registerLabelStyle,
} from "../../assets/styles/chakraStyles";

export const transformFormData = (data, register) => {
  return (
    <FormControl key={data.key} {...registerFormControlStyle}>
      <FormLabel {...registerLabelStyle}>{data.label}</FormLabel>
      {(!data.type || data.type === "text") && (
        <Input
          {...register(data.key)}
          {...registerInputStyle}
          placeholder={data?.placeholder}
        />
      )}
      {data.type === "select" && (
        <Select {...register(data.key)} {...registerInputStyle}>
          <option disabled>Seçin</option>
          {data.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      )}
      {data.type === "password" && (
        <Input
          placeholder={data?.placeholder}
          type="password"
          {...register(data.key)}
          {...registerInputStyle}
        />
      )}
      {data.type === "email" && (
        <Input
          placeholder={data?.placeholder}
          type="email"
          {...register(data.key)}
          {...registerInputStyle}
        />
      )}
    </FormControl>
  );
};
