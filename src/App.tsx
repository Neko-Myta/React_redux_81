import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 } from "uuid";
import GlobalStyles from "./styles/Globalstyle";
import Layout from "./components/Layuot/Layout";
import { routesData } from "./routes/data";
import { RouteObj } from "./routes/type";


function App() {
  const routes = routesData.map((route: RouteObj) => {
    return <Route key={v4()} path={route.path} element={route.element}/>;
  });
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          {routes}
        </Routes>
      </Layout>
      
    </BrowserRouter>
  );
}
export default App;