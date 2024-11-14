import { test, expect } from "@playwright/test";
import { PAGE } from "@test-utils/playwright.utils";
import { APP_NAME, SEARCH_PLACEHOLDER } from "@/constants/webInfo";

// test.use({
//   launchOptions: {
//     slowMo: 1_000,
//   },
// });

test.beforeEach(async ({ page }) => {
  await page.goto(`${PAGE}`);
});

test.describe("Search for both types of corgi", () => {
  test("it should search for corgi and press enter", async ({ page }) => {
    await expect(page).toHaveTitle(APP_NAME);

    const searchBar = page.getByPlaceholder(SEARCH_PLACEHOLDER);
    await expect(searchBar).toBeVisible();

    await searchBar.fill("corgi");
    await page.keyboard.press("Enter");

    const corgiSearchBar = page.getByPlaceholder("corgi");

    await expect(corgiSearchBar).toBeInViewport();
    await expect(corgiSearchBar).toBeEmpty();
  });

  test("it should search for corgi and select pembroke", async ({ page }) => {
    await expect(page).toHaveTitle(APP_NAME);

    const searchBar = page.getByPlaceholder(SEARCH_PLACEHOLDER);
    await expect(searchBar).toBeVisible();

    await searchBar.fill("corgi");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

    const corgiSearchBar = page.getByPlaceholder("pembroke");

    await expect(corgiSearchBar).toBeInViewport();
    await expect(corgiSearchBar).toBeEmpty();
  });
});

test("it should search for corgi, shiba, then go back to home page", async ({
  page,
}) => {
  await expect(page).toHaveTitle(APP_NAME);

  //Corgi Search
  const searchBar = page.getByPlaceholder(SEARCH_PLACEHOLDER);
  await expect(searchBar).toBeFocused();
  await expect(searchBar).toBeVisible();
  await searchBar.fill("corgi");
  await page.keyboard.press("Enter");
  const corgiSearchBar = page.getByPlaceholder("Cardigan Welsh Corgi");
  await expect(corgiSearchBar).toBeInViewport();
  await expect(corgiSearchBar).toBeEmpty();
  await expect(corgiSearchBar).not.toBeFocused();
  await expect(page).toHaveTitle("Hello Dog - Cardigan Welsh Corgi");

  //Corgi Search
  await corgiSearchBar.fill("shiba");
  await page.keyboard.press("Enter");
  const shibaSearchBar = page.getByPlaceholder("shiba");
  await expect(shibaSearchBar).toBeInViewport();
  await expect(shibaSearchBar).toBeEmpty();
  await expect(shibaSearchBar).not.toBeFocused();
  await expect(page).toHaveTitle("Hello Dog - Shiba Inu");

  //Go back to home page
  await page.getByRole("link", { name: "Hello Dog Website logo" }).click();
  await expect(page).toHaveTitle(APP_NAME);
});
