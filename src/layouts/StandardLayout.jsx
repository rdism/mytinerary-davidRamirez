import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from "react-router-dom";

export default function StandardLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}
