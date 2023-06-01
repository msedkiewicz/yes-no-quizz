// Questions will be asked
const Questions = [{
    id: 0,
    q: "1. Wydaje mi się, że docierają do mnie różne subtelne szczegóły otoczenia.",
    a: [{ text: "tak", isCorrect: true },
        { text: "nie", isCorrect: false },
    ]

},
{
    id: 1,
    q: "2. Podlegam wpływowi nastrojów innych ludzi.",
    a: [{ text: "tak", isCorrect: true },
        { text: "nie", isCorrect: false },
    ]

},
{
    id: 2,
    q: "3. Mam skłonność do dużej wrażliwości na ból.",
    a: [{ text: "tak", isCorrect: true },
        { text: "nie", isCorrect: false },
    ]

},
{
    id: 3,
    q: "4. Jestem bardzo czuła na działanie kofeiny.",
    a: [{ text: "tak", isCorrect: true },
        { text: "nie", isCorrect: false },
    ]

},
{
    id: 4,
    q: "5. W dni, kiedy dużo się dzieje, miewam potrzebę znalezienia chwili dla siebie, chowając się do łóżka, zaciemnionego pokoju czy gdziekolwiek indziej, gdzie mogę zaznać trochę spokoju i uciec od bodźców.",
    a: [{ text: "tak", isCorrect: true },
        { text: "nie", isCorrect: false },
    ]

},
{
    id: 5,
    q: "6. Łatwo przytłaczają mnie takie bodźce jak ostre światło, silne zapachy, szorstkie tkaniny czy syreny przejeżdżających karetek.",
    a: [{ text: "tak", isCorrect: true },
        { text: "nie", isCorrect: false },
    ]

}

]

// Set start
let start = true;

let selected = "";

// Set test result variable
let testResult = 0;

// Iterate
function iterate(id) {

// Getting the result display section
const result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    selected = op2.value;
})

}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
let id = 0;

let finish = false;

next.addEventListener("click", () => {
start = false;
if ((selected === "true") && (finish === false)) {
        testResult = testResult + 1;
}
if (id < 5) {
    id++;
    iterate(id);
}
if (id === 5) {
    next.innerText = "Zakończ test";
    finish = true;
}

console.log('Finalny wynik', testResult, 'Id', id);
})