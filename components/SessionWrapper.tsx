// "use client";

import { SessionProvider } from "next-auth/react";

export default async function SessionProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
