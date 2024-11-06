import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Infobar from "@/components/Info-Container/Infobar";

const PROPS = {
  name: "Life Expectancy",
  value: {
    other: "12 - 15 years",
  },
};

test("it renders component unchanged", () => {
  const { container } = render(
    <ul>
      <Infobar barValue={PROPS}></Infobar>
    </ul>
  );
  expect(container).toMatchSnapshot();
});

test("it shows Infobar name", () => {
  render(
    <ul>
      <Infobar barValue={PROPS}></Infobar>
    </ul>
  );
  const infobarNameElement = screen.getByText(PROPS.name);
  expect(infobarNameElement).toBeInTheDocument();
});

test("it shows Infobar other value", () => {
  render(
    <ul>
      <Infobar barValue={PROPS}></Infobar>
    </ul>
  );
  const infobarValueElement = screen.getByText(PROPS.value.other);
  expect(infobarValueElement).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);
test("should have no accessibility violations", async () => {
  const { container } = render(
    <ul>
      <Infobar barValue={PROPS}></Infobar>
    </ul>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
