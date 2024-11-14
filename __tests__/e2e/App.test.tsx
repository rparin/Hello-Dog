import { test, expect } from "@playwright/test";
import { APP_NAME, CR, SEARCH_PLACEHOLDER } from "@/constants/webInfo";

const PAGE =
  process.env.NODE_ENV == "test"
    ? process.env.NEXT_PUBLIC_CLIENT_URL
    : "https://hello-dog.vercel.app";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${PAGE}`);
    page.waitForLoadState("domcontentloaded");
  });

  test("it should have the correct title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(APP_NAME);
  });

  test("it should have the correct placeholder", async ({ page }) => {
    const searchBar = page.getByPlaceholder(SEARCH_PLACEHOLDER);
    await expect(searchBar).toBeVisible();
  });

  test("it should show the footer credits", async ({ page }) => {
    const footerCred = page.getByRole("contentinfo");
    await expect(footerCred).toBeVisible();
    await expect(footerCred).toHaveText(CR);
  });
});

test.describe("Dog Breed Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${PAGE}/Pembroke_Welsh_Corgi`);
  });

  test("it should have the correct title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Pembroke Welsh Corgi/);
  });

  test("it should have the correct placeholder", async ({ page }) => {
    const searchBar = page.getByPlaceholder(/Pembroke Welsh Corgi/i);
    await expect(searchBar).toBeInViewport();
  });

  test("it should show the footer credits", async ({ page }) => {
    const footerCred = page.getByRole("contentinfo");
    await expect(footerCred).toBeVisible();
    await expect(footerCred).toHaveText(CR);
  });

  test("it should go back to Home Page", async ({ page }) => {
    // Click the get started link.
    await page.getByRole("link", { name: "Hello Dog Website logo" }).click();

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(APP_NAME);
  });

  test("it should show the random dog fact", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: "Random Dog Fact",
      })
    ).toBeInViewport();

    await expect(page.getByTestId("random-dog-fact")).toBeVisible();
  });

  test("it should show the random dog fact credits", async ({ page }) => {
    await expect(
      page.getByText("Powered by Stratonauts Dog API")
    ).toBeVisible();

    await expect(page.getByLabel("Stratonauts Dog API")).toBeVisible();
  });

  test("it should show the Characteristics Box", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: "Characteristics",
      })
    ).toBeInViewport();

    await expect(page.getByText("Shedding")).toBeVisible();
    await expect(page.getByText("Grooming")).toBeVisible();
    await expect(page.getByText("Drooling")).toBeVisible();
    await expect(page.getByText("Coat Length")).toBeVisible();
    await expect(page.getByText("Playfulness")).toBeVisible();
    await expect(page.getByText("Protectiveness")).toBeVisible();
    await expect(page.getByText("Trainability")).toBeVisible();
    await expect(page.getByText("Energy")).toBeVisible();
    await expect(page.getByText("Barking")).toBeVisible();
  });

  test("it should show the Physical Stats Box", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: "Physical Stats",
      })
    ).toBeInViewport();
    await expect(page.getByText("Life Expectancy")).toBeVisible();
    await expect(page.getByText("Height")).toBeVisible();
    await expect(page.getByText("Weight")).toBeVisible();
  });

  test("it should show the Good With Box", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: "Good With",
      })
    ).toBeInViewport();
    await expect(page.getByText("Children")).toBeVisible();
    await expect(page.getByText("Strangers")).toBeVisible();
    await expect(page.getByText("Other Dogs")).toBeVisible();
  });
});
