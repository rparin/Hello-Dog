import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import InfoContainer from "@/components/Info-Container/InfoContainer";

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
    <InfoContainer title={PROPS.title} info={[PROPS.info1]}></InfoContainer>
  );
  expect(container).toMatchSnapshot();
});

test("it should show Info container title", () => {
  render(
    <InfoContainer title={PROPS.title} info={[PROPS.info1]}></InfoContainer>
  );
  const infoTitleElement = screen.getByText(PROPS.title);
  expect(infoTitleElement).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);
test("should have no accessibility violations", async () => {
  const { container } = render(
    <InfoContainer title={PROPS.title} info={[PROPS.info1]}></InfoContainer>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
