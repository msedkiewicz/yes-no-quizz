// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "1. Wydaje mi się, że docierają do mnie różne subtelne szczegóły otoczenia.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "2. Podlegam wpływowi nastrojów innych ludzi.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "3. Mam skłonność do dużej wrażliwości na ból.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "4. W dni, kiedy dużo się dzieje, miewam potrzebę znalezienia chwili dla siebie, chowając się do łóżka, zaciemnionego pokoju czy gdziekolwiek indziej, gdzie mogę zaznać trochę spokoju i uciec od bodźców.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "5. Jestem bardzo czuła / czuły na działanie kofeiny.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 5,
    q: "6. Łatwo przytłaczają mnie takie bodźce jak ostre światło, silne zapachy, szorstkie tkaniny czy syreny przejeżdżających karetek.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "7. Mam bogate, skomplikowane życie wewnętrzne.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "8. Głośne dźwięki sprawiają mi dyskomfort.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 8,
    q: "9. Do głębi porusza mnie sztuka i muzyka.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 9,
    q: "10. Jestem sumienna / sumienny.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 10,
    q: "11. Łatwo mnie przestraszyć.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 11,
    q: "12. Czuję się roztrzęsiona / roztrzęsiony, gdy mam dużo do zrobienia w krótkim czasie.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 12,
    q: "13. Gdy ludzie nie czują się komfortowo w miejscu, w którym przebywają, zwykle wiem, jak temu zaradzić (przez zmianę oświetlenia, przestawienie foteli itp.).",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 13,
    q: "14. Irytuje mnie, gdy ludzie wymagają ode mnie zrobienia zbyt wielu rzeczy jednocześnie.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 14,
    q: "15. Bardzo dbam o to, by unikać pomyłek czy zapominania o czymś.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 15,
    q: "16. Celowo unikam filmów i programów telewizyjnych pokazujących sceny przemocy.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 16,
    q: "17. Odczuwam nieprzyjemne pobudzenie, kiedy wokół mnie dużo się dzieje.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 17,
    q: "18. Głód wywołuje u mnie silną reakcję, tak, że tracę koncentrację czy pogarsza mi się nastrój.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 18,
    q: "19. Zmiany w moim życiu wytrącają mnie z równowagi.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 19,
    q: "20. Zauważam i cenię sobie delikatne czy wysublimowane zapachy, smaki, dźwięki, dzieła sztuki.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 20,
    q: "21. Ważnym priorytetem jest dla mnie takie ułożenie sobie życia, by unikać sytuacji denerwujących i rozstrajających.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 21,
    q: "22. Kiedy podczas wykonywania zadania muszę z kimś rywalizować, lub jestem obserwowana / obserwowany, bardzo się denerwuję i radzę sobie o wiele gorzej niż normalnie.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
  {
    id: 22,
    q: "23. Mam wrażenie, że w dzieciństwie rodzice lub nauczyciele postrzegali mnie jako wrażliwą / wrażliwego czy nieśmiałą / nieśmiałego.",
    a: [
      { text: "tak", isCorrect: true },
      { text: "nie", isCorrect: false },
    ],
  },
];

// Set start
let start = true;
let enabled = false;
let selected = "";

// Set test result variable
let testResult = 0;

//Setting color in JS

// Getting the question
const question = document.getElementById("question");
// Getting the options
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");

// Show selection for op1
op1.addEventListener("click", () => {
  if (op1.classList.contains("option-active")) {
    op1.classList.remove("option-active");
    selected = false;
    enabled = false;
    next.classList.remove("next-active");
  } else {
    op1.classList.add("option-active");
    op2.classList.remove("option-active");
    selected = op1.value;
    enabled = true;
    next.classList.add("next-active");
  }
});

// Show selection for op2
op2.addEventListener("click", () => {
  if (op2.classList.contains("option-active")) {
    op2.classList.remove("option-active");
    selected = false;
    enabled = false;
    next.classList.remove("next-active");
  } else {
    op2.classList.add("option-active");
    op1.classList.remove("option-active");
    selected = op2.value;
    enabled = true;
    next.classList.add("next-active");
  }
});

// Iterate
function iterate(id) {
  // Getting the result display section
  const result = document.getElementsByClassName("result");
  result[0].innerText = "";
  // Setting the question text
  question.innerText = Questions[id].q;

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
}

if (start) {
  iterate("0");
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
let id = 1;

let finish = false;

next.addEventListener("click", () => {
  start = false;
  if (enabled === true) {
    if (selected === "true" && finish === false) {
      testResult = testResult + 1;
    }
    if (id == 22) {
      next.innerText = "Zakończ test";
    }
    if (id == 23) {
      finish = true;
      const result = document.getElementsByClassName("result");
      result[0].innerText = "Twój wynik testu to: " + testResult;
    }

    if (id < 23) {
      iterate(id);
      id++;
    }
    enabled = false;
    op1.classList.remove("option-active");
    op2.classList.remove("option-active");
    next.classList.remove("next-active");
  }
});
