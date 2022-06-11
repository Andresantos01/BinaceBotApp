const axios = require('axios')
class ApiBinance
{
   
    constructor(){}

    async #publicCall(path,data, method = 'GET')
    {
        try {
            const queryString = data ? `?${JSON.stringify(data)}` : ''
            const result = await axios
            ({
                method,
                url: `${process.env.API_URL}${path}${queryString}`
            })
            return result.data
        } catch (error) {
            console.error(error)
        }
    }

    async time()
    {
        return this.#publicCall('/v3/time')
    }
}

module.exports = ApiBinance