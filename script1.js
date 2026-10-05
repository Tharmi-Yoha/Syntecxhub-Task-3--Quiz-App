/* =========================================================
   QUIZORA — SYNTECXHUB TASK 3
   Quiz Application
   100 Questions | 5 Categories
========================================================= */


/* =========================================================
   QUIZ DATA — 100 QUESTIONS
========================================================= */

const quizData = {

    /* =========================
       MATHEMATICS — 20
    ========================= */

    mathematics: {
        title: "Mathematics",
        icon: "∑",
        questions: [

            {
                question: "What is 15 × 8?",
                options: ["110", "120", "130", "140"],
                answer: "120"
            },

            {
                question: "What is 25% of 200?",
                options: ["25", "40", "50", "75"],
                answer: "50"
            },

            {
                question: "What is the square root of 144?",
                options: ["10", "11", "12", "14"],
                answer: "12"
            },

            {
                question: "If x + 7 = 15, what is the value of x?",
                options: ["6", "7", "8", "9"],
                answer: "8"
            },

            {
                question: "What is 3² + 4²?",
                options: ["20", "24", "25", "28"],
                answer: "25"
            },

            {
                question: "What is 2/3 + 1/3?",
                options: ["1/2", "2/3", "1", "4/3"],
                answer: "1"
            },

            {
                question: "What is the perimeter of a square with a side length of 6 cm?",
                options: ["12 cm", "18 cm", "24 cm", "36 cm"],
                answer: "24 cm"
            },

            {
                question: "0.75 expressed as a percentage is:",
                options: ["7.5%", "25%", "50%", "75%"],
                answer: "75%"
            },

            {
                question: "What is 5! (5 factorial)?",
                options: ["25", "60", "100", "120"],
                answer: "120"
            },

            {
                question: "If 2x = 18, what is x?",
                options: ["6", "8", "9", "12"],
                answer: "9"
            },

            {
                question: "What is the sum of the interior angles of a triangle?",
                options: ["90°", "180°", "270°", "360°"],
                answer: "180°"
            },

            {
                question: "What is 45 ÷ 5?",
                options: ["7", "8", "9", "10"],
                answer: "9"
            },

            {
                question: "What is 7²?",
                options: ["42", "49", "56", "64"],
                answer: "49"
            },

            {
                question: "What is 20% of 350?",
                options: ["50", "60", "70", "80"],
                answer: "70"
            },

            {
                question: "What is the average of 10, 20 and 30?",
                options: ["15", "20", "25", "30"],
                answer: "20"
            },

            {
                question: "A ratio is 3:5 and the total is 32. What is the smaller number?",
                options: ["10", "12", "15", "18"],
                answer: "12"
            },

            {
                question: "What is the area of a rectangle measuring 8 cm × 5 cm?",
                options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
                answer: "40 cm²"
            },

            {
                question: "Which of the following is a prime number?",
                options: ["21", "27", "29", "35"],
                answer: "29"
            },

            {
                question: "What is one-quarter of 80?",
                options: ["10", "15", "20", "25"],
                answer: "20"
            },

            {
                question: "What is 2⁵?",
                options: ["16", "24", "32", "64"],
                answer: "32"
            }
        ]
    },


    /* =========================
       INFORMATION TECHNOLOGY — 20
    ========================= */

    it: {
        title: "Information Technology",
        icon: "IT",
        questions: [

            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language",
                    "Hyperlink Text Management Language",
                    "Home Tool Markup Language"
                ],
                answer: "Hyper Text Markup Language"
            },

            {
                question: "What is CSS mainly used for?",
                options: [
                    "Database management",
                    "Styling web pages",
                    "Creating databases",
                    "Managing servers"
                ],
                answer: "Styling web pages"
            },

            {
                question: "Which component is known as the brain of a computer?",
                options: [
                    "RAM",
                    "Hard Disk",
                    "CPU",
                    "Monitor"
                ],
                answer: "CPU"
            },

            {
                question: "Which language is commonly used to add interactivity to web pages?",
                options: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "SQL"
                ],
                answer: "JavaScript"
            },

            {
                question: "Which type of memory is volatile?",
                options: [
                    "ROM",
                    "RAM",
                    "SSD",
                    "Hard Disk"
                ],
                answer: "RAM"
            },

            {
                question: "Which language is primarily used to query relational databases?",
                options: [
                    "SQL",
                    "HTML",
                    "CSS",
                    "XML"
                ],
                answer: "SQL"
            },

            {
                question: "What does URL stand for?",
                options: [
                    "Uniform Resource Locator",
                    "Universal Reference Link",
                    "Unified Resource Language",
                    "User Resource Location"
                ],
                answer: "Uniform Resource Locator"
            },

            {
                question: "Which protocol is commonly used to transfer web pages?",
                options: [
                    "FTP",
                    "HTTP",
                    "SMTP",
                    "SSH"
                ],
                answer: "HTTP"
            },

            {
                question: "What is an IP address used for?",
                options: [
                    "Identifying a device on a network",
                    "Editing images",
                    "Creating documents",
                    "Compressing files"
                ],
                answer: "Identifying a device on a network"
            },

            {
                question: "Which of the following is an operating system?",
                options: [
                    "Google Chrome",
                    "Windows",
                    "HTML",
                    "MySQL"
                ],
                answer: "Windows"
            },

            {
                question: "Which tool is commonly used for version control?",
                options: [
                    "Git",
                    "Figma",
                    "Photoshop",
                    "Excel"
                ],
                answer: "Git"
            },

            {
                question: "Which software is used to access websites?",
                options: [
                    "Web browser",
                    "Compiler",
                    "Database",
                    "Text editor"
                ],
                answer: "Web browser"
            },

            {
                question: "Which database field uniquely identifies each record?",
                options: [
                    "Foreign Key",
                    "Primary Key",
                    "Data Type",
                    "Index Page"
                ],
                answer: "Primary Key"
            },

            {
                question: "What does LAN stand for?",
                options: [
                    "Local Area Network",
                    "Large Access Network",
                    "Linked Application Network",
                    "Local Access Node"
                ],
                answer: "Local Area Network"
            },

            {
                question: "Which protocol provides encrypted communication over the web?",
                options: [
                    "HTTP",
                    "FTP",
                    "HTTPS",
                    "SMTP"
                ],
                answer: "HTTPS"
            },

            {
                question: "What number system does a computer primarily use?",
                options: [
                    "Decimal",
                    "Binary",
                    "Octal",
                    "Roman"
                ],
                answer: "Binary"
            },

            {
                question: "Which storage device generally has no moving mechanical parts?",
                options: [
                    "SSD",
                    "Floppy Disk",
                    "DVD",
                    "Tape Drive"
                ],
                answer: "SSD"
            },

            {
                question: "What is phishing?",
                options: [
                    "A programming language",
                    "A type of cyberattack",
                    "A database system",
                    "A file format"
                ],
                answer: "A type of cyberattack"
            },

            {
                question: "What does API stand for?",
                options: [
                    "Application Programming Interface",
                    "Advanced Program Integration",
                    "Application Process Internet",
                    "Automated Programming Input"
                ],
                answer: "Application Programming Interface"
            },

            {
                question: "What is cloud computing?",
                options: [
                    "Computing services delivered over the internet",
                    "Programming without a computer",
                    "A type of computer hardware",
                    "A method of printing documents"
                ],
                answer: "Computing services delivered over the internet"
            }
        ]
    },


    /* =========================
       GENERAL KNOWLEDGE — 20
    ========================= */

    gk: {
        title: "General Knowledge",
        icon: "GK",
        questions: [

            {
                question: "What is the capital city of Japan?",
                options: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
                answer: "Tokyo"
            },

            {
                question: "Which is the largest ocean on Earth?",
                options: [
                    "Atlantic Ocean",
                    "Indian Ocean",
                    "Pacific Ocean",
                    "Arctic Ocean"
                ],
                answer: "Pacific Ocean"
            },

            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                answer: "7"
            },

            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "Thailand", "South Korea"],
                answer: "Japan"
            },

            {
                question: "Which is the largest country in the world by land area?",
                options: ["Canada", "China", "Russia", "United States"],
                answer: "Russia"
            },

            {
                question: "What is the currency of the United Kingdom?",
                options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
                answer: "Pound Sterling"
            },

            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                answer: "Canberra"
            },

            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Mercury"],
                answer: "Mars"
            },

            {
                question: "Who was the first person to walk on the Moon?",
                options: [
                    "Buzz Aldrin",
                    "Neil Armstrong",
                    "Yuri Gagarin",
                    "Michael Collins"
                ],
                answer: "Neil Armstrong"
            },

            {
                question: "Which is the largest planet in our Solar System?",
                options: ["Earth", "Saturn", "Jupiter", "Neptune"],
                answer: "Jupiter"
            },

            {
                question: "Where is the headquarters of the United Nations located?",
                options: [
                    "London",
                    "Paris",
                    "New York City",
                    "Geneva"
                ],
                answer: "New York City"
            },

            {
                question: "How many rings are there in the Olympic symbol?",
                options: ["4", "5", "6", "7"],
                answer: "5"
            },

            {
                question: "In which country is the Taj Mahal located?",
                options: ["India", "Pakistan", "Nepal", "Bangladesh"],
                answer: "India"
            },

            {
                question: "What is the official currency of Sri Lanka?",
                options: [
                    "Sri Lankan Rupee",
                    "Indian Rupee",
                    "Sri Lankan Dollar",
                    "Ceylon Pound"
                ],
                answer: "Sri Lankan Rupee"
            },

            {
                question: "What is the largest mammal in the world?",
                options: [
                    "African Elephant",
                    "Blue Whale",
                    "Giraffe",
                    "Orca"
                ],
                answer: "Blue Whale"
            },

            {
                question: "Which language has the largest number of native speakers?",
                options: [
                    "English",
                    "Spanish",
                    "Mandarin Chinese",
                    "French"
                ],
                answer: "Mandarin Chinese"
            },

            {
                question: "What is Earth's natural satellite?",
                options: ["Mars", "Moon", "Sun", "Venus"],
                answer: "Moon"
            },

            {
                question: "What is the capital of Canada?",
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                answer: "Ottawa"
            },

            {
                question: "What is the highest mountain above sea level?",
                options: [
                    "K2",
                    "Mount Everest",
                    "Kangchenjunga",
                    "Mount Kilimanjaro"
                ],
                answer: "Mount Everest"
            },

            {
                question: "Which country is famous for the ancient city of Machu Picchu?",
                options: ["Peru", "Mexico", "Brazil", "Chile"],
                answer: "Peru"
            }
        ]
    },


    /* =========================
       ANIMALS & WILDLIFE — 20
    ========================= */

    animals: {
        title: "Animals & Wildlife",
        icon: "AW",
        questions: [

            {
                question: "What is the largest land animal?",
                options: [
                    "Giraffe",
                    "African Elephant",
                    "Hippopotamus",
                    "Rhinoceros"
                ],
                answer: "African Elephant"
            },

            {
                question: "Which is the fastest land animal?",
                options: ["Lion", "Horse", "Cheetah", "Leopard"],
                answer: "Cheetah"
            },

            {
                question: "Which mammal is capable of true powered flight?",
                options: ["Flying squirrel", "Bat", "Ostrich", "Penguin"],
                answer: "Bat"
            },

            {
                question: "Which animal is famous for its black-and-white stripes?",
                options: ["Tiger", "Zebra", "Panda", "Skunk"],
                answer: "Zebra"
            },

            {
                question: "What is stored in a camel's hump?",
                options: ["Water", "Fat", "Food", "Air"],
                answer: "Fat"
            },

            {
                question: "What is the young stage of a frog called?",
                options: ["Cub", "Calf", "Tadpole", "Larva"],
                answer: "Tadpole"
            },

            {
                question: "What is the largest living bird?",
                options: ["Eagle", "Ostrich", "Emu", "Albatross"],
                answer: "Ostrich"
            },

            {
                question: "A dolphin belongs to which animal group?",
                options: ["Fish", "Reptile", "Mammal", "Amphibian"],
                answer: "Mammal"
            },

            {
                question: "Which bird is unable to fly?",
                options: ["Eagle", "Penguin", "Falcon", "Sparrow"],
                answer: "Penguin"
            },

            {
                question: "Which animal is well known for changing its skin colour?",
                options: ["Chameleon", "Elephant", "Horse", "Rabbit"],
                answer: "Chameleon"
            },

            {
                question: "Which animal is famous for having a very long neck?",
                options: ["Giraffe", "Camel", "Zebra", "Deer"],
                answer: "Giraffe"
            },

            {
                question: "How many hearts does an octopus have?",
                options: ["1", "2", "3", "4"],
                answer: "3"
            },

            {
                question: "What is the main food of giant pandas?",
                options: ["Fish", "Bamboo", "Meat", "Fruit"],
                answer: "Bamboo"
            },

            {
                question: "Which animal is known for the mane of the male?",
                options: ["Tiger", "Lion", "Leopard", "Wolf"],
                answer: "Lion"
            },

            {
                question: "Which is the largest animal ever known to have lived?",
                options: [
                    "Blue Whale",
                    "African Elephant",
                    "Giant Squid",
                    "Giraffe"
                ],
                answer: "Blue Whale"
            },

            {
                question: "Kangaroos are native to which country?",
                options: ["India", "Australia", "Brazil", "South Africa"],
                answer: "Australia"
            },

            {
                question: "Which group does the crocodile belong to?",
                options: ["Mammals", "Birds", "Reptiles", "Amphibians"],
                answer: "Reptiles"
            },

            {
                question: "Which insect produces honey?",
                options: ["Ant", "Butterfly", "Honey bee", "Beetle"],
                answer: "Honey bee"
            },

            {
                question: "Which bird is generally active at night?",
                options: ["Eagle", "Owl", "Parrot", "Peacock"],
                answer: "Owl"
            },

            {
                question: "What type of skeleton does a shark have?",
                options: [
                    "Bone",
                    "Cartilage",
                    "Shell",
                    "Keratin"
                ],
                answer: "Cartilage"
            }
        ]
    },


    /* =========================
       MONEY & FINANCE — 20
    ========================= */

    finance: {
        title: "Money & Finance",
        icon: "MF",
        questions: [

            {
                question: "What is the currency of Japan?",
                options: ["Yuan", "Won", "Yen", "Ringgit"],
                answer: "Yen"
            },

            {
                question: "What does ATM stand for?",
                options: [
                    "Automatic Transfer Machine",
                    "Automated Teller Machine",
                    "Account Transfer Method",
                    "Automatic Transaction Manager"
                ],
                answer: "Automated Teller Machine"
            },

            {
                question: "What is a budget?",
                options: [
                    "A plan for managing income and expenses",
                    "A bank account",
                    "A type of loan",
                    "A payment card"
                ],
                answer: "A plan for managing income and expenses"
            },

            {
                question: "What is saving?",
                options: [
                    "Spending all available money",
                    "Setting money aside for future use",
                    "Borrowing money",
                    "Paying taxes"
                ],
                answer: "Setting money aside for future use"
            },

            {
                question: "What is interest?",
                options: [
                    "A type of currency",
                    "A cost or return associated with money",
                    "A bank branch",
                    "A financial document"
                ],
                answer: "A cost or return associated with money"
            },

            {
                question: "What is a debit card generally linked to?",
                options: [
                    "A bank account",
                    "A mortgage",
                    "A stock exchange",
                    "A credit score"
                ],
                answer: "A bank account"
            },

            {
                question: "What does a credit card allow a user to do?",
                options: [
                    "Borrow money up to an approved limit",
                    "Print money",
                    "Avoid all payments",
                    "Create a bank account automatically"
                ],
                answer: "Borrow money up to an approved limit"
            },

            {
                question: "What is inflation?",
                options: [
                    "A general increase in prices",
                    "A fall in all prices",
                    "A type of bank account",
                    "A government loan"
                ],
                answer: "A general increase in prices"
            },

            {
                question: "What is income?",
                options: [
                    "Money received",
                    "Money spent",
                    "Money borrowed",
                    "Money taxed"
                ],
                answer: "Money received"
            },

            {
                question: "What is an expense?",
                options: [
                    "Money earned",
                    "Money invested",
                    "Money spent",
                    "Money saved"
                ],
                answer: "Money spent"
            },

            {
                question: "What does it mean to make a deposit?",
                options: [
                    "To put money into an account",
                    "To remove money from an account",
                    "To close an account",
                    "To borrow money"
                ],
                answer: "To put money into an account"
            },

            {
                question: "What is a loan?",
                options: [
                    "Money borrowed that is usually repaid",
                    "Money donated permanently",
                    "A type of currency",
                    "A bank statement"
                ],
                answer: "Money borrowed that is usually repaid"
            },

            {
                question: "What does an interest rate usually represent?",
                options: [
                    "A percentage related to borrowing or saving",
                    "A bank account number",
                    "A currency symbol",
                    "A tax identification number"
                ],
                answer: "A percentage related to borrowing or saving"
            },

            {
                question: "What is the currency of the United States?",
                options: ["Euro", "Dollar", "Pound", "Yen"],
                answer: "Dollar"
            },

            {
                question: "What is the currency used in Sri Lanka?",
                options: [
                    "Sri Lankan Rupee",
                    "Indian Rupee",
                    "Sri Lankan Dollar",
                    "Ceylon Dollar"
                ],
                answer: "Sri Lankan Rupee"
            },

            {
                question: "What is profit?",
                options: [
                    "Revenue minus costs",
                    "Costs plus debt",
                    "Income minus savings",
                    "Tax minus income"
                ],
                answer: "Revenue minus costs"
            },

            {
                question: "What does a discount do to the original price?",
                options: [
                    "Usually increases it",
                    "Reduces it",
                    "Doubles it",
                    "Has no effect"
                ],
                answer: "Reduces it"
            },

            {
                question: "What is a tax?",
                options: [
                    "A payment required by a government",
                    "A private loan",
                    "A bank deposit",
                    "A discount"
                ],
                answer: "A payment required by a government"
            },

            {
                question: "What is an emergency fund?",
                options: [
                    "Money reserved for unexpected expenses",
                    "Money used only for entertainment",
                    "A type of credit card",
                    "A government tax"
                ],
                answer: "Money reserved for unexpected expenses"
            },

            {
                question: "What is compound interest?",
                options: [
                    "Interest calculated only on the original amount",
                    "Interest earned on the principal and accumulated interest",
                    "A fixed bank fee",
                    "A type of tax"
                ],
                answer: "Interest earned on the principal and accumulated interest"
            }
        ]
    }
};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const welcomeScreen = document.getElementById("welcomeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startQuizBtn = document.getElementById("startQuizBtn");

const currentCategory = document.getElementById("currentCategory");
const currentQuestionNumber = document.getElementById("currentQuestionNumber");
const totalQuestions = document.getElementById("totalQuestions");
const progressBar = document.getElementById("progressBar");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");

const nextBtn = document.getElementById("nextBtn");
const quitQuizBtn = document.getElementById("quitQuizBtn");

const scoreValue = document.getElementById("scoreValue");
const scorePercentage = document.getElementById("scorePercentage");
const correctAnswers = document.getElementById("correctAnswers");
const incorrectAnswers = document.getElementById("incorrectAnswers");
const accuracyValue = document.getElementById("accuracyValue");
const resultMessage = document.getElementById("resultMessage");

const restartBtn = document.getElementById("restartBtn");
const chooseCategoryBtn = document.getElementById("chooseCategoryBtn");

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const categoryCards = document.querySelectorAll(".category-card");


/* =========================================================
   ANSWER FEEDBACK ELEMENT
========================================================= */

let answerFeedback = document.getElementById("answerFeedback");

if (!answerFeedback) {

    answerFeedback = document.createElement("div");

    answerFeedback.id = "answerFeedback";

    answerFeedback.className = "answer-feedback";

    if (answersContainer) {

        answersContainer.insertAdjacentElement(
            "afterend",
            answerFeedback
        );
    }
}

answerFeedback.setAttribute("role", "status");
answerFeedback.setAttribute("aria-live", "polite");


/* =========================================================
   QUIZ STATE
========================================================= */

let selectedCategory = "";
let currentQuestions = [];
let currentQuestionIndex = 0;

let score = 0;
let correctCount = 0;
let incorrectCount = 0;

let questionAnswered = false;


/* =========================================================
   START QUIZ
========================================================= */

function startQuiz(category) {

    if (!quizData[category]) {
        return;
    }

    selectedCategory = category;

    currentQuestions = quizData[category].questions;

    currentQuestionIndex = 0;

    score = 0;
    correctCount = 0;
    incorrectCount = 0;

    questionAnswered = false;

    currentCategory.textContent =
        quizData[category].title;

    totalQuestions.textContent =
        currentQuestions.length;

    welcomeScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    loadQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    const question =
        currentQuestions[currentQuestionIndex];

    if (!question) {
        return;
    }

    questionAnswered = false;

    currentQuestionNumber.textContent =
        currentQuestionIndex + 1;

    questionText.textContent =
        question.question;

    const progress =
        ((currentQuestionIndex + 1) /
            currentQuestions.length) * 100;

    progressBar.style.width =
        `${progress}%`;

    answersContainer.innerHTML = "";

    answerFeedback.textContent = "";

    answerFeedback.className =
        "answer-feedback";

    nextBtn.disabled = true;

    nextBtn.textContent =
        currentQuestionIndex ===
        currentQuestions.length - 1
            ? "Submit Quiz"
            : "Next Question";


    /* =========================
       CREATE ANSWER BUTTONS
    ========================= */

    question.options.forEach((option, index) => {

        const answerButton =
            document.createElement("button");

        answerButton.type = "button";

        answerButton.className =
            "answer-option";

        answerButton.dataset.answer =
            option;

        answerButton.setAttribute(
            "aria-label",
            `Option ${String.fromCharCode(65 + index)}: ${option}`
        );

        answerButton.innerHTML = `
            <span class="answer-letter">
                ${String.fromCharCode(65 + index)}
            </span>

            <span class="answer-text">
                ${escapeHTML(option)}
            </span>
        `;

        answerButton.addEventListener(
            "click",
            () => selectAnswer(
                answerButton,
                option
            )
        );

        answersContainer.appendChild(
            answerButton
        );
    });
}


/* =========================================================
   SELECT ANSWER
   CORRECT = GREEN
   WRONG = RED
========================================================= */

function selectAnswer(
    selectedButton,
    selectedAnswer
) {

    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    const currentQuestion =
        currentQuestions[currentQuestionIndex];

    const correctAnswer =
        currentQuestion.answer;

    const allAnswerButtons =
        answersContainer.querySelectorAll(
            ".answer-option"
        );


    /* =========================
       DISABLE ALL OPTIONS
    ========================= */

    allAnswerButtons.forEach(button => {

        button.disabled = true;

        button.classList.add(
            "disabled"
        );

        button.setAttribute(
            "aria-disabled",
            "true"
        );
    });


    /* =========================
       CORRECT ANSWER
    ========================= */

    if (selectedAnswer === correctAnswer) {

        score++;

        correctCount++;

        selectedButton.classList.remove(
            "disabled"
        );

        selectedButton.classList.add(
            "correct"
        );

        selectedButton.setAttribute(
            "aria-label",
            `Correct answer: ${selectedAnswer}`
        );

        answerFeedback.innerHTML = `
            <span class="feedback-icon">✓</span>
            <span>
                <strong>Correct!</strong>
                Great job.
            </span>
        `;

        answerFeedback.className =
            "answer-feedback correct";


        /* Small focus effect */

        setTimeout(() => {
            selectedButton.focus();
        }, 100);
    }


    /* =========================
       WRONG ANSWER
    ========================= */

    else {

        incorrectCount++;

        selectedButton.classList.remove(
            "disabled"
        );

        selectedButton.classList.add(
            "wrong"
        );

        selectedButton.setAttribute(
            "aria-label",
            `Wrong answer: ${selectedAnswer}`
        );


        /* =========================
           SHOW ACTUAL CORRECT ANSWER
        ========================= */

        allAnswerButtons.forEach(button => {

            if (
                button.dataset.answer ===
                correctAnswer
            ) {

                button.classList.remove(
                    "disabled"
                );

                button.classList.add(
                    "correct"
                );

                button.setAttribute(
                    "aria-label",
                    `Correct answer: ${correctAnswer}`
                );
            }
        });


        answerFeedback.innerHTML = `
            <span class="feedback-icon">!</span>
            <span>
                <strong>Incorrect.</strong>
                Correct answer:
                <strong>${escapeHTML(correctAnswer)}</strong>
            </span>
        `;

        answerFeedback.className =
            "answer-feedback wrong";


        /* Focus the selected wrong answer */

        setTimeout(() => {
            selectedButton.focus();
        }, 100);
    }


    /* =========================
       ENABLE NEXT BUTTON
    ========================= */

    nextBtn.disabled = false;
}


/* =========================================================
   NEXT / SUBMIT BUTTON
========================================================= */

nextBtn.addEventListener(
    "click",
    () => {

        if (!questionAnswered) {
            return;
        }

        if (
            currentQuestionIndex <
            currentQuestions.length - 1
        ) {

            currentQuestionIndex++;

            loadQuestion();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        } else {

            showResult();
        }
    }
);


/* =========================================================
   SHOW RESULT
========================================================= */

function showResult() {

    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );

    const total =
        currentQuestions.length;

    const percentage =
        Math.round(
            (score / total) * 100
        );

    const accuracy =
        Math.round(
            (correctCount / total) * 100
        );


    scoreValue.textContent = "0";

    scorePercentage.textContent =
        "0%";

    correctAnswers.textContent =
        correctCount;

    incorrectAnswers.textContent =
        incorrectCount;

    accuracyValue.textContent =
        `${accuracy}%`;

    resultMessage.textContent =
        getResultMessage(
            percentage
        );


    /* Score animation */

    animateScore(
        scoreValue,
        score
    );


    /* Percentage animation */

    animatePercentage(
        scorePercentage,
        percentage
    );


    /* Result card animation */

    animateResultCard();


    /* Save result */

    saveScore();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   SCORE ANIMATION
========================================================= */

function animateScore(
    element,
    target
) {

    const duration = 1000;

    const startTime =
        performance.now();

    function update(currentTime) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );

        const easedProgress =
            1 -
            Math.pow(
                1 - progress,
                3
            );

        const currentValue =
            Math.floor(
                target *
                easedProgress
            );

        element.textContent =
            currentValue;

        if (progress < 1) {

            requestAnimationFrame(
                update
            );

        } else {

            element.textContent =
                target;
        }
    }

    requestAnimationFrame(
        update
    );
}


/* =========================================================
   PERCENTAGE ANIMATION
========================================================= */

function animatePercentage(
    element,
    target
) {

    const duration = 1200;

    const startTime =
        performance.now();

    function update(currentTime) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );

        const currentValue =
            Math.floor(
                target * progress
            );

        element.textContent =
            `${currentValue}%`;

        if (progress < 1) {

            requestAnimationFrame(
                update
            );

        } else {

            element.textContent =
                `${target}%`;
        }
    }

    requestAnimationFrame(
        update
    );
}


/* =========================================================
   RESULT CARD ANIMATION
========================================================= */

function animateResultCard() {

    const scoreCard =
        document.querySelector(
            ".score-card"
        );

    if (!scoreCard) {
        return;
    }

    scoreCard.classList.remove(
        "score-reveal"
    );

    void scoreCard.offsetWidth;

    scoreCard.classList.add(
        "score-reveal"
    );
}


/* =========================================================
   RESULT MESSAGE
========================================================= */

function getResultMessage(
    percentage
) {

    if (percentage === 100) {

        return "Perfect score. Excellent work!";
    }

    if (percentage >= 80) {

        return "Excellent performance. You really know your stuff!";
    }

    if (percentage >= 60) {

        return "Great job! Keep learning and improving.";
    }

    if (percentage >= 40) {

        return "Good attempt. A little more practice will help.";
    }

    return "Keep practising. Every question is a chance to learn!";
}


/* =========================================================
   CATEGORY CARDS
========================================================= */

categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const category =
                card.dataset.category;

            startQuiz(category);
        }
    );
});


/* =========================================================
   START QUIZ BUTTON
   Scroll to Categories
========================================================= */

if (startQuizBtn) {

    startQuizBtn.addEventListener(
        "click",
        () => {

            const categoriesSection =
                document.getElementById(
                    "categoriesSection"
                );

            if (categoriesSection) {

                categoriesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            } else {

                const firstCategory =
                    document.querySelector(
                        ".category-card"
                    );

                if (firstCategory) {

                    firstCategory.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            }
        }
    );
}


/* =========================================================
   QUIT QUIZ
========================================================= */

if (quitQuizBtn) {

    quitQuizBtn.addEventListener(
        "click",
        () => {

           

            quizScreen.classList.add(
                "hidden"
            );

            resultScreen.classList.add(
                "hidden"
            );

            welcomeScreen.classList.remove(
                "hidden"
            );

            questionAnswered = false;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


/* =========================================================
   RESTART SAME QUIZ
========================================================= */

if (restartBtn) {

    restartBtn.addEventListener(
        "click",
        () => {

            startQuiz(
                selectedCategory
            );
        }
    );
}


/* =========================================================
   CHOOSE ANOTHER CATEGORY
========================================================= */

if (chooseCategoryBtn) {

    chooseCategoryBtn.addEventListener(
        "click",
        () => {

            resultScreen.classList.add(
                "hidden"
            );

            quizScreen.classList.add(
                "hidden"
            );

            welcomeScreen.classList.remove(
                "hidden"
            );

            const categoriesSection =
                document.getElementById(
                    "categoriesSection"
                );

            if (categoriesSection) {

                setTimeout(() => {

                    categoriesSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 100);
            }
        }
    );
}


/* =========================================================
   THEME SYSTEM
========================================================= */

function updateThemeIcon() {

    if (!themeIcon) {
        return;
    }

    const isLightMode =
        document.body.classList.contains(
            "light-mode"
        );

    themeIcon.textContent =
        isLightMode
            ? "☀"
            : "☾";
}


function applySavedTheme() {

    const savedTheme =
        localStorage.getItem(
            "quizora-theme"
        );

    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

    } else {

        document.body.classList.remove(
            "light-mode"
        );
    }

    updateThemeIcon();
}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );

            const isLightMode =
                document.body.classList.contains(
                    "light-mode"
                );

            localStorage.setItem(
                "quizora-theme",
                isLightMode
                    ? "light"
                    : "dark"
            );

            updateThemeIcon();
        }
    );
}


/* =========================================================
   SCORE HISTORY
========================================================= */

function saveScore() {

    const history =
        JSON.parse(
            localStorage.getItem(
                "quizora-history"
            ) || "[]"
        );

    history.push({

        category:
            selectedCategory,

        score:
            score,

        total:
            currentQuestions.length,

        percentage:
            Math.round(
                (score /
                    currentQuestions.length) *
                100
            ),

        date:
            new Date().toISOString()
    });


    /* Keep latest 20 attempts */

    if (history.length > 20) {

        history.shift();
    }

    localStorage.setItem(
        "quizora-history",
        JSON.stringify(history)
    );
}


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /*
           Press Enter after answering
           to move to next question.
        */

        if (
            event.key === "Enter" &&
            questionAnswered &&
            nextBtn &&
            !nextBtn.disabled &&
            !quizScreen.classList.contains(
                "hidden"
            )
        ) {

            nextBtn.click();
        }
    }
);


/* =========================================================
   HTML ESCAPE FUNCTION
   Keeps dynamically inserted answer text safe
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   INITIALISE
========================================================= */

applySavedTheme();


/* =========================================================
   DEVELOPMENT CHECK
========================================================= */

const totalQuizQuestions =
    Object.values(quizData)
        .reduce(
            (total, category) =>
                total +
                category.questions.length,
            0
        );

console.log(
    "Quizora loaded successfully."
);

console.log(
    "Total questions:",
    totalQuizQuestions
);


/* =========================================================
   FINAL VALIDATION
========================================================= */

if (totalQuizQuestions === 100) {

    console.log(
        "✓ Quizora contains 100 questions."
    );

} else {

    console.warn(
        `Quizora question count is ${totalQuizQuestions}, expected 100.`
    );
}