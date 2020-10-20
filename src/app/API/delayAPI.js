const { delay } = require("../Common/utils/utils")
const { default: sampleData } = require("./API")

const fetchSimpleData = () =>{
    return delay(1000).then(()=>{
        return Promise.resolve(sampleData)
    })
}
export default fetchSimpleData;