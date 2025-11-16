import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticación - TiendaVecina",
  description: "Ingresa a tu cuenta de TiendaVecina",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      {children}
    </div>
  );
} 