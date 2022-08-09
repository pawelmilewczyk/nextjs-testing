import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

import { readFakeData } from "../../fakeData";

export const resetDB = async () => {
  // failsafe against resetting production db!
  const safeToReset = process.env.NODE_ENV === "test" || process.env.CYPRESS;
  if (!safeToReset) {
    // eslint-disable-next-line no-console
    console.log("WARNING: database reset unavailable outside test environment");
    return;
  }

  const { fakeBands, fakeReservations, fakeShows, fakeUsers } =
    await readFakeData();

  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
};
