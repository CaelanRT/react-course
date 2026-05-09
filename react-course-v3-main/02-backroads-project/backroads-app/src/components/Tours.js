import Title from "./Title";
import { tourData } from "../data";
import TourCard from "./TourCard";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstText="featured" secondText="tours" />

      <div className="section-center featured-center">
        {tourData.map((tour) => {
          return <TourCard {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
