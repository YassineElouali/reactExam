import { HashRouter as Router, Routes, Link, Route } from "react-router-dom";
import Dialog from "./components/Dialog/Dialog";
import AutoFilterListDropdownPage from "./components/AutoFilterListDropdown/AutoFilterListDropdownPage";
import LocalStorageProvider from "./components/LocalStorageHandler/LocalStorageProvider";
import SetterComponent from "./components/LocalStorageHandler/SetterComponent";
import DisplayComponent from "./components/LocalStorageHandler/DisplayComponent";

import "./App.css";

function App() {
  return (
    <LocalStorageProvider>
      <Router>
        <div>
          <nav className="navbar">
            <Link
              to="/local-storage"
              className={`nav-link ${
                location.pathname === "local-storage" ? "active" : ""
              }`}
            >
              LocalStorage Handler{" "}
            </Link>
            <Link
              to="/dialog"
              className={`nav-link ${
                location.pathname === "dialog" ? "active" : ""
              }`}
            >
              Dialog{" "}
            </Link>
            <Link
              to="/auto-filter-list"
              className={`nav-link ${
                location.pathname === "auto-filter-list" ? "active" : ""
              }`}
            >
              AutoFilter List Dropdown{" "}
            </Link>
          </nav>
          <main>
            <Routes>
              <Route
                path="local-storage"
                element={
                  <>
                    <SetterComponent />
                    <DisplayComponent />
                  </>
                }
              ></Route>
              <Route path="dialog" element={<Dialog />}></Route>
              <Route
                path="auto-filter-list"
                element={<AutoFilterListDropdownPage />}
              ></Route>
            </Routes>
          </main>
        </div>
      </Router>
    </LocalStorageProvider>
  );
}

export default App;
