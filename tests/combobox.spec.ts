import { test, expect } from "@playwright/test";

test("combobox selects a place in the travel inquiry dialog", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/en");

  await page.getByRole("button", { name: "Plan Your Trip" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();

  const placesInput = page.getByRole("combobox", {
    name: "Places you are interested in",
  });
  await placesInput.click();
  await placesInput.fill("Bish");

  const bishkek = page.getByRole("option", { name: "Bishkek" });
  await expect(bishkek).toBeVisible();
  await bishkek.click();

  await expect(
    page.locator('[data-slot="combobox-chip"]', { hasText: "Bishkek" }),
  ).toBeVisible();
});
