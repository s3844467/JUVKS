import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import personReducer from "./personReducer";
import securityReducer from "./securityReducer";
import bookReducer from "./bookReducer";
import reviewReducer from "./reviewReducer";
import categoryReducer from "./categoryReducer";
import userReviewReducer from "./userReviewReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  errors: errorReducer,
  person: personReducer,
  security: securityReducer,
  books: bookReducer,
  userReview: userReviewReducer,
  cart: cartReducer,
  reviews: reviewReducer,
  category: categoryReducer
});

