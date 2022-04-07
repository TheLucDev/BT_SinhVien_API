import { BAT_LOADING, TAT_LOADING } from "../constant/loadingConstant";

let initialState = {
  isLoading: true,
  count: 0,
};

export const loadingReducer = (state = initialState, { type }) => {
  switch (type) {
    case BAT_LOADING:
      state.isLoading = true;
      state.count++;
      return { ...state };
    case TAT_LOADING:
      state.count--;

      if (state.count <= 0) {
        state.isLoading = false;
      }
      return { ...state };
    default:
      return { ...state };
  }
};
