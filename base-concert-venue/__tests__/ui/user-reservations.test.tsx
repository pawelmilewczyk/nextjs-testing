import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("should display correct purchase button text", async () => {
  render(<UserReservations userId={1} />);

  const button = await screen.findByRole("button", {
    name: /purchase more tickets/i,
  });
  expect(button).toBeInTheDocument();
});
