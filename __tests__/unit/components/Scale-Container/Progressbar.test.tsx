import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Progressbar from "@/components/Scale-Container/Progressbar";

expect.extend(toHaveNoViolations);

test("should have no accessibility violations", async () => {
  const { container } = render(
    <Progressbar barValue={{ name: "Energy", value: 3 }}></Progressbar>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("it renders component unchanged", () => {
  const { container } = render(
    <Progressbar barValue={{ name: "Energy", value: 3 }}></Progressbar>
  );
  expect(container).toMatchSnapshot();
});

test("it shows progress bar name", () => {
  render(<Progressbar barValue={{ name: "Energy", value: 3 }}></Progressbar>);
  const pbarNameElement = screen.getByText("Energy");
  expect(pbarNameElement).toBeInTheDocument();
});
