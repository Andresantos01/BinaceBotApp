let {ApiBinance} = require('./services/api')
class App extends ApiBinance
{
  constructor(){super()}
    MomentsBuyOrSell()
    {
        setInterval(async ()=>{
            const depth = await this.depth()
            console.log(`Highest Buy: ${depth.bids[0][0]}`)
            console.log(`Lowest Sell: ${depth.asks[0][0]}`)
        }, process.env.CRAWLER_INTERVAL)  
    }
}

const app = new App()
app.MomentsBuyOrSell()