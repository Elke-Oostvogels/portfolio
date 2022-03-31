import '../src/scss/styles.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Portfolio} from "./js/page/Portfolio/portfolio";
import {Wie} from "./js/page/Wie/wie";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path={'/portfolio'} element={<Portfolio/>}/>
            <Route path={'/wie'} element={<Wie/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
