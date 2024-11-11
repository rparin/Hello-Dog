import fetch from "jest-fetch-mock";
import { getDogFact } from "@/lib/actions/DogFact";

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

const DOG_FACT_DATA_INVALID = [
  {
    data: DOG_FACT,
  },
];

beforeEach(() => {
  fetch.resetMocks();
});

test("it should retrieve the dog fact", async () => {
  fetch.mockResponseOnce(JSON.stringify({ data: DOG_FACT_DATA }));
  const dogFact = await getDogFact();
  expect(dogFact).toBe(DOG_FACT);
});

test("it should get a fetch error", async () => {
  fetch.mockRejectOnce();
  await expect(getDogFact()).rejects.toThrow(/Fetch Error/i);
});

test("it should get a http response error", async () => {
  expect.assertions(2);
  fetch.mockResponseOnce(JSON.stringify({ data: DOG_FACT_DATA }), {
    status: 500,
  });
  try {
    const dogFact = await getDogFact();
  } catch (error: any) {
    expect(error.message).toMatch(/Response Error/i);
    expect(error.cause).toMatch(/500/);
  }
});

test("it should get a zod error", async () => {
  expect.assertions(2);
  fetch.mockResponseOnce(JSON.stringify({ data: DOG_FACT_DATA_INVALID }));
  try {
    const dogFact = await getDogFact();
  } catch (error: any) {
    expect(error.message).toMatch(/Invalid API Response format/i);
    expect(error.cause).toMatch(/Validation error/i);
  }
});
