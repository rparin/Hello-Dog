import { test, expect } from "@playwright/test";

const PAGE =
  process.env.NODE_ENV == "test"
    ? process.env.NEXT_PUBLIC_CLIENT_URL
    : "https://hello-dog.vercel.app";

test.describe("Home Page", () => {
  test("it should have the correct title", async ({ page }) => {
    await page.goto(`${PAGE}`);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Hello Dog/);
  });
});

test.describe("Dog Breed Page", () => {
  test("it should have the correct title", async ({ page }) => {
    await page.goto(`${PAGE}/Pembroke_Welsh_Corgi`);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Pembroke Welsh Corgi/);
  });
});
