import { test, expect } from '@playwright/test';
import '../../toBeCloseTo';
import { TestSimulation } from '../../../src/systems/TestSimulation'

const MAX_HEIGHT = 1024;
const MAX_WIDTH = 1024;

const elementSelector = '[data-testid="Box-1"]';
test.describe('Entity controls tests', () => {
    test('Test move a Box to the right', async ({ page }) => {
        await page.goto('http://localhost:3000');

        await page.setViewportSize({ width: MAX_WIDTH, height: MAX_HEIGHT });

        let boxRect = await page.$eval(elementSelector, (box) => {
            return box.getBoundingClientRect();
        });


        let boxElement = await page.$eval(elementSelector, (box) =>{
            return box;
        });

        const expectedX = boxRect.left;
        const expectedY = boxRect.top;

        await page.evaluate(() => {
            // Simulator.unpause()

            document.querySelectorAll('.move-90')[0].classList.remove('pause-animation');
        });

        await page.waitForTimeout(1000);
        // Simulator.pause()
        boxElement = await page.$eval(elementSelector, (box) =>{
            return box;
        });

        boxRect = await page.$eval(elementSelector, (box) => {
            return box.getBoundingClientRect();
        });

        // Assert the position of the box
        expect(boxRect.left).toBeCloseTo(expectedX + 10, 0.5);
        expect(boxRect.top).toBeCloseTo(expectedY, 0.5);
    });
});