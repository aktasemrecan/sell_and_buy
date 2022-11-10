import ReactDOM from "react-dom/client";
import App from "./App";

//Redux
import configureStore from "./redux/configure-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const store = configureStore();

root.render(<Provider store={store}>
    <App/>
</Provider>);