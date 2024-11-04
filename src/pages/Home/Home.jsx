import React from "react";
import {
  CardsSlider,
  FeaturesSection,
  Hero,
  LoginForm,
  OffersSection,
  ProductGrid,
  ShopByBrands,
  CreateAccount,
  DeliverySection,
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
      <ProductGrid />
      <DeliverySection />
      <ShopByBrands />
      <FeaturesSection />
      {/* <CreateAccount /> */}
      <LoginForm />
    </>
  );
};

export default Home;
