const { default: fetch } = require("node-fetch");
const { WEATHERAPI } = require("../token");



function getTemp(message) {
    message.reply('Загрузка...');
    const weatherParams = new URLSearchParams({
        q: 'Алматы',
        appid: WEATHERAPI
    });

    fetch(`http://api.openweathermap.org/data/2.5/weather?${weatherParams}`)
        .then(res => res.json())
        .then(data => {
            const temp = data.main.temp - 273;
            message.reply(`Сейчас в городе: ${Math.floor(temp)} градусов`);
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports.getTemp = getTemp