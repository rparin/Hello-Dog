import App from "@/app/page";
// import DogBreed from "@/app/[dogBreed]/page";
import { act, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

describe("testing App Accessibility", () => {
  expect.extend(toHaveNoViolations);

  test("it (Landing Page) should have no accessibility violations", async () => {
    const { container } = render(<App />);
    const results = await act(async () => axe(container));
    expect(results).toHaveNoViolations();
  });

  // test("it (DogBreed Page) should have no accessibility violations", async () => {
  //   const { container } = render(
  //     <DogBreed
  //       params={{
  //         dogBreed: "Cardigan_Welsh_Corgi",
  //       }}
  //     />
  //   );
  //   const results = await act(async () => axe(container));
  //   expect(results).toHaveNoViolations();
  // });
});
