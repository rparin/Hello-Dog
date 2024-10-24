import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import DogFact from "@/components/DogFact";
import mockFetch from "@test-utils/fetchMock";

expect.extend(toHaveNoViolations);

const DOG_FACT =
  "Tired puppies get cranky just like little kids. If you have a fussy puppy, try nap time.";

beforeAll(() => {
  //Mock get request
  //https://dogapi.dog/api/v2/facts
  window.fetch = mockFetch({
    data: [
      {
        id: "115fabfe-ea24-42af-afde-2cdcad7a8502",
        type: "fact",
        attributes: {
          body: DOG_FACT,
        },
      },
    ],
  });
});

test("it should have no accessibility violations", async () => {
  const { container } = render(await DogFact({ className: "" }));
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("it renders component unchanged", async () => {
  const { container } = render(await DogFact({ className: "" }));
  expect(container).toMatchSnapshot();
});

test("it should show the dog fact", async () => {
  render(await DogFact({ className: "" }));
  const dogFact = screen.getByText(DOG_FACT);
  expect(dogFact).toBeInTheDocument();
});
