import React from "react";
import {
  CardsSlider,
  FeaturesSection,
  Hero,
  // LoginForm,
  OffersSection,
  ProductGrid,
  ShopByBrands,
  DeliverySection,
  Accordion,
} from "../../components/components";
import TopVendors from "../../components/TopVendors/TopVendors";

const Home = () => {
  return (
    <>
      {" "}
      <Hero />
      <CardsSlider />
      <TopVendors heading={"Top Stores"} />
      <OffersSection />
      {/* <ProductGrid /> */}
      <DeliverySection />
      <ShopByBrands />
      <FeaturesSection />
      <Accordion />
      {/* <LoginForm/> */}
    </>
  );
};

export default Home;
