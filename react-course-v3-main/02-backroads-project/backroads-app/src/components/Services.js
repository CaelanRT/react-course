import Title from "./Title";
import Service from "./Service";
import { serviceArray } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title firstText="our" secondText="services" />
      <div className="section-center services-center">
        {serviceArray.map((item) => {
          return <Service {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
