import { Routes, Route} from "react-router-dom";
import Layout from "./components/frontend/Layout";
import route from './router/route'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
        {
          route && route.map((val, i)=>{
            return(
              <Route key={i} path={val.path} element={val.element} name={val.name} />
            )
          }) 
        }
        </Route>
      </Routes>
    </div>
  );
}

export default App;
