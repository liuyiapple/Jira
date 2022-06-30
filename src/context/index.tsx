import React, { ReactNode } from "react";
import { AuthProvider } from "./auth-context";
import { QueryClientProvider, QueryClient } from "react-query";
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        {/* 这个children就是App组件了 */}
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
};
