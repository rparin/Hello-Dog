import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import DogInfoContainer from "@/components/DogInfo/DogInfoContainer";

const PROPS = {
  title: "Physical Stats",
  info1: {
    name: "Life Expectancy",
    value: {
      other: "12 - 15 years",
    },
  },
};

test("it renders component unchanged", () => {
  const { container } = render(
    <DogInfoContainer
      title={PROPS.title}
      info={[PROPS.info1]}></DogInfoContainer>
  );
  expect(container).toMatchSnapshot();
});

test("it should show Info container title", () => {
  render(
    <DogInfoContainer
      title={PROPS.title}
      info={[PROPS.info1]}></DogInfoContainer>
  );
  const infoTitleElement = screen.getByText(PROPS.title);
  expect(infoTitleElement).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);
test("should have no accessibility violations", async () => {
  const { container } = render(
    <DogInfoContainer
      title={PROPS.title}
      info={[PROPS.info1]}></DogInfoContainer>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
