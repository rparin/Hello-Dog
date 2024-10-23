import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Border from "@/components/Border";

expect.extend(toHaveNoViolations);

test("should have no accessibility violations", async () => {
  const { container } = render(<Border></Border>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("it renders component unchanged", () => {
  const { container } = render(<Border></Border>);
  expect(container).toMatchSnapshot();
});
