import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import InfoContainer from "@/components/Info-Container/InfoContainer";

expect.extend(toHaveNoViolations);

test("should have no accessibility violations", async () => {
  const { container } = render(
    <InfoContainer
      title="Physical Stats"
      info={[
        {
          name: "Life Expectancy",
          value: {
            other: "12 - 15 years",
          },
        },
      ]}></InfoContainer>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
