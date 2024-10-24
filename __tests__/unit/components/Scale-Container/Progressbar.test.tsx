import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Progressbar from "@/components/Scale-Container/Progressbar";

const PROP = { name: "Drooling", value: 1 };

test("it renders component unchanged", () => {
  const { container } = render(<Progressbar barValue={PROP}></Progressbar>);
  expect(container).toMatchSnapshot();
});

test("it shows progress bar name", () => {
  render(<Progressbar barValue={PROP}></Progressbar>);
  const pbarNameElement = screen.getByText(PROP.name);
  expect(pbarNameElement).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);
test("it should have no accessibility violations", async () => {
  const { container } = render(<Progressbar barValue={PROP}></Progressbar>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
