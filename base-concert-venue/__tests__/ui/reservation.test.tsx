import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

test("displays reservations and 'purchase more' button when reservation exists", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});

test("displays no reservations and 'purchase' button when no reservation exists", async () => {
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);

  const soldOutMessage = await screen.findByRole("heading", {
    name: /sold out/i,
  });
  expect(soldOutMessage).toBeInTheDocument();

  const purchaseButton = screen.queryByRole("button", { name: /purchase/i });
  expect(purchaseButton).not.toBeInTheDocument();
});
