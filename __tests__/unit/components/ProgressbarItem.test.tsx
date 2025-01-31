import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Progressbar from "@/components/Progressbar/ProgressbarItem";

const PROP = { name: "Drooling", value: 1 };

test("it renders component unchanged", () => {
  const { container } = render(
    <ul>
      <Progressbar barInfo={PROP}></Progressbar>
    </ul>
  );
  expect(container).toMatchSnapshot();
});

test("it shows progress bar name", () => {
  render(
    <ul>
      <Progressbar barInfo={PROP}></Progressbar>
    </ul>
  );
  const pbarNameElement = screen.getByText(PROP.name);
  expect(pbarNameElement).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);
test("it should have no accessibility violations", async () => {
  const { container } = render(
    <ul>
      <Progressbar barInfo={PROP}></Progressbar>
    </ul>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
