import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandPage from "@/pages/bands/[bandId]";

test("band page displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandPage error={null} band={fakeBands[0]} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });

  expect(heading).toBeInTheDocument();
});

test("band page displays error if not band fetched", () => {
  render(<BandPage error="error message" band={null} />);

  const heading = screen.getByRole("heading", {
    name: /error message/i,
  });

  expect(heading).toBeInTheDocument();
});
