import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import itemReducer from "./item/reducer";
import depositReducer from "./deposit/reducer";
import bidReducer from "./bid/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  item: itemReducer,
  deposit: depositReducer,
  bid: bidReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;