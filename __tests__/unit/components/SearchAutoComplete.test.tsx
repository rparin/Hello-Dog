import { act, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import SearchAutoComplete from "@/components/SearchAutoComplete";

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
  const { container } = render(<SearchAutoComplete />);
  const results = await act(async () => axe(container));
  expect(results).toHaveNoViolations();
});

test("it renders component unchanged", () => {
  const { container } = render(<SearchAutoComplete />);
  expect(container).toMatchSnapshot();
});
