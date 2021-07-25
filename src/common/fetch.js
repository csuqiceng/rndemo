// 网络请求

async function fetchData(url, param, callback){
    await fetch(url,param)
        .then((response) =>{
            if (response.ok){
               return  response.json()
            }else{
                throw new Error('something went wrong!')
            }
        })
        .then((responseData) => {
            if (responseData.errno ==0){
                if (typeof callback =='function'){
                    callback(responseData)
                }
            }else {
                alert(responseData.errmsg)
            }
        })
        .catch(error => {
            // console.error('Error:', error)
            console.log(error)
        })
        .done()

}

export {fetchData};
