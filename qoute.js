var quote=[
    '"The man who does not read books has no advantage over the one who cannot read them"',
    '“Education is the passport to the future, for tomorrow belongs to those who prepare for it today”',
    '“Teachers can open the door, but you must enter it yourself”',
    '“The beautiful thing about learning is that no one can take it away from you”',
    '“Education is the most powerful weapon you can use to change the world”',
    '“The mind is not a vessel to be filled but a fire to be ignited”',
    '“Don\'t let what you cannot do interfere with what you can do”',
    '“A person who never made a mistake never tried anything new"'
]

function newQuote(){
    var randomNum=Math.floor(Math.random()* quote.length);
    document.getElementById('quoteDisplay').innerHTML=quote[randomNum];
}

var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
  greet = 'Good Morning 🌥️';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon 🌞';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening 🌃';
document.getElementById('greetings').innerHTML ='<b>' + greet + '</b>';