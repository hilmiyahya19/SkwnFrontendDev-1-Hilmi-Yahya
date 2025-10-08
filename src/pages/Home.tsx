import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import OurProducts from "../components/OurProducts";
import Partner from "../components/Partner";
import WhyChooseUs from "../components/WhyChooseUse";

export default function Home() {
  return (
    <div>
      {/* Pastikan id cocok dengan nama "to" di Navbar */}
      <section id="about">
        <Hero />
      </section>

      <section id="">
        <WhyChooseUs />
      </section>

      <section id="partnerships">
        <Partner />
      </section>

      <section id="furniture1">
        <Categories />
      </section>

      <section id="furniture2">
        <OurProducts />
      </section>

      <section id="contact">
        <Newsletter />
      </section>
    </div>
  );
}
