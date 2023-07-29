import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import Applayout from "../layout/AppLayout";
import { routes } from "./routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Applayout />}>
            {/* Map all routes */}
            {routes.map((route) => {
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  element={<route.component />}
                />
              );
            })}
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default AppRoutes;
