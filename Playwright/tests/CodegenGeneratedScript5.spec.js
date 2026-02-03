import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByText('PRODUCT STORE Home (current)').click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Mohammad Muneeb');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Muneeb@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
});