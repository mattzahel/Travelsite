const daily = document.getElementById('daily');
const monthly = document.getElementById('monthly');

dailyOffers = document.getElementById('offers-daily');
monthlyOffers = document.getElementById('offers-monthly');

daily.addEventListener('click', toggle);
monthly.addEventListener('click', toggle);

function toggle() {
    if(daily.checked) {
        monthlyOffers.style.display = "none";
        dailyOffers.style.display = "grid";
    } else {
        monthlyOffers.style.display = "grid";
        dailyOffers.style.display = "none";
    }
}
