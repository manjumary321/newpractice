import "./listarray1.css";
export default function list(){

    const array = [
        ["Name", "Subject", "Marks","hjhk"],
        ["ABC", "Arts", 80,90],
        ["XYZ", "Science", "70",89],
    ]
    
    return (
        <div className="list">

            <table className="list_table" >

               
                {array[0].map((item, index) => {
                    return (
                        <>
                         <thead>
                    <tr className="list_table_row1" key={index}>
                        <th className="list_table_row1_clm1">{item}</th>
                        {/* <th className="list_table_row1_clm2">{label2}</th>
                        <th>{label3}</th>
                        <th className="list_table_row1_clm4">{label4}</th> */}
                    </tr>
                    </thead>
                    </>
                    );
                })}
                
                {array.slice(1, array.length).map((item, index) => {
                    return (
                        <>
                            <tbody key={index}>
                                <tr>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td><span>{item[4]}</span></td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}

            </table>

        </div>
    );
}