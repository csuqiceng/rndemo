// 网络请求

async function fetchData(url, param,token, callback){
    await fetch(url,param)
        .then((response) => response.json())
        .then((responseData) => {
            if (responseData.errno ==0){
                if (typeof callback =='function'){
                    callback(responseData)
                }
            }else {
                alert(responseData.errmsg)
            }
        })
        .catch(error => console.error('Error:', error))
        .done()

}

export default fetchData;
