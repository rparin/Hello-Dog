import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import ScaleContainer from "@/components/Scale-Container/ScaleContainer";

expect.extend(toHaveNoViolations);

test("should have no accessibility violations", async () => {
  const { container } = render(
    <ScaleContainer
      title={"Good With"}
      scales={[{ name: "Energy", value: 3 }]}></ScaleContainer>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("it renders component unchanged", () => {
  const { container } = render(
    <ScaleContainer
      title={"Good With"}
      scales={[{ name: "Energy", value: 3 }]}></ScaleContainer>
  );
  expect(container).toMatchSnapshot();
});

test("it shows Scale title", () => {
  render(
    <ScaleContainer
      title={"Good With"}
      scales={[{ name: "Energy", value: 3 }]}></ScaleContainer>
  );

  const scaleTitleElement = screen.getByText("Good With");
  expect(scaleTitleElement).toBeInTheDocument();
});
