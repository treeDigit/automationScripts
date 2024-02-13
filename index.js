const axios = require("axios")
const {sendMail} = require("./mail")
require("dotenv").config()


const urls = process.env.URLS.split(",")

async function checkAPI(){
    for(let itr = 0; itr < urls.length ;itr++){
        await axios.get(urls[itr]).then((res)=>{
            console.log(res.status,urls.length)
        }).catch((e)=>{
            console.log(urls[itr])
            sendMail(urls[itr], e)
        })
    }
}

setInterval(checkAPI,3600000)

//checkAPI()