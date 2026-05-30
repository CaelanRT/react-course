import { useState } from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <>
      {tours.map((tour) => {
        return <Tour tour={tour} key={tour.id} />;
      })}
    </>
  );
};
export default Tours;
