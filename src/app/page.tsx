import { Footer, Home, Places } from "@/components";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Home />
      <Places />
      <Footer />
    </>
  );
};

export default page;
