import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Header from "../App/Header";

test("Render the component", () => {
  render(<Header />);
});
