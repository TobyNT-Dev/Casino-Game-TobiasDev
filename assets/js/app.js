let walletHtml = document.getElementById('wallet')
let walletCoins = 0

//auto printer Related Variables
let printerAmount = 13
let printerPrice = 1000
let coinSwitch = false
let killSwitch = true
let printersInTotal = 0

//manual printer function
let manualClickAmount = 5
let manualUpgradePrice = 100

//print button click function
function earnCoins() {
    walletCoins = walletCoins + manualClickAmount
    walletHtml.innerHTML = "$" + walletCoins
    //add and remove coin (onclick)
    const divCoin = document.createElement("div")
    let randomNumber = Math.floor((Math.random() * 88) + 4);
    divCoin.style.left = randomNumber + "%"
    divCoin.innerHTML = "$"
    divCoin.classList.add("animatedCoin")
    document.getElementById('coinBox').appendChild(divCoin)
    setTimeout( () => {
        divCoin.remove();
    }, 3000)
}

//auto printer auto click function
function printerProfit() {
    walletCoins = walletCoins + printerAmount
    walletHtml.innerHTML = "$" + walletCoins
    //add and remove coin
    if (coinSwitch === true && killSwitch === true) {
        const divCoin = document.createElement("div")
        let randomNumber = Math.floor((Math.random() * 88) + 4);
        divCoin.style.left = randomNumber + "%"
        divCoin.innerHTML = "$"
        divCoin.classList.add("animatedCoin")
        document.getElementById('coinBox').appendChild(divCoin)
        setTimeout( () => {
            divCoin.remove();
        }, 3000)
    }
}

//auto printer purchase function (onclick)
function buyPrinter() {
    if (walletCoins >= printerPrice) {
        if (printersInTotal <= 5) {
            printersInTotal++
            coinSwitch = true
            walletCoins = walletCoins - printerPrice
            walletHtml.innerHTML = "$" + walletCoins
            printerPrice = printerPrice + 1000
            document.getElementById('autoPrinterButton').innerHTML = "$" + printerPrice
            setInterval( () => {
                printerProfit()
            }, 100)
        }
    }
    if (printersInTotal >= 5) {
        document.getElementById('autoPrinterButton').innerHTML = "MAX" 
    }
}

//upgrade manual printer function
function upgradePrinter() {
    if (walletCoins >= manualUpgradePrice) {
        walletCoins = walletCoins - manualUpgradePrice
        manualUpgradePrice = manualUpgradePrice + 100
        manualClickAmount = manualClickAmount + 5
        walletHtml.innerHTML = "$" + walletCoins
        document.getElementById('upgradeButton').innerHTML = "$" + manualUpgradePrice;
    }
}
function autoCoinFall() {
    if (killSwitch === false) {
        killSwitch = true
        document.getElementById('killSwitchButton').innerHTML = "ON"
    }
    if (killSwitch === true) {
        killSwitch = false
        document.getElementById('killSwitchButton').innerHTML = "OFF"
    }
}