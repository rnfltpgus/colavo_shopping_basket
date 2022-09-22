import { createAsyncThunk } from "@reduxjs/toolkit";

import { FetchError, ColavoData } from "../types/colavo.types";
import formatWithIds from "../utils/formatWithIds";

const fetchData = createAsyncThunk<
  ColavoData,
  void,
  { rejectValue: FetchError }
>("items/fetchData", async () => {
  const response = await fetch(
    "https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData"
  );
  const data = await response.json();

  return {
    currencyCode: data["currency_code"],
    items: formatWithIds(data.items),
    discounts: formatWithIds(data.discounts),
  } as ColavoData;
});

export default fetchData;
