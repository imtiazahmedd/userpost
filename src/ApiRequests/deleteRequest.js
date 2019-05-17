import axios from 'axios'

export const deleteRecord = ((token, URL, params)=>{
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
                method: 'DELETE',
                 url: URL,
                  headers: {Authorization : header.Authorization},
                   data: params,
                 })
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    if((error && error.response && error.response.data)
                        && (error.response.data.statusCode === 403
                        || error.response.data.statusCode === 401) ) {
                    }
                    reject(error)
                })
                .finally(()=>{
                });
        } catch(err){
        }
    })
})
