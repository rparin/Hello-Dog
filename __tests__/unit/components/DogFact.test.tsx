import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import DogFact from "@/components/DogFact";
import mockFetch from "@test-utils/fetchMock";

expect.extend(toHaveNoViolations);

test("it should have no accessibility violations", async () => {
  //Mock get request
  //https://dogapi.dog/api/v2/facts
  window.fetch = mockFetch({
    data: [
      {
        id: "115fabfe-ea24-42af-afde-2cdcad7a8502",
        type: "fact",
        attributes: {
          body: "Tired puppies get cranky just like little kids. If you have a fussy puppy, try nap time.",
        },
      },
    ],
  });

  const { container } = render(await DogFact({ className: "" }));
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
