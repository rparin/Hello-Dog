import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import ProgressbarContainer from "@/components/Progressbar/ProgressBarContainer";

const PROPS = {
  title: "Characteristics",
  scale1: { name: "Drooling", value: 1 },
  scale2: { name: "Energy", value: 4 },
};

test("it renders component unchanged", () => {
  const { container } = render(
    <ProgressbarContainer
      title={PROPS.title}
      scales={[PROPS.scale1, PROPS.scale2]}></ProgressbarContainer>
  );
  expect(container).toMatchSnapshot();
});

test("it shows scale title", () => {
  render(
    <ProgressbarContainer
      title={PROPS.title}
      scales={[PROPS.scale1, PROPS.scale2]}></ProgressbarContainer>
  );

  const scaleTitleElement = screen.getByText(PROPS.title);
  expect(scaleTitleElement).toBeInTheDocument();
});

expect.extend(toHaveNoViolations);
test("it should have no accessibility violations", async () => {
  const { container } = render(
    <ProgressbarContainer
      title={PROPS.title}
      scales={[PROPS.scale1, PROPS.scale2]}></ProgressbarContainer>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
