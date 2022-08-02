import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("should display 'purchase more tickets' button", async () => {
  render(<UserReservations userId={1} />);

  const button = await screen.findByRole("button", {
    name: /purchase more tickets/i,
  });
  expect(button).toBeInTheDocument();
});

test('should display "purchase tickets" and should not display "Your tickets" heading if userId === 0', async () => {
  render(<UserReservations userId={0} />);

  const button = await screen.findByRole("button", {
    name: /purchase tickets/i,
  });
  expect(button).toBeInTheDocument();

  const heading = screen.queryByRole("heading", { name: /your tickets/i });
  expect(heading).not.toBeInTheDocument();
});
