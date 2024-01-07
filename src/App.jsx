import "./App.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Hero from "./Components/Hero/hero";
import Button from "./Components/Button/button";

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero>
        <Button />
      </Hero>
      <Footer></Footer>
    </>
  );
};

// export react para abrir no browser
export default App;
