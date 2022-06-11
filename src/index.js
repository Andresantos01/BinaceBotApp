let {ApiBinance} = require('./services/api')
setInterval( async ()=>{
    const apibinance = new ApiBinance()
    const resultApi = await apibinance.time()
    //return console.log(resultApi)

    const depth = await apibinance.depth()
    return console.log(depth)
    
}, process.env.CRAWLER_INTERVAL)