import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  addUser,
  checkEmail,
  checkUsername,
} from "../../services/api/apiService";
import {
  registerFormControlStyle,
  registerInputStyle,
  registerLabelStyle,
} from "../../assets/styles/chakraStyles";
import { Eye, EyeClosed } from "@phosphor-icons/react";

export const RegisterForm = ({ registeredUserType, setRegisteredUserType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: registeredUserType,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const usernameAvailableRes = await checkUsernameAvailable(data.username);
      const emailAvailableRes = await checkEmailAvailable(data.email);

      if (usernameAvailableRes) {
        setUsernameError(true);
      }

      if (emailAvailableRes) {
        setEmailError(true);
      }

      if (!usernameAvailableRes && !emailAvailableRes) {
        const result = await addUser(data);
        console.log("addser res", result);
        //  toast({
        //   title: "success",
        //   description: result?.data?.message,
        //   status: "success",
        //   position: "bottom-right",
        // });
      }
    } catch (error) {
      console.error("registerUser error: ", error);
    }
  };

  const checkUsernameAvailable = async (username) => {
    try {
      const { data } = await checkUsername(username);
      return data;
    } catch (error) {
      console.error("checkUsername error:", error);
    }
  };

  const checkEmailAvailable = async (email) => {
    try {
      const { data } = await checkEmail(email);
      return data;
    } catch (error) {
      console.error("checkEmail error:", error);
    }
  };

  return (
    <Flex justifyContent="center" width="full" mt={10}>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        width={{ base: "full", md: "60%" }}
      >
        <VStack gap={10}>
          {/* username  */}
          <FormControl {...registerFormControlStyle} isInvalid={usernameError}>
            <FormLabel {...registerLabelStyle}>Hesab adı</FormLabel>
            <Box w="65%">
              <Input
                {...register("username", {
                  required: true,
                  minLength: 5,
                })}
                {...registerInputStyle}
                placeholder="Cemile123"
              />
              {usernameError && (
                <FormErrorMessage>bu istifadeci adi movcuddur</FormErrorMessage>
              )}
            </Box>
          </FormControl>

          {/* firstName  */}
          <FormControl {...registerFormControlStyle}>
            <FormLabel {...registerLabelStyle}>Adı</FormLabel>
            <Input
              {...register("name", {
                required: true,
                minLength: 5,
              })}
              {...registerInputStyle}
              placeholder="Cemile"
            />
          </FormControl>
          {/* password  */}
          <FormControl {...registerFormControlStyle}>
            <FormLabel {...registerLabelStyle}>Parol</FormLabel>
            <InputGroup {...registerInputStyle}>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword((prev) => !prev)}
                  variant="ghost"
                >
                  {showPassword ? <EyeClosed /> : <Eye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          {/* Email */}
          <FormControl {...registerFormControlStyle} isInvalid={emailError}>
            <FormLabel {...registerLabelStyle}>Email</FormLabel>

            {/* Group Input and ErrorMessage without changing Input size */}
            <Box w="65%">
              <Input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                  minLength: 5,
                })}
                {...registerInputStyle}
                placeholder="cemile@gmail.com"
                // No margin or padding changes to Input to keep its size consistent
              />

              {/* Error message directly below without affecting input size */}
              {emailError && (
                <FormErrorMessage>bu email artiq movcuddur</FormErrorMessage>
              )}
            </Box>
          </FormControl>

          {/* gender  */}
          <FormControl {...registerFormControlStyle}>
            <FormLabel {...registerLabelStyle}>Cins</FormLabel>
            <Select {...register("gender")} {...registerInputStyle}>
              <option disabled>Seçin</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </Select>
          </FormControl>

          {/* type  */}
          {/* <FormControl {...registerFormControlStyle}>
            <FormLabel {...registerLabelStyle}>Tip</FormLabel>
            <Select {...register("type")} {...registerInputStyle}>
              <option disabled>Seçin</option>
              <option value="teacher">teacher</option>
              <option value="student">student</option>
              <option value="parent">parent</option>
            </Select>
          </FormControl> */}
          {/* {registerFormTemplate.map((data) =>
            transformFormData(data, register)
          )} */}
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
