import EasterEggs from "./components/EasterEggs";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Content from './components/Content';

const App = ({routeMap}) => {
    EasterEggs();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Content homepage="true"/>}/>
                {routeMap.map(({route, id, type}) => {
                    return (
                        <Route key={id} path={route} element={<Content id={id} type={type} homepage="false"/>}/>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
