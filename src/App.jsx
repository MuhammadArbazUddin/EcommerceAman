import React from "react";
import {
  CardsSlider,
  Footer,
  Header,
  HeaderTop,
  Hero,
  Navbar,
  OffersSection,
  ProductCard,
  ProductGrid,
  VendorsCard,
} from "./components/components";

const App = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <Navbar />
      <Hero />
      <CardsSlider />
      <VendorsCard />
      <OffersSection />
      <ProductGrid />
      <Footer />
    </>
  );
};

export default App;
