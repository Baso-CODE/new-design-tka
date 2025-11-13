import { getSingleContactCsIsDeleted } from "@/app/request/contacts/getSingleIsDeletedContactCs";
import { ContactCs } from "@/app/types/contact.type";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// === Type Definitions ===
export type LoadingStatus = "idle" | "pending" | "succeeded" | "failed";

export interface ContactCsState {
  contactCsData: ContactCs | null;
  loading: LoadingStatus;
  error: string | null;
}

// === Initial State ===
const initialState: ContactCsState = {
  contactCsData: null,
  loading: "idle",
  error: null,
};

export const fetchContactCs = createAsyncThunk<
  ContactCs,
  void,
  { rejectValue: string }
>("contactCs/fetchContactCs", async (_, { rejectWithValue }) => {
  try {
    const response = await getSingleContactCsIsDeleted();
    return response;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return rejectWithValue(err.message || "Failed to fetch contact CS data");
    }
    return rejectWithValue("Failed to fetch contact CS data");
  }
});

// === Slice ===
const contactCsSlice = createSlice({
  name: "contactCs",
  initialState,
  reducers: {
    setContactCsData: (state, action: PayloadAction<ContactCs>) => {
      state.contactCsData = action.payload;
    },
    resetContactCs: (state) => {
      state.contactCsData = null;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactCs.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchContactCs.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.contactCsData = action.payload;
        state.error = null;
      })
      .addCase(fetchContactCs.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload ?? "Unknown error";
      });
  },
});

// === Exports ===
export const { setContactCsData, resetContactCs } = contactCsSlice.actions;
export default contactCsSlice.reducer;

// === Selectors ===
export const selectContactCsData = (state: { contactCs: ContactCsState }) =>
  state.contactCs.contactCsData;

export const selectContactCsLoading = (state: { contactCs: ContactCsState }) =>
  state.contactCs.loading;

export const selectContactCsError = (state: { contactCs: ContactCsState }) =>
  state.contactCs.error;
