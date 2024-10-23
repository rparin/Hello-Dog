import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Footer from "@/components/Footer";

expect.extend(toHaveNoViolations);

test("it should have no accessibility violations", async () => {
  const { container } = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
