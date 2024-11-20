import fetch from "jest-fetch-mock";
import { getDogBreedInfo } from "@/actions/DogBreedInfo";

const BREED_NAME = "corgi";
const BREED_INFO_DATA = [
  {
    image_link: "https:/some/corgi/image.jpg",
    good_with_children: 3,
    good_with_other_dogs: 4,
    shedding: 4,
    grooming: 2,
    drooling: 1,
    coat_length: 1,
    good_with_strangers: 4,
    playfulness: 4,
    protectiveness: 5,
    trainability: 4,
    energy: 4,
    barking: 4,
    min_life_expectancy: 12.0,
    max_life_expectancy: 13.0,
    max_height_male: 12.0,
    max_height_female: 12.0,
    max_weight_male: 31.0,
    max_weight_female: 28.0,
    min_height_male: 10.0,
    min_height_female: 10.0,
    min_weight_male: 24.0,
    min_weight_female: 24.0,
    name: "Pembroke Welsh Corgi",
  },
];

const BREED_INFO_DATA_INVALID = [
  {
    image_link: "https:/some/corgi/image.jpg",
    name: "Pembroke Welsh Corgi",
  },
];

beforeEach(() => {
  fetch.resetMocks();
});

test("it should retrieve the dog breed info", async () => {
  fetch.mockResponseOnce(JSON.stringify(BREED_INFO_DATA));
  const dogBreedInfo = await getDogBreedInfo(BREED_NAME);
  expect(dogBreedInfo).toStrictEqual(BREED_INFO_DATA[0]); //deep equality check, ensures types are the same
});

test("it should get a fetch error", async () => {
  fetch.mockRejectOnce();
  await expect(getDogBreedInfo(BREED_NAME)).rejects.toThrow(/Fetch Error/i);
});

test("it should get a http response error", async () => {
  expect.assertions(2);
  fetch.mockResponseOnce(JSON.stringify(BREED_INFO_DATA), {
    status: 500,
  });
  try {
    const dogBreedInfo = await getDogBreedInfo(BREED_NAME);
  } catch (error: any) {
    expect(error.message).toMatch(/Response Error/i);
    expect(error.cause).toMatch(/500/);
  }
});

test("it should get a zod error", async () => {
  expect.assertions(2);
  fetch.mockResponseOnce(JSON.stringify(BREED_INFO_DATA_INVALID));
  try {
    const dogBreedInfo = await getDogBreedInfo(BREED_NAME);
  } catch (error: any) {
    expect(error.message).toMatch(/Invalid API Response format/i);
    expect(error.cause).toMatch(/Validation error/i);
  }
});
