import { Box } from "@chakra-ui/react";
import React from "react";
import { textTemplates } from "../../utils/statics/templates";
import { LoginForm } from "./LoginForm";
import { AuthTitleSection } from "../../components/form/authTitleSection";

const Login = () => {
  return (
    <Box>
      <AuthTitleSection
        titleText="Giriş səhifəsi"
        description={textTemplates.loremText}
      />
      <LoginForm />
    </Box>
  );
};

export default Login;
