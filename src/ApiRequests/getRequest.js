import axios from 'axios'


export const getRecord = ((token, URL)=>{
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
                method: 'GET',
                 url: URL,
                  headers: {Authorization : header.Authorization},
                 })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
                .finally(()=>{

                });
        } catch(err){
        }
    })
})
