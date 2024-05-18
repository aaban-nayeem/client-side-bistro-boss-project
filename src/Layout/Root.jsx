import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Root = () => {
  return (
    <section className="">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Root;
