const fortunes = [
    'Someone will find your trust very beneficial.',
    'Sometimes the long road gives the most success.',
    'Enjoy what you have now, it\'s not here forever.',
    'You cannot trust everyone you meet.',
    'If your lost, keep moving. Even an egg starts to walk.'     
];

const verbs = [
    'Accept',
    'Join',
    'Manage',
    'Organize',
    'Program'
];

const nouns = [
    'Steve',
    'Robert',
    'Jimmy',
    'Timmy',
    'Nick'
];

const inspiringPhrases = [
    'Happiness is not by chance, but by choice.',
    'You are stronger than you think.',
    'Done is better than perfect.',
    'No one but ourselves can free our minds.',
    'Perfection is not attainable, but if we chase perfection, we can catch excellence.'
];

const getRandomNumber = num => {
    
    return Math.floor((Math.random() * num));
};

const generateMessages = () => {
    let messagesArray = [];

    messagesArray.push(fortunes[getRandomNumber(fortunes.length)]);
    messagesArray.push(inspiringPhrases[getRandomNumber(inspiringPhrases.length)]);
    messagesArray.push(`After a long talk, ${nouns[getRandomNumber(nouns.length)]} decided to ${verbs[getRandomNumber(verbs.length)]} CodeCademy!`);

    return messagesArray;
};

let messages = generateMessages();

for (i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}