import React from "react";
import {
  CardsSlider,
  FeaturesSection,
  Footer,
  Header,
  HeaderTop,
  Hero,
  Navbar,
  OffersSection,
  ProductGrid,
  ShopByBrands,
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
      <ShopByBrands />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default App;
