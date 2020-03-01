const en = i18n.create();

const ru = i18n.create({
    values: {
        "You wake up in a strange room dark and cold, wondering where you could be, upon looking around the room you see a vile of blue liquid.":
        "Вы просыпаетесь в незнакомой комнате, темной и холодной, размышляя, где вы могли бы быть, осматривая комнату, вы видите мерзкую синюю жидкость.",

        "Take the liquid?":
        "Взять жидкость?",

        "Leave the liquid behind?":
        "Не брать жидкость с собой?",

        "You venture forth in search of answers to where you are when you come across a merchant.":
        "Вы до сих пор в недоумении, где находитесь, но встречаете тоговца.",

        "Would you like to trade the vile of blue liquid to eh merchant for an axe?":
        "Хотите обменять флакон с синей жидкостью на топор?",

        "Would you like to trade the vile of blue liquid to eh merchant for an shield?":
        "Хотите обменять флакон с синей жидкостью на щит?",

        "Ignore the merchant":
        "Пропустить тоговца",

        "After leaving the merchant you notice that the sun is beginning to set and the temperature outside is dropping fast, just off the horizon you notice what looks to be a small town next to a dangerouse looking compund.":
        "Покинув торговца, вы замечаете, что солнце начинает садиться и температура на улице быстро падает, сразу за горизонтом вы замечаете то, что выглядит как маленький городок рядом с замком, который выглядит опасным.",

        "Explore the compound?":
        "Исследовать замок?",

        "Find a room to sleep at in town?":
        "Найти комнату для сна в городе?",

        "Find some hay in a stable to sleep in?":
        "Найти сено в конюшне для сна?",

        "You are so tired that you fall asleep while exploring the compund, in doing so you are captured by a band of muraders who steal all you supplies and force you to work for them.":
        "Вы так устали, что засыпаете во время исследования замка, при этом вас захватывает группа мародеров, которые крадут все ваши запасы и заставляют вас работать на них.",

        "Restart":
        "Начать заново",

        "Without any money to pay for a room in town you are swiftly thrown into jail for attempting to defraud a local merchant.":
        "Без денег, чтобы заплатить за комнату в городе, вы быстро брошены в тюрьму за попытку обмануть местного торговца.",

        "After a night of good sleep in the stables near the edge of town, you feel up to exploring the compound.":
        "После ночи хорошего сна в конюшнях на окраине города вы можете осмотреть замок.",

        "Go explore the compound?":
        "Исследовать замок?",

        "Continue on your journey, without exploring the castle?":
        "Продолжить путешествие, не исследуя замок?",

        "While exploring the compound, you are confronted by a band of raiders who run this town, they confront you and demand that you give up all of your supplies and join them in robbing travelers who pass through the town.":
        "Во время исследования замка вы сталкиваетесь с группой рейдеров, которые управляют этим городом, они противостоят вам и требуют, чтобы вы отказались от всех ваших припасов и присоединились к ним в ограблении путешественников, которые проходят через город.",

        "Try to run?":
        "Попробовать убежать?",

        "Attack the group with your axe?":
        "Атаковать с помощью топора?",

        "Jump out of the second story window and take your chances?":
        "Выпрыгнуть из окна второго этажа и рискнуть?",

        "You continue on your journey without exploring the compound, on your way out of town you meet another traveler also on her way out of town, she asks if you would like to team up for strangth in numbers along the way.":
        "Вы продолжаете свое путешествие, не исследуя замок, по пути из города вы встречаете другого путешественника, также по пути из города, она спрашивает, не хотите ли вы объединить усилия для увеличения численности по пути.",

        "Join forces with your fellow traveler?":
        "Объединить свои силы с попутчиком?",

        "ignore the fellow traveler and continue on your way?":
        "игнорировать попутчика и продолжить свой путь?",

        "When you try to run, one of the raiders attacks you from behind.":
        "Когда вы пытаетесь бежать, один из рейдеров атакует вас сзади.",

        "You are horribly outnumbered and are quickly captured.":
        "Вы в меньшинстве из-за чего попадаете в плен.",

        "After jumping out the window you break your leg and are quickly captured.":
        "Выпрыгнув в окно, вы ломаете ногу и попадете в плен.",

        "You are so tired that you fall asleep while exploring the compund, in doing so you are captured by a band of muraders who steal all you supplies and force you to work for them.":
        "Вы так устали, что засыпаете во время исследования замка, при этом вас захватывает группа мародеров, которые крадут все ваши запасы и заставляют вас работать на них.",

        "It turns out that your fellow traveler has a wagon with horses, you both continue on your journey together and ride off into the sunset.":
        "Оказывается, у вашего попутчика есть повозка с лошадьми, вы оба продолжаете совместное путешествие и уезжаете в закат.",

        "You Win! You get by with a little help from your friends! Play Again?":
        "Ты победил! Вы получаете с небольшой помощью от ваших друзей! Играть снова?",

        "You tell the traveler no thank you, wish them well in their journey and continue on yours alone.":
        "Вы говорите путешественнику: «Нет, спасибо», желаете им успехов в пути и продолжайте в одиночестве.",

        "You Lose! You get by with a little help from your friends! Play Again?":
        "Ты проиграл! Вы получаете с небольшой помощью от ваших друзей! Играть снова?",
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
        currentLanguage = el.innerText.trim();
        showTextNode(currentTextNode);
    };
});
