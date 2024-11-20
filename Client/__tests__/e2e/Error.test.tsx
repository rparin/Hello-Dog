import { test, expect } from "@playwright/test";
import { PAGE } from "@test-utils/playwright.utils";
import { APP_NAME } from "@/constants/webInfo";

// Slow down test by ms
// test.use({
//   launchOptions: {
//     slowMo: 1_000,
//   },
// });

test.beforeEach(async ({ page }) => {
  await page.goto(`${PAGE}/invalidDogBreed`);
});

test("it should go to an invalid page and return back to the home page", async ({
  page,
}) => {
  await expect(page).toHaveTitle("Hello Dog - invalidDogBreed");

  //Check that Lost Dog Poster is shown
  await expect(
    page.getByRole("img", { name: "Lost Dog poster" })
  ).toBeInViewport();

  await expect(page.getByLabel("Link to home page")).toBeInViewport();

  //Wait for ~ 6 seconds
  await page.waitForTimeout(6000);

  //Page should auto return to home page
  await expect(page).toHaveTitle(APP_NAME);
});
