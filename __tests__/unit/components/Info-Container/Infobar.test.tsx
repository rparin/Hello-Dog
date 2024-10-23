import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Infobar from "@/components/Info-Container/Infobar";

expect.extend(toHaveNoViolations);

test("should have no accessibility violations", async () => {
  const { container } = render(
    <Infobar
      barValue={{
        name: "Life Expectancy",
        value: {
          other: "12 - 15 years",
        },
      }}></Infobar>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("it renders component unchanged", () => {
  const { container } = render(
    <Infobar
      barValue={{
        name: "Life Expectancy",
        value: {
          other: "12 - 15 years",
        },
      }}></Infobar>
  );
  expect(container).toMatchSnapshot();
});
