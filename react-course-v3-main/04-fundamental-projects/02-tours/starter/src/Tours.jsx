import { useState } from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <>
      {tours.map((tour) => {
        return <Tour />;
      })}
    </>
  );
};
export default Tours;
