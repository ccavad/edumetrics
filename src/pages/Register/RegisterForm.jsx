import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { addUser } from "../../services/api/apiService";
import { registerFormTemplate } from "../../components/form/formTemplates";
import { transformFormData } from "../../components/form/authForm";

export const RegisterForm = ({ registeredUserType, setRegisteredUserType }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await addUser(data);
      console.log("registerUser res", result);
    } catch (error) {
      console.error("registerUser error: ", error);
    }
  };

  return (
    <Flex justifyContent="center" width="full">
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        width={{ base: "full", md: "60%" }}
      >
        <VStack>
          {registerFormTemplate.map((data) =>
            transformFormData(data, register)
          )}
          <ButtonGroup
            justifyContent="space-between"
            width="100%"
            mt={4}
            flexWrap="wrap"
            gap="10px"
          >
            <Button
              colorScheme="teal"
              size="md"
              type="submit"
              onClick={() => setRegisteredUserType(null)}
              paddingInline="2.2rem"
            >
              Geri
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              type="submit"
              paddingInline="2.2rem"
            >
              İndi təsdiq et
            </Button>
            {/* <Button colorScheme="teal" size="md" paddingInline="2.2rem">
              Təsdiq etmədən davam et
            </Button> */}
          </ButtonGroup>
        </VStack>
      </Box>
    </Flex>
  );
};
