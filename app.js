// url for cyptodata https://api.coingecko.com/api/v3/coins/bitcoin
// url for charts https://api.coingecko.com/api/v3/coins/polkadot/market_chart?vs_currency=inr&days=180


const cryptName = document.querySelectorAll(".currency-name select");
const displayName = document.querySelector(".displayName");
const Market_Cap_24Hrs = document.querySelector(".card-body p");
const price = document.querySelector(".price")

const URL = "https://api.coingecko.com/api/v3/coins/";


for(let select of cryptName){
    select.addEventListener("change", ()=> {
        // console.log(select.value);
        var value = select.options[select.selectedIndex].value;
        var text = select.options[select.selectedIndex].text;
        // console.log(value)
        updateChange(value)
    })
}


const updateChange = async (value) => {
    // console.log(value)

    let BaseURL = `${URL}${value}`;
    let response = await fetch(BaseURL);
    let data = await response.json();
    // console.log(data.symbol)
    changeValues(data);
}

const changeValues = (data) => {
    displayName.innerHTML = data.id;
    Market_Cap_24Hrs.innerHTML = data.market_data.market_cap_change_percentage_24h;
    price.innerHTML = data.market_data.current_price["usd"];
    // console.log(data.market_data.market_cap_change_percentage_24h)
}


