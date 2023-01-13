import "./Resultfetch1.css";
export default function List({ label1, label2, label3,label4, array }) {
    return (
        <div className="list">
            <table className="list_table">
                <tr className="list_table_row1">
                    <th className="list_table_row1_clm1">{label1}</th>
                    <th className="list_table_row1_clm2">{label2}</th>
                    <th className="list_table_row1_clm4">{label3}</th>
                    
                </tr>
                {array.map((item, index) => {
                    return (
                        <>
                            <tr>
                                <td>{item.Providername}</td>
                                <td>{item.Lotteryname}</td>
                                <td>{item.DrawDate}</td>
                               
                                
                               
                            </tr>
                        </>
                    );
                })}

            </table>
        </div>
    );
}