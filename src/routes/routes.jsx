import { Routes, Route } from "react-router-dom";

import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";
import Detail from "../containers/Detail";
import DefaultLayout from "../layout/DefaultLayout";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default Router