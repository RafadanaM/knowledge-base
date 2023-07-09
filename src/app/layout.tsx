import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import Wrapper from "./Wrapper";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Rafadana Knowledge Base",
  description: "List of useful things I learned so I do not forget it",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`layout ${roboto.className}`}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
