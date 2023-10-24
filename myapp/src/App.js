import Final from "./pages/Finalpage"
import Actions from "./pages/Firstpage/components/Actions";
import { routerLinks } from "./router/router";
import {Route, Routes, NavLink } from "react-router-dom";


function App() {
  return <div>
    <ul>
          <li>
            <NavLink to={routerLinks.FIRST}>First Page</NavLink>
          </li>
          <li>
            <NavLink to={routerLinks.FINAL}>Second Page</NavLink>
          </li>
    </ul>
  <Routes>
      <Route path={routerLinks.FIRST} element={<Actions/>}></Route>
      <Route path={routerLinks.FINAL} element={<Final/>}></Route>

  </Routes>
</div>
}

export default App;
