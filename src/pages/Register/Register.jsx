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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import greenCircle from "../../assets/images/green_circle.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Box position="relative">
      <Image
        src={greenCircle}
        alt="circle"
        position="absolute"
        right="80px"
        top="20px"
      />

      <VStack alignItems="flex-start" width="40%">
        <Heading color="#393939" fontSize="60px">
          Qeydiyyat səhifəsi
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Turpis venenatis tincidunt
          egestas vitae
        </Text>
      </VStack>
      <Flex justifyContent="center">
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
      </Flex>
    </Box>
  );
};

export default Register;
