import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import DogInfoItem from "@/components/DogInfo/DogInfoItem";

const PROPS = {
  name: "Life Expectancy",
  value: {
    other: "12 - 15 years",
  },
};

test("it renders component unchanged", () => {
  const { container } = render(
    <ul>
      <DogInfoItem dogInfo={PROPS}></DogInfoItem>
    </ul>
  );
  expect(container).toMatchSnapshot();
});

test("it shows Infobar name", () => {
  render(
    <ul>
      <DogInfoItem dogInfo={PROPS}></DogInfoItem>
    </ul>
  );
  const infobarNameElement = screen.getByText(PROPS.name);
  expect(infobarNameElement).toBeInTheDocument();
});

test("it shows Infobar other value", () => {
  render(
    <ul>
      <DogInfoItem dogInfo={PROPS}></DogInfoItem>
    </ul>
  );
  const infobarValueElement = screen.getByText(PROPS.value.other);
  expect(infobarValueElement).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);
test("should have no accessibility violations", async () => {
  const { container } = render(
    <ul>
      <DogInfoItem dogInfo={PROPS}></DogInfoItem>
    </ul>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
