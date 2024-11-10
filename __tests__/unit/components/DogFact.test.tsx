import fetch from "jest-fetch-mock";
import "@testing-library/jest-dom";
import DogFact from "@/components/DogFact";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

const DOG_FACT =
  "Tired puppies get cranky just like little kids. If you have a fussy puppy, try nap time.";

const DOG_FACT_DATA = [
  {
    id: "115fabfe-ea24-42af-afde-2cdcad7a8502",
    type: "fact",
    attributes: {
      body: DOG_FACT,
    },
  },
];

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify({ data: DOG_FACT_DATA }));
});

describe("testing SearchAutoComplete Accessibility", () => {
  expect.extend(toHaveNoViolations);

  test("it should have no accessibility violations", async () => {
    const { container } = render(await DogFact({}));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", async () => {
  const { container } = render(await DogFact({}));
  expect(container).toMatchSnapshot();
});

test("it should show the dog fact", async () => {
  render(await DogFact({}));
  const dogFact = screen.getByText(DOG_FACT);
  expect(dogFact).toBeInTheDocument();
});
