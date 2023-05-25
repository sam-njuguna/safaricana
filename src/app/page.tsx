import { Facts, Footer, Home, Navbar, Places } from "@/components";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <Places />
      <Facts />
      <Footer />
    </div>
  );
};

export default page;
