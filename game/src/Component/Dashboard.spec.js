import React from "react";
import { render} from "@testing-library/react";
import Dashboard from "./Dashboard";

test(" strikes header is found", () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId(/strike-button/i)
});


test(" ball header is found", () => {
    const { getByTestId } = render(<Dashboard />);
   getByTestId(/ball-button/i)
  
  });

  test(" foul header is found", () => {
    const { getByTestId } = render(<Dashboard />);
    getByTestId(/foul-button/i)
  });

  test(" foul header is found", () => {
    const { getByTestId } = render(<Dashboard />);
    getByTestId(/hit-button/i)
  });
