import Resultfetchlist from "./Resultfetchlist";
import './Resultpro.css';

export default function Resultpro() {
    return (
        <div className="outer">
            <div className="cantion">
                <div className="col1">
                    <Resultfetchlist></Resultfetchlist>
                </div>
                <div className="col2">
                    <div className="col2_row1" >
                        {/* <div className="col2_row1_col1"> */}
                            <label>Result Number</label>
                            <label>Raffle ID</label>
                        {/* </div> */}
                    </div>
                    <div className="col2_row2">
                        <input type="text" placeholder="Number"/>
                        <input type="text" placeholder="ID"/>
                    </div>
                </div>
            </div>
            <div className="save">
                <button>Save</button>
            </div>

        </div>
    )
}
