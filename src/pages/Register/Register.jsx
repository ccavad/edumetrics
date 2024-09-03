import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { RegisterTitle } from "./RegisterTitle";
import { useState } from "react";
import { RegisterForm } from "./RegisterForm";

const Register = () => {
  const [registerType, setRegisterType] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Box position="relative">
      <RegisterTitle />
      <VStack alignItems="flex-start">
        <Heading>Hesab tipi seçin</Heading>
        {!registerType && (
          <Wrap justifyContent="center" align="center">
            <WrapItem>
              <Button
                border="2px solid red"
                width="377px"
                height="270px"
                onClick={() => setRegisterType("student")}
              >
                Şagird
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                border="2px solid red"
                width="377px"
                height="270px"
                onClick={() => setRegisterType("parent")}
              >
                Valideyn
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                border="2px solid red"
                width="377px"
                height="270px"
                onClick={() => setRegisterType("teacher")}
              >
                Müəllim
              </Button>
            </WrapItem>
          </Wrap>
        )}
      </VStack>
      {registerType && <RegisterForm registerType={registerType} />}
      {/* <Flex justifyContent="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <FormControl display="flex">
              <FormLabel flex="1">Ad</FormLabel>
              <Input flex="2" {...register("name")} />
            </FormControl>
            <FormControl display="flex">
              <FormLabel flex="1">Soyad</FormLabel>
              <Input flex="2" {...register("lastname")} />
            </FormControl>
            <FormControl display="flex">
              <FormLabel flex="1">Cins</FormLabel>
              <Select flex="2">
                <option>male</option>
                <option>female</option>
              </Select>
            </FormControl>
            <FormControl display="flex">
              <FormLabel flex="1">Fənnin adı</FormLabel>
              <Select flex="2">
                <option>math</option>
                <option>english</option>
              </Select>
            </FormControl>
            <FormControl display="flex">
              <FormLabel flex="1">Əlaqə nömrəsi / email</FormLabel>
              <Input flex="2" />
            </FormControl>
            <ButtonGroup justifyContent="space-between" width="100%">
              <Button colorScheme="teal" size="md" type="submit">
                asd
              </Button>
              <Button colorScheme="teal" size="md">
                asd
              </Button>
              <Button colorScheme="teal" size="md">
                asd
              </Button>
            </ButtonGroup>
          </VStack>
        </form>
      </Flex> */}
    </Box>
  );
};

export default Register;
