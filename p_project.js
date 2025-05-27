let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"You have power over your mind — not outside events. Realize this, and you will find strength."-Marcus Aurelius ',
    '"Its not what happens to you, but how you react to it that matters."-Epictetus ',
    '"We suffer more often in imagination than in reality." - Seneca',
    '"Waste no more time arguing what a good man should be. Be one."-Marcus Aurelius',
    '"Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control." - Epictetus ',
    '"He who is brave is free." - Seneca',
    '"The impediment to action advances action. What stands in the way becomes the way." -  Marcus Aurelius',
    '"Difficulties show a persons character. So when trouble comes, think of yourself as a wrestler whom God, like a trainer, has paired with a tough young buck." - Epictetus',
    '"Begin at once to live, and count each separate day as a separate life." - Seneca',
    '"You could leave life right now. Let that determine what you do and say and think." -  Marcus Aurelius'
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
