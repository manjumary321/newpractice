import './ResultUpdate11.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function ResultUpdate() {
    const [Lotprores, setLotprores] = useState([]);
    const [Result, setResult] = useState('');

    const [ResultUpdate, setResultUpdate] = ([]);

    const [Firstnumber, setFirstnumber] = useState('');
    const [RaffleId, setRaffleId] = useState('');


    const handleChangeResult = (e) => {     //resigter
        console.log(e.target.value)
        setFirstnumber(e.target.value)
    }
    const handleChangeRaffleId = (e) => {     //resigter
        console.log(e.target.value)
        setRaffleId(e.target.value)
    }


    useEffect(() => {
        let url = "http://localhost:8080/Lotteryprovdresultfetch";
        let request = {};
        let header = {};
        axios.post(url, request, header).then((res) => {
            console.log("Provideresult", res.data)

            setLotprores(res.data)
        }).catch();
    }, [])

   
    const handleClickUpdate = (e) => {          // axios resigter 
        e.preventDefault();
        // setResultUpdate(id)

        if (Result !== 0) {

            const url = 'http://localhost:8080/ResultNumberInsert';
            const req = '{ "first": "' + Firstnumber + '"}';
            const header = {};

            axios.post(url, req, header)
                .then((res) => {
                    if (res.data.length !== 0) {
                        console.log("insert number")
                    }
                    else {
                        alert("error insert number");
                    }
                })


        }
        // else {
            if (RaffleId !== 0) {

                const url = 'http://localhost:8080/RaffleIdInsert';
                const req = '{ "raffleId": "' + RaffleId + '"}';
                const header = {};

                axios.post(url, req, header)
                    .then((res) => {
                        if (res.data.length !== 0) {
                            console.log("insert id")
                        }
                        else {
                            alert("error insert id");
                        }
                    })


            }
        // }
    }

    return (
        <div className="Resupdate_outer">
            <div className="resupdate_container">
                <div className="resupdate_conttable">
                    <div className="resupdate_row_header1">

                        <div className="resupdate_hcol"><label>Provider Name</label></div>
                        <div className="resupdate_hcol"><label>Lottery Name</label></div>
                        <div className="resupdate_hcol"><label>Draw Date</label></div>
                        <div className="resupdate_hcol"><label>Result No:</label></div>
                        <div className="resupdate_hcol"><label>Raffle ID</label></div>

                    </div>

                    <div className="resupdate_row_test2" >
                        {Lotprores.map((itm, indx) => {
                            return <>
                                <div className="fetch" >
                                    <div className="resupdate_col_fetch" >
                                        <label>{itm.Providername}</label>
                                        <label>{itm.Lotteryname}</label>
                                        <label>{itm.DrawDate}</label>
                                        <input onChange={(e) => { handleChangeResult(e) }} values={Firstnumber} type="text" placeholder="Number" />
                                        <input onChange={(e) => { handleChangeRaffleId(e) }} values={RaffleId} type="text" placeholder="ID" />
                                    </div>


                                    {/* <div className="resupdate_col_fetch"></div>
                                        <div className="resupdate_col_fetch"></div> */}

                                </div>
                            </>
                        })}

                        {/* <div className="resupdate_col">
                            <div className="resupdate_col_result">
                                <input type="text" placeholder="1" />
                                <input type="text" placeholder="2" />
                                <input type="text" placeholder="3" />
                                <input type="text" placeholder="4" />
                                <input type="text" placeholder="5" />
                            </div>
                        </div> */}
                        {/* <div className="resupdate_col"><input type="text" placeholder="id" /></div> */}

                    </div>
                </div>
                <div className="resupdate_row_button"><button onClick={(e) => {handleClickUpdate(e)}} >Update</button></div>
            </div>



        </div>
    )
}