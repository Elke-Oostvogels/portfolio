import '../src/scss/styles.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Portfolio} from "./js/page/Portfolio/portfolio";
import {Wie} from "./js/page/Wie/wie";
import {Contact} from "./js/page/Contact/contact";
import {Project} from "./js/page/Project/project";
import {Home} from "./js/page/Home/home";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/portfolio'} element={<Portfolio/>}/>
            <Route path={'/wie'} element={<Wie/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/project'} element={<Project/>}/>
            <Route path={'/project/historas'} element={<Project title={"Hisoras"}/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
