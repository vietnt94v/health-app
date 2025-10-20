import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/stores";
import { GlobalLoading } from "@/components/ui";

const RedirectIfAuthenticated = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoggedIn, isAuthLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthLoading && isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, isAuthLoading, navigate]);

  if (isAuthLoading) return <GlobalLoading />;

  return !isLoggedIn ? children : null;
};

export default RedirectIfAuthenticated;
