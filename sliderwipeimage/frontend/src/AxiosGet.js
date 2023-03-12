import axios from "axios";
import { useEffect ,useState} from "react";

export default function Axiosget() {
    const [data,setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((res) => {
                console.log("Getting from::",res.data);
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const arr=data.map((data,index) => {
        return(
            <tr>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                </tr>

        )
    })
    return (
        <div className="get">
            <h1>Lets use Axios with Reacj Js</h1>



            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                
              {arr} 
                
            </table>

        </div>
    )
}