import fetch from "jest-fetch-mock";
import { getCeoDogImage } from "@/actions/DogImageCeo";

const BREED_URL = "corgi";
const DOG_IMAGE_DATA = {
  imgs: [
    "https:/some/corgi/image1.jpg",
    "https:/some/corgi/image2.jpg",
    "https:/some/corgi/image3.jpg",
  ],
  len: 3,
};

const DOG_IMAGE_DATA_INVALID = {
  data: "https:/some/corgi/image1.jpg",
};

beforeEach(() => {
  fetch.resetMocks();
});

test("it should retrieve the dog image", async () => {
  fetch.mockResponseOnce(JSON.stringify(DOG_IMAGE_DATA));
  const dogImage = await getCeoDogImage(BREED_URL);
  expect(dogImage).toStrictEqual(DOG_IMAGE_DATA);
});

test("it should get a fetch error", async () => {
  fetch.mockRejectOnce();
  await expect(getCeoDogImage(BREED_URL)).rejects.toThrow(/Fetch Error/i);
});

test("it should get a http response error", async () => {
  expect.assertions(2);
  fetch.mockResponseOnce(JSON.stringify(DOG_IMAGE_DATA), {
    status: 500,
  });
  try {
    const dogImage = await getCeoDogImage(BREED_URL);
  } catch (error: any) {
    expect(error.message).toMatch(/Response Error/i);
    expect(error.cause).toMatch(/500/);
  }
});

test("it should get a zod error", async () => {
  expect.assertions(2);
  fetch.mockResponseOnce(JSON.stringify(DOG_IMAGE_DATA_INVALID));
  try {
    const dogImage = await getCeoDogImage(BREED_URL);
  } catch (error: any) {
    expect(error.message).toMatch(/Invalid API Response format/i);
    expect(error.cause).toMatch(/Validation error/i);
  }
});
