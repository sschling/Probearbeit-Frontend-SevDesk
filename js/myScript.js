/* Probearbeit Frontend, Saskia Schlingensief*/
function deleteInp(inpE1){
    inpE1.value = "";
    return true;
}   


/*************** Get the information on different currencies *********************/
let url1 = "https://blockchain.info/ticker";
let request1 = new XMLHttpRequest();
request1.open('GET', url1);
request1.responseType = 'text';

request1.onload = function() {
  var obj = JSON.parse(request1.response);
  for( let prop in obj ){
    if(prop == "EUR"){
      value = obj[prop];
      for(let i in value){
        if(i == "sell"){
           verkauf_eu.textContent = "Verkaufspreis: " + value[i];
        }
        if(i == "buy"){
          einkauf_eu.textContent = "Einkaufspreis: " + value[i];
        }
      }
    }
    if(prop == "USD"){
       value = obj[prop];
      for(let i in value){
        if(i == "sell"){
          verkauf_usd.textContent = "Verkaufspreis: " + value[i];
        }
        if(i == "buy"){
          einkauf_usd.textContent = "Einkaufspreis: " + value[i];
        }
      }
    }
    if(prop == "AUD"){
      value = obj[prop];
      for(let i in value){
        if(i == "sell"){
          verkauf_aud.textContent = "Verkaufspreis: " + value[i];
        }
        if(i == "buy"){
          einkauf_aud.textContent = "Einkaufspreis: " + value[i];
        }
      }
    }
    if(prop == "RUB"){
      value = obj[prop];
      for(let i in value){
        if(i == "sell"){
          verkauf_rub.textContent = "Verkaufspreis: " + value[i];
        }
        if(i == "buy"){
          einkauf_rub.textContent = "Einkaufspreis: " + value[i];
        }
      }
    }
  }
  //bitcoinData.textContent = request1.response;
};
console.log(request1.responseText)
request1.send();

/*************** Get the information on stats *********************/
let url2 = "https://api.blockchain.info/stats"
let request2 = new XMLHttpRequest();
request2.open('GET', url2);
request2.responseType = 'text';
request2.onload = function() {
  var data = JSON.parse(request2.response);
  for( let key in data ){
    if(key == "marketcap"){
      kapitalisierung.textContent = data[key];
    }
    if(key == "totalbc"){
      umlauf.textContent = data[key]
    }
    if(key == "24hrtransactioncount"){
      transaktionen.textContent = data[key];
    }
    if(key == "24hrbtcsent"){
      gesendet.textContent = data[key];
    }
    if(key == "hash_rate"){
      hashrate.textContent = data[key];
    }
    if(key == "difficulty"){
      difficulty.textContent = data[key];
    }
  }
}
console.log(request2.responseText);
request2.send();


/*************** Get the information on info/q/marketcap *********************/
let url3 = "https://api.blockchain.info/q/marketcap";
let request3 = new XMLHttpRequest();
request3.open('GET', url3);
request3.responseType = 'text';
request3.onload = function() {
  kapitalisierung.textContent = request3.response;
}
console.log(request3.responseText)
request3.send()

/*************** Get the information on info/q/24hrtransactioncount *********************/
let url4 = "https://api.blockchain.info/q/24hrtransactioncount";
let request4 = new XMLHttpRequest();
request4.open('GET', url4);
request4.responseType = 'text';
request4.onload = function() {
  transaktionen.textContent = request4.response;
}
console.log(request4.responseText)
request4.send()

/*************** Get the information on info/q/24hrbtcsent *********************/
let url5 = "https://api.blockchain.info/q/24hrbtcsent";
let request5 = new XMLHttpRequest();
request5.open('GET', url5);
request5.responseType = 'text';
request5.onload = function() {
  gesendet.textContent = request5.response;
}
console.log(request5.responseText)
request5.send()

/********************************************* Bitcoin Umrechnung ****************************************/

/*************** Get the value of bitcoins for 25 Euros *********************/
let url6 = "https://blockchain.info/tobtc?currency=EUR&value=25";
let request6 = new XMLHttpRequest();
request6.open('GET', url6);
request6.responseType = 'text';
request6.onload = function() {
  betrag_25.textContent = request6.response;
}
console.log(request6.responseText)
request6.send()

/*************** Get the value of bitcoins for 100 Euros *********************/
let url7 = "https://blockchain.info/tobtc?currency=EUR&value=100";
let request7 = new XMLHttpRequest();
request7.open('GET', url7);
request7.responseType = 'text';
request7.onload = function() {
  betrag_100.textContent = request7.response;
}
console.log(request7.responseText)
request7.send()

/*************** Get the value of bitcoins for 2000 Euros *********************/
let url8 = "https://blockchain.info/tobtc?currency=EUR&value=2000";
let request8 = new XMLHttpRequest();
request8.open('GET', url8);
request8.responseType = 'text';
request8.onload = function() {
  betrag_2000.textContent = request8.response;
}
console.log(request8.responseText)
request8.send()

/*************** Get the value of bitcoins for 50000 Euros *********************/
let url9 = "https://blockchain.info/tobtc?currency=EUR&value=50000";
let request9 = new XMLHttpRequest();
request9.open('GET', url9);
request9.responseType = 'text';
request9.onload = function() {
  betrag_50000.textContent = request9.response;
}
console.log(request9.responseText)
request9.send()

/*****************************************************************************************************************/

