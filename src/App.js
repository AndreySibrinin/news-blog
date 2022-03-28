import {Routes, Route} from "react-router-dom";

import Articles from "./pages/Articles/Articles";
import Layout from "./components/Layout/Layout";
import DetailArticle from "./pages/DetailArticle/DetailArticle";
function App() {
  return (
      <Routes>
        <Route path="/articles" element={<Layout />}>
          <Route index element={<Articles/>} />
            <Route path=":id" element={<DetailArticle/>} />
        </Route>
      </Routes>
  );
}

export default App;
