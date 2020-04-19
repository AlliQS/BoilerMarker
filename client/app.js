import { Provider } from "react-redux";
import store from "./index.js";

ReactDOM.render(
  <Provider store={store}>{myapp}</Provider>,
  document.getElementById("app")
);
