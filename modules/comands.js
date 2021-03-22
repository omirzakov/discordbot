function getComands(message) {


    message.reply(`
        Получить актуальную погоду : !погода \n
        Актуальная фотография : !фото
    `);
}

module.exports.getComands = getComands;