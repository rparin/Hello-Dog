import { act, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import LostDog from "@/components/LostDog";

expect.extend(toHaveNoViolations);

test("it should have no accessibility violations", async () => {
  const { container } = render(<LostDog />);
  const results = await act(async () => axe(container));
  expect(results).toHaveNoViolations();
});

test("it renders component unchanged", () => {
  const { container } = render(<LostDog />);
  expect(container).toMatchSnapshot();
});
