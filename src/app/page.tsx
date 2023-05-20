import { Facts, Footer, Home, Places } from "@/components";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Home />
      <Places />
      <Facts />
      <Footer />
    </>
  );
};

export default page;
