import "./Arraypost.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Arraypost() {

    const [array, setArrayFunc] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8080/Unitsold'
        const request = {}
        const header = {}

        axios.post(url, request, header)

            .then((response) => {

                if (response.data.length !== 0) {
                    console.log(response.data)
                    setArrayFunc(response.data)
                    

                }
                else {
                    alert("error result record");
                }
            })
            .catch((error) => {
                console.log(error)
            })
        // alert(temp)
    }, [])    // <- add empty brackets here

    return (
        <>
            <div className="Lotterylist">
                <table>
                    
                    <thead>
                        <tr className="lottlist_tbl_row1">
                            <th className="lottlist_tbl_row1_col1">Lottery</th>
                            <th className="lottlist_tbl_row1_col2">Draw Date</th>
                            <th className="lottlist_tbl_row1_col3">Unit Sold</th>
                        </tr>
                    </thead>
                    {array.map((item, indx) =>{
                        return(
                    <tbody  key={indx}>
                            <tr className="lottlist_tbl_row2">
                            <td>{item.Lotterymaster}</td>
                            <td>{item.DrawDate}</td>
                            <td>{item.Unitsold}</td>
                        </tr>
                       </tbody>
                       )
                    } 
                        

                    )}

                </table>
                
            </div>

        </>
    )
}