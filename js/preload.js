var questionsArray = [
    'Är du minst 18 år?',
    'Går du med på att hålla dessa </br>kvinnors identitet hemliga?',
    'Lovar du att respektera medlemmarna?',
    'Godkänner du reglerna?'
];

var currentQuestion = 0;
var days = ["Söndagen", "Måndagen",
    "Tisdagen", "Onsdagen",
    "Torsdagen", "Fredagen",
    "Lördagen"
];
var months = ['Januari', 'Februari',
    'Mars', 'April', 'Maj', 'Juni',
    'Juli', 'Augusti', 'September',
    'Oktober', 'November',
    'December'
];
var now = new Date();
var tomorrow = new Date(now.getTime() +
    (24 * 60 * 60 * 1000));
var epxireDate = days[tomorrow.getDay()] +
    " " + months[tomorrow.getMonth()] +
    " " + tomorrow.getDate();