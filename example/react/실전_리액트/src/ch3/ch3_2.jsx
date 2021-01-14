import React from "react";
import ReactDom from "react-dom";

const Ele = function () {
  return <h1>제 나이는 2222 입니다.</h1>;
};

const App = () => {
  return (
    <>
      <Ele></Ele>
    </>
  );
};

console.log(Ele);
export default App;
