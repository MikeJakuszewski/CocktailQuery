import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div style={{ margin: "0 auto " }} className="loading" />
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};
export default HomeLayout;
