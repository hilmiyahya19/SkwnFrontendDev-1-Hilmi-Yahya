import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-14 md:pt-0"> {/* sesuaikan nilai padding dengan tinggi navbar */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
