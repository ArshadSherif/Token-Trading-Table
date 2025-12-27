import { test, expect } from "@playwright/test";

test("Pulse layout skeleton visual", async ({ page }) => {
  // Start from clean state
  await page.goto("http://localhost:3000");

  // Wait for layout to settle
  await page.waitForTimeout(300);

  // Snapshot ONLY the pulse container
  const pulse = page.locator("main");

  await expect(pulse).toHaveScreenshot("pulse-layout.png");
});
