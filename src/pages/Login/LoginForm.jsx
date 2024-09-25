import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { useNavigate } from "react-router";
import { useLocalStorage } from "usehooks-ts";

import { useAuthStore } from "../../store/useAuthStore";
import { accessToken } from "../../services/api/apiService";
import {
  registerFormControlStyle,
  registerInputStyle,
  registerLabelStyle,
} from "../../assets/styles/chakraStyles";
import { checkUsername } from "../../services/api/apiService";
import { useDebounced } from "../../utils/hooks/useDebounced";
import { useEffect } from "react";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  const [localToken, setLocalToken] = useLocalStorage(
    "notSafeAuthToken",
    token
  );

  // Debounce the username value to prevent excessive API calls
  const debouncedUsername = useDebounced(watch("username"), 500);

  useEffect(() => {
    if (!debouncedUsername) {
      // If the username input is empty, reset the validation state
      setIsUsernameValid(true); // null means no validation state, so hide the message
      setLoading(false);
      return; // Exit early if input is empty
    }

    setLoading(true);
    checkUsername(debouncedUsername)
      .then((response) => {
        console.log("API Response:", response.data); // Logs the API response
        const exists = response.data; // Since response.data is the boolean
        setIsUsernameValid(exists); // Use this directly to set the validity
        setLoading(false);
      })
      .catch((error) => {
        console.error("Username check error:", error);
        setIsUsernameValid(false); // Set to false if there's an error
        setLoading(false);
      });
  }, [debouncedUsername]);

  const onSubmit = async (data) => {
    if (!isUsernameValid) {
      toast({
        title: "Error",
        description: "Username doesn't exist.",
        status: "error",
        position: "bottom-right",
      });
      return;
    }

    try {
      const result = await accessToken(data);
      if (result?.data?.answer) {
        toast({
          title: "success",
          description: result?.data?.message,
          status: "success",
          position: "bottom-right",
        });
        setToken(result?.data?.token);
        setLocalToken(result?.data?.token);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast({
          title: "error",
          description: result?.data?.message,
          status: "error",
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.error("registerUser error: ", error);
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
          <FormControl
            isInvalid={!isUsernameValid}
            {...registerFormControlStyle}
          >
            <FormLabel {...registerLabelStyle}>Hesab adı</FormLabel>
            <Box w="65%">
              <Input
                {...register("username", {
                  required: true,
                  minLength: 5,
                })}
                {...registerInputStyle}
                placeholder="Enter username"
              />
              {debouncedUsername && isUsernameValid === false && (
                <Text color="red.500">Username doesn't exist.</Text>
              )}
              {loading && <Text>Checking username...</Text>}
            </Box>
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
              onClick={() => navigate("/")}
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
