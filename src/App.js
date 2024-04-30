import { ThemeProvider } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import { theme } from "./helper/Theme";
import ScrollToTop from "./helper/ScrollToTop";
import Layout from "./components/layouts/Layout";
import "./App.css";
import PageNotFound from "./helper/PageNotFound";
import Home from "./pages/home";
import Town from "./pages/town";
import Property from "./pages/property";
import { useState } from "react";

function App() {
  const location = useLocation();
  const slug = location.pathname.split("/")[1];
  const [searchValues, setSearchValues] = useState({
    cities: [],
    preferences: [],
  });
  const pages = [
    {
      name: "Home",
      path: "",
      element: (
        <Home searchValues={searchValues} setSearchValues={setSearchValues} />
      ),
    },
    {
      name: "Town",
      path: "town",
      element: (
        <Town searchValues={searchValues} setSearchValues={setSearchValues} />
      ),
    },
    { name: "Property", path: "property", element: <Property /> },
  ];
  return (
    <ScrollToTop>
      <ThemeProvider theme={theme}>
        <div className="">
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            {pages.map((page, index) => {
              const { name, path, element } = page;
              return (
                <Route
                  key={index}
                  exact
                  path={`/${path}`}
                  name={name}
                  element={<Layout>{element}</Layout>}
                />
              );
            })}
          </Routes>
        </div>
      </ThemeProvider>
    </ScrollToTop>
  );
}

export default App;
