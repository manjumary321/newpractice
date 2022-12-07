import "./listarray.css";
// import React, { useState } from 'react';
export default function list(value1,value2,value3,value4){


    // let array =[
    //     ["Corn", "Potato", "Radish"],
    //     ["Tomato", "Graphes", "Mango"],
    // ];
    // const [array, setArray] = useState(
       
        const array =
                                        // ["val11", "val22", "val32","val42" ],
                                        // ["val11", "val22", "val32","val42" ] 
               [{"value1" :" nmm",
                "value2" : 30,
                "value3" : 608090,
                "value4" : "hjhk"},
                {"value1" :" skdm",
                "value2" : 20,
                "value3" : 323090,
                "value4" : "dsdhk"},
]
    
       
        // { label1: "bread", value1: 50,label2: "ddsd", value2: 50,label3: "sds", value3: 50,label4: "sdf", value4: 50},
        // { label1:"bread", value1: 230,label2: "ddsd", value2: 5230,label3:  "sds", value3: 5210,label4:"sdf", value4: 330},


        
        // { "lab1": "val12", "lab2": "val23", "lab3": "val33", "lab4": "val43" },
        // {"lab1":"val13","lab2":"val24","lab3":"val34","lab4":"val44"},
    //     {"lab1":"val14","lab2":"val25","lab3":"val35","lab4":"val45"}
    
    
  return (
        <div className="list">

            <table className="list_table" >

                <thead>
                    <tr className="list_table_row1">
                        <th className="list_table_row1_clm1">name</th>
                        <th className="list_table_row1_clm2">age</th>
                        <th>phone</th>
                        <th className="list_table_row1_clm4">email</th>
                    </tr>
                </thead>
                {array.map((item, index) => {
                    return (
                        <>
                            <tbody key={index}>
                                <tr>
                                    <td>{item.value1}</td>
                                    <td>{item.value2}</td>
                                    <td>{item.value3}</td>
                                    <td><span>{item.value4}</span></td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}

            </table>

        </div>
    );
}