
import "./Resultfetch.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
export default function Resultfetch() {
  const [Lotprores, setLotprores] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:8080/Lotteryprovdresultfetch';
    let request = {};
    let header = {};
    axios.post(url, request, header).then((res) => {
      console.log("Provideresult", res.data)

      setLotprores(res.data)
    }).catch();
  }, [])

  return (
    // <div className="outer">
    //   <div className="containter">
    //     <table>
    //       <thead>
    //         <tr className="row1">
    //           <th className="row1_col1"><label>Provider Name</label></th>
    //           <th className="row1_col2"><label>Lottery Name</label></th>
    //           <th className="row1_col3"><label>Draw Date</label></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr className="row2">
    //           {Lotprores.map((itm, indx) => {
    //             return <>
    //               <td className="row2_col"><label>{itm.Providername}</label></td>
    //               <td className="row2_col"><label>{itm.Lotteryname}</label></td>
    //               <td className="row2_col2"><label>{itm.DrawDate}</label></td>
    //             </>
    //           })}
    //         </tr><br/>
    //       </tbody>
    //     </table>

    //   </div>
    // </div>
    // ===========================================
    // ======================================


    <div className="outer">
      <div className="containter">
        <table>
         
            <tr className="row1">
              <th className="row1_col1"><label>Provider Name</label></th>
              <th className="row1_col2"><label>Lottery Name</label></th>
              <th className="row1_col3"><label>Draw Date</label></th>
            </tr>
          
            <tr className="row2">
              {Lotprores.map((itm, indx) => {
                return <>
                  <td className="row2_col"><label>{itm.Providername}</label></td>
                  <td className="row2_col"><label>{itm.Lotteryname}</label></td>
                  <td className="row2_col2"><label>{itm.DrawDate}</label></td>
                </>
              })}
            </tr>
         
        </table>

      </div>
    </div>
  );
}


