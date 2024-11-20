import fetch from "jest-fetch-mock";
import { getDogBreedInfo } from "@/actions/DogBreedInfo";

const BREED_NAME = "corgi";
const BREED_INFO_DATA = {
  img: "https:/some/corgi/image.jpg",
  goodWithChildren: 3,
  goodWithOtherDogs: 4,
  shedding: 4,
  grooming: 2,
  drooling: 1,
  coatLength: 1,
  goodWithStrangers: 4,
  playfulness: 4,
  protectiveness: 5,
  trainability: 4,
  energy: 4,
  barking: 4,
  minLifeExpectancy: 12.0,
  maxLifeExpectancy: 13.0,
  maxHeightMale: 12.0,
  maxHeightFemale: 12.0,
  maxWeightMale: 31.0,
  maxWeightFemale: 28.0,
  minHeightMale: 10.0,
  minHeightFemale: 10.0,
  minWeightMale: 24.0,
  minWeightFemale: 24.0,
  name: "Pembroke Welsh Corgi",
};

const BREED_INFO_DATA_INVALID = {
  img: "https:/some/corgi/image.jpg",
  name: "Pembroke Welsh Corgi",
};

beforeEach(() => {
  fetch.resetMocks();
});

test("it should retrieve the dog breed info", async () => {
  fetch.mockResponseOnce(JSON.stringify(BREED_INFO_DATA));
  const dogBreedInfo = await getDogBreedInfo(BREED_NAME);
  expect(dogBreedInfo).toStrictEqual(BREED_INFO_DATA); //deep equality check, ensures types are the same
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
