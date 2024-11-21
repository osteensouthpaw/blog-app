import React from "react";
import { getProviders } from "next-auth/react";
import SignInForm from "@/app/auth/signin/SignInForm";

const LoginPage = async () => {
  const providers = await getProviders();

  return <SignInForm providers={providers} />;
};

export default LoginPage;
