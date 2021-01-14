import React, { Suspense } from "react";

import { Switch, Route, useHistory } from "react-router-dom";

export const table = [
  {
    key: "ch3.1",
    path: "/ch3_1",
    component: React.lazy(() => import("src/ch3/ch3_1.jsx")),
  },
  {
    key: "ch3.2",
    path: "/ch3_2",
    component: React.lazy(() => import("src/ch3/ch3_2.jsx")),
  },
];

const App = () => {
  const history = useHistory();

  const changeChapter = (e) => {
    history.push(e.target.value);
  };

  return (
    <div>
      <select name="activeRouter" id="activeRouter" onChange={changeChapter}>
        {table.map((value, index) => (
          <option key={index} value={value.path}>
            {value.key}
          </option>
        ))}
      </select>
      <Suspense fallback={"...."}>
        <Switch>
          {table.map((value, index) => (
            <Route
              key={index}
              path={value.path}
              exact={true}
              strict={true}
              component={value.component}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
