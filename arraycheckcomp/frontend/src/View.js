function View({array}) {
    return<>
        {array.map((itm, indx) => {
            return <> <label>{JSON.stringify(itm)}</label></>

        })}

<br />
        Selected Items
        <br />
        {array.map((itm, indx) => {
            return <><label>{itm.ischecked ? itm.name : ""}</label><br /></>
        })}

Selected Items2
        <br />
        {array.map((itm, indx) => {
            return  <>{itm.ischecked?<label>{itm.name}<br /></label>:""} </>
        })}
    </>
}
export default View;