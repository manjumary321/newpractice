import axios from 'axios';
import { useEffect, useState } from 'react';
import Resultfetch1 from './Resultfetch1'
export default function Resultfetchlist(){
   
    const [Lotprores, setLotprores] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/Lotteryprovdresultfetch";
        const request = {}
        const header = {}

        axios.post(url, request, header)

            .then((response) => {

                if (response.data.length !== 0) {
                    console.log(response.data)
                    setLotprores(response.data)
                    

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

return(
    <>
     <Resultfetch1  label1={"Providername"} label2={"Lotteryname"} label3={"DrawDate"} array={Lotprores}/>

    </>
)


}