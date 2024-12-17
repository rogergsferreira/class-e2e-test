const { test, expect } = require('@playwright/test');

let result;

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  result = page.locator('#result')
  await expect(result).toBeEmpty();
});

test.describe('Test JS alerts', () => {
  test('should check if the JS Alert is working', async ({ page }) => {
    result = page.locator('#result')
    await page.getByText('Click for JS Alert').click();
    await expect(result).toHaveText("You successfully clicked an alert");
  });

  test('should check if the JS Confirm is working', async ({ page }) => {
    result = page.locator('#result');
    await page.getByText('Click for JS Confirm').click();
    const resultText = await result.textContent();
    expect(resultText === "You clicked: Cancel" || resultText === "You clicked: Ok").toBeTruthy();
  });
});

//   test('should clear text input field when an item is added', async ({ page }) => {
//     // create a new todo locator
//     const newTodo = page.getByPlaceholder('What needs to be done?');

//     // Create one todo item.
//     await newTodo.fill(TODO_ITEMS[0]);
//     await newTodo.press('Enter');

//     // Check that input is empty.
//     await expect(newTodo).toBeEmpty();
//     await checkNumberOfTodosInLocalStorage(page, 1);
//   });

//   test('should append new items to the bottom of the list', async ({ page }) => {
//     // Create 3 items.
//     await createDefaultTodos(page);

//     // create a todo count locator
//     const todoCount = page.getByTestId('todo-count')

//     // Check test using different methods.
//     await expect(page.getByText('3 items left')).toBeVisible();
//     await expect(todoCount).toHaveText('3 items left');
//     await expect(todoCount).toContainText('3');
//     await expect(todoCount).toHaveText(/3/);

//     // Check all items in one call.
//     await expect(page.getByTestId('todo-title')).toHaveText(TODO_ITEMS);
//     await checkNumberOfTodosInLocalStorage(page, 3);
//   });
// });
