import { act, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import CountdownNavigateTo from "@/components/CountdownNavigateTo";

expect.extend(toHaveNoViolations);

test("should have no accessibility violations", async () => {
  const { container } = render(
    <CountdownNavigateTo href={"/"} countdown={0} />
  );
  const results = await act(async () => axe(container));
  expect(results).toHaveNoViolations();
});

test("it renders component unchanged", () => {
  const { container } = render(
    <CountdownNavigateTo href={"/"} countdown={0} />
  );
  expect(container).toMatchSnapshot();
});
