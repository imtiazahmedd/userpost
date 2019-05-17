import axios from 'axios'

export const postRecord = ((token, URL, params)=>{
    return new Promise((resolve, reject) => {
        let header = []
        if(token){
            header = {
                Authorization: 'Bearer ' + token,
            };
        }else{
            header = {
                Authorization: 'null',
            };
        }
        try{
            axios({
                method: 'POST',
                 url: URL,
                  headers: {Authorization : header.Authorization},
                   data: params,
                 })
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    if((error && error.response && error.response.data) && (error.response.data.statusCode === 403 || error.response.data.statusCode === 401) ) {
                        console.log(error)
                    }
                    reject(error)
                })
                .finally(()=>{
                    // loaderPubSub.publish();
                });
        } catch(err){
        }
    })
})
