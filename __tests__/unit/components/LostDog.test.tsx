import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import LostDog from "@/components/LostDog";

expect.extend(toHaveNoViolations);

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

test("it should have no accessibility violations", async () => {
  const { container } = render(<LostDog />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("it renders component unchanged", () => {
  const { container } = render(<LostDog />);
  expect(container).toMatchSnapshot();
});
