function Example1(){

    function logUser(username, password){
        return new Promise((resolve, reject) => {
            let response = 'user logged in'
            resolve(response)
        })
    }
    
    function showMessage(msg){
        console.log(msg)
    }
    
    logUser('user', 'pass').then((respFromLogUser) => {
        showMessage(respFromLogUser)
    })
    return(
        <div></div>
    )
}
export default Example1;