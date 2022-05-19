import '../src/scss/styles.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Portfolio} from "./js/page/Portfolio/portfolio";
import {Wie} from "./js/page/Wie/wie";
import {Hobby} from "./js/page/Hobby/hobby";
import {Project} from "./js/page/Project/project";
import {Home} from "./js/page/Home/home";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/portfolio'} element={<Portfolio/>}/>
            <Route path={'/wie'} element={<Wie/>}/>
            <Route path={'/hobby'} element={<Hobby/>}/>
            <Route path={'/project'} element={<Project/>}/>

            {/*Grafische projecten*/}
            <Route path={'/project/historas'} element={<Project title={"Historas"}/>}/>
            <Route path={'/project/levis'} element={<Project title={"Kortingsbonnen Levis"}/>}/>
            <Route path={'/project/wsl'} element={<Project title={"Bestikering WSL"}/>}/>
            <Route path={'/project/rule'} element={<Project title={"Rule"}/>}/>
            <Route path={'/project/faalangst'} element={<Project title={"Faalangst"}/>}/>

            {/*Programmeer projecten*/}
            <Route path={'/project/scheldeoord'} element={<Project title={"App scheldeoord"}/>}/>
            <Route path={'/project/bib'} element={<Project title={"Bib"}/>}/>
            <Route path={'/project/kokomocity'} element={<Project title={"Kokomocity"}/>}/>
            <Route path={'/project/delfino'} element={<Project title={"Delfino"}/>}/>
            <Route path={'/project/huizenscanner'} element={<Project title={"Huizenscanner"}/>}/>
            <Route path={'/project/mortselhelpt'} element={<Project title={"Mortsel helpt"}/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
