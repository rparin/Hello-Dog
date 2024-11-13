import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("it should have the correct title", async ({ page }) => {
    await page.goto(`https://hello-dog.vercel.app/`);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Hello Dog/);
  });
});

test.describe("Dog Breed Page", () => {
  test("it should have the correct title", async ({ page }) => {
    await page.goto(`https://hello-dog.vercel.app/Cardigan_Welsh_Corgi`);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Cardigan Welsh Corgi/);
  });
});
