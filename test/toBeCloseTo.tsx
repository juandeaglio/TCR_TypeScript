import { expect } from "@playwright/experimental-ct-react";
expect.extend({
    toBeCloseTo(received: number, expected: number, precision: number) {
      const pass = Math.abs(received - expected) < precision;
      return {
        pass,
        message: () =>
          `expected ${received} to be close to ${expected} with precision ${precision}`,
      };
    },
});