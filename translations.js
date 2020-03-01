const en = i18n.create();

const ru = i18n.create({
    values: {
        "You wake up in a strange room dark and cold, wondering where you could be, upon looking around the room you see a vile of blue liquid.":
        `Вы просыпаетесь в незнакомой комнате, темной и холодной,
        размышляя, где вы могли бы быть, осматривая комнату, 
        вы видите мерзкую синюю жидкость.`,

        "Take the liquid?": "Взять жидкость?",

        "Leave the liquid behind?": "Не брать жидкость с собой?",

        "You venture forth in search of answers to where you are when you come across a merchant.":
        "Вы до сих пор в недоумении, где находитесь, но встречаете тоговца.",

        "Would you like to trade the vile of blue liquid to eh merchant for an axe?":
        "Хотите обменять флакон с синий жидкостью на топор?",

        "Would you like to trade the vile of blue liquid to eh merchant for an shield?":
        "Хотите обменять флакон с синий жидкостью на щит?",

        "Ignore the merchant": "Пропустить тоговца"
    }
});

const languages = { en, ru };

let currentLanguage = 'en';

if (languages[navigator.language]) {
    currentLanguage = navigator.language;
}

function _(...args) {
    return languages[currentLanguage](...args);
}

document.querySelectorAll('.languages span').forEach(el => {
    el.onclick = () => {
        console.log('click', el.innerText);
        currentLanguage = el.innerText.trim();
        showTextNode(currentTextNode);
    };
});
