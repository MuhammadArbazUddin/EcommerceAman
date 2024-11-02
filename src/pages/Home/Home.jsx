import React from "react";
import {
  CardsSlider,
  FeaturesSection,
  Hero,
  LoginForm,
  OffersSection,
  ProductGrid,
  ShopByBrands,
  VendorsCard,
  CreateAccount,
} from "../../components/components";

const Home = () => {
  return (
    <>
      {" "}
      <Hero />
      <CardsSlider />
      <VendorsCard />
      <OffersSection />
      <ProductGrid />
      <ShopByBrands />
      <FeaturesSection />
      {/* <CreateAccount /> */}
      <LoginForm />
    </>
  );
};

export default Home;
