import BootstrapCarousel from './zz';
import Dd from './dd';

import {BrowserRouter,Route,Routes} from "react-router-dom";

function Navigation(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<BootstrapCarousel/>}></Route>
                    <Route path = "/dd" element = {<Dd/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
};
export default Navigation;
