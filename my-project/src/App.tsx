import "./App.scss";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default function App() {
  return (
    <>
      <div className="container">
        <Menu />
        <Content />
      </div>
      <Footer />
    </>
  );
}
