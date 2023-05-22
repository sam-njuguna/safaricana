import { Facts, Footer, Home, Navbar, Places } from "@/components";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Navbar />
      <Home />
      <Places />
      <Facts />
      <Footer />
    </>
  );
};

export default page;
