import '../src/scss/styles.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Portfolio} from "./js/page/Portfolio/portfolio";
import {Wie} from "./js/page/Wie/wie";
import {Hobby} from "./js/page/Hobby/hobby";
import {Project} from "./js/page/Project/project";
import {Home} from "./js/page/Home/home";
import {Delfino} from "./js/page/Project/Programmeren/Delfino";
import {Faalangst} from "./js/page/Project/Grafisch/Faalangst";
import {Rule} from "./js/page/Project/Grafisch/Rule";
import {WSL} from "./js/page/Project/Grafisch/WSL";
import {Historas} from "./js/page/Project/Grafisch/Historas";
import {ScheldeOord} from "./js/page/Project/Programmeren/ScheldeOord";
import {Kokomocity} from "./js/page/Project/Programmeren/Kokomocity";
import {Huizenscanner} from "./js/page/Project/Stage/Huizenscanner";
import {MortselHelpt} from "./js/page/Project/Stage/MortselHelpt";
import {Bib} from "./js/page/Project/Programmeren/bib";
import {ParkNaam} from "./js/page/Project/Stage/ParkNaam";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/portfolio'} element={<Portfolio/>}/>
            <Route path={'/wie'} element={<Wie/>}/>
            <Route path={'/hobby'} element={<Hobby/>}/>
            <Route path={'/project'} element={<Project/>}/>

            {/*Grafische projecten*/}
            <Route path={'/project/historas'} element={<Historas title={"Historas"}/>}/>
            <Route path={'/project/wsl'} element={<WSL title={"Bestickering WSL"}/>}/>
            <Route path={'/project/rule'} element={<Rule title={"Rule"}/>}/>
            <Route path={'/project/faalangst'} element={<Faalangst title={"Faalangst"}/>}/>

            {/*Programmeer projecten*/}
            <Route path={'/project/scheldeoord'} element={<ScheldeOord title={"App scheldeoord"}/>}/>
            <Route path={'/project/bib'} element={<Bib title={"Bib"}/>}/>
            <Route path={'/project/kokomocity'} element={<Kokomocity title={"Kokomocity"}/>}/>
            <Route path={'/project/delfino'} element={<Delfino title={"Delfino"}/>}/>
            <Route path={'/project/huizenscanner'} element={<Huizenscanner title={"Huizen scanner"}/>}/>
            <Route path={'/project/parkzktnaam'} element={<ParkNaam title={"Park zkt. naam"}/>}/>
            <Route path={'/project/mortselhelpt'} element={<MortselHelpt title={"Mortsel helpt"}/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
