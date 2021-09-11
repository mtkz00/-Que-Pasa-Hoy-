
fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)

.then(response => response.json())
.then(data => btcData(data))

const btcData = data => {
    console.log(data);
    const infobtc = {
        preciousd: data.bpi.USD.rate,
        precioeur: data.bpi.EUR.rate,
        preciogbp: data.bpi.GBP.rate,
    }
    Object.keys(infobtc).forEach( key =>{
        document.getElementById(key).textContent = infobtc[key]
    })
}
