function run() {
    let BTC = parseFloat(document.querySelectorAll('li.total strong')[0].innerText.replace(/[BTC ,]/g,''));
    let dollar = parseFloat(document.querySelectorAll('li.total strong')[1].innerText.replace(/[$,]/g, ''));
    let BTCPrice = dollar / BTC;
    let first = true;
    let coins = document.querySelectorAll('.accountInfo-lists .items.f-cb');

    if (coins.length < 5) {
        setTimeout(run, 500);
        return;
    }

    ;[].forEach.call(coins, x => {
        if (first) {
            first = false;
            x.querySelector('.equalValue').innerText = '$ - BTC';
            return;
        }

        console.log(parseFloat(x.querySelector('.equalValue').innerText));
        let btc = parseFloat(x.querySelector('.equalValue').innerText);
        x.querySelector('.equalValue').innerHTML = '<strong>$' + Math.round(btc * BTCPrice) + '</strong>&nbsp;-&nbsp;' + btc;
    })
}

run();
