// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState<number>();
//   const [toggle, setToggle] = useState<boolean>(false);
//   const [value, setValue] = useState<string>("");

//   const onClick = () => {
//     setToggle((prev) => !prev);
//   };
//   useEffect(() => {
//     setTimeout(() => {
//       setData(5);
//     }, 100);
//   }, []);
//   return (
//     <div>
//       <h1 data-testid="input-value">{value}</h1>
//       {toggle === true && <div data-testid="toggle-elem">Toggle</div>}
//       {data && <div>Data</div>}
//       <h1>Hello world</h1>
//       <button data-testid="button" onClick={onClick}>
//         Click me
//       </button>
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         type="text"
//         placeholder="input value"
//       />
//     </div>
//   );
// }

// export default App;

import AppRouter from "../routes/AppRouter";
import Navbar from "../components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
