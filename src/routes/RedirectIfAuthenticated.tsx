import React from "react";

const RedirectIfAuthenticated = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return children;
};

export default RedirectIfAuthenticated;
