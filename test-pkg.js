const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

var a = lorem.generateWords(1);
var b = lorem.generateSentences(5);
var c = lorem.generateParagraphs(7);

debugger
