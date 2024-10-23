import { act, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import CountdownNavigateTo from "@/components/CountdownNavigateTo";

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

test("should have no accessibility violations", async () => {
  const { container } = render(
    <CountdownNavigateTo href={"/"} countdown={0} />
  );
  const results = await act(async () => axe(container));
  expect(results).toHaveNoViolations();
});
