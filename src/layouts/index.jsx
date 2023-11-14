import { Outlet, useNavigation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
export default function Layout() {
    const navigation = useNavigation();
    return (
      <>
        <Header></Header>
        <div className={"h-100 d-flex flex-column " + (navigation.state === "loading" ? "loading" : "")}>
          <Outlet />
        </div>
        <Footer></Footer>
      </>
    );
  }