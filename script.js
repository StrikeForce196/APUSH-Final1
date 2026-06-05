// ===== FLASHCARD DATA =====
const flashcards = [
    { question: "What was the significance of the Mayflower Compact (1620)?", answer: "It established self-governance and majority rule in the Plymouth Colony, serving as a foundation for democratic government in America." },
    { question: "What was Manifest Destiny?", answer: "The 19th-century belief that American expansion across the continent was justified and inevitable, used to justify westward expansion." },
    { question: "What did the Missouri Compromise (1820) do?", answer: "It admitted Missouri as a slave state and Maine as a free state, and prohibited slavery north of the 36°30' line in the Louisiana Territory." },
    { question: "What was the significance of Marbury v. Madison (1803)?", answer: "It established the principle of judicial review, giving the Supreme Court the power to declare laws unconstitutional." },
    { question: "What were the causes of the Civil War?", answer: "Slavery, states' rights, economic differences between North and South, and the election of Abraham Lincoln in 1860." },
    { question: "What was Reconstruction (1865-1877)?", answer: "The period after the Civil War focused on reintegrating Southern states and defining the rights of freed slaves. Ended with the Compromise of 1877." },
    { question: "What was the significance of the Emancipation Proclamation (1863)?", answer: "It declared slaves in Confederate states to be free, shifting the war's purpose to include abolishing slavery and preventing foreign intervention." },
    { question: "What was the New Deal?", answer: "FDR's programs (1933-1939) to combat the Great Depression through relief, recovery, and reform. Created Social Security, FDIC, SEC, and many jobs programs." },
    { question: "What caused the Great Depression?", answer: "Stock market crash of 1929, bank failures, overproduction, underconsumption, and tight monetary policy." },
    { question: "What was the significance of Brown v. Board of Education (1954)?", answer: "The Supreme Court ruled that racial segregation in public schools was unconstitutional, overturning Plessy v. Ferguson's 'separate but equal' doctrine." },
    { question: "What was the Monroe Doctrine (1823)?", answer: "A US policy opposing European colonialism in the Americas, declaring that any intervention by external powers in the Western Hemisphere would be viewed as a hostile act." },
    { question: "What was the Gulf of Tonkin Resolution (1964)?", answer: "It gave President Johnson authority to escalate US involvement in Vietnam without a formal declaration of war." },
    { question: "What was the significance of the 19th Amendment (1920)?", answer: "It granted women the right to vote in the United States, the culmination of the women's suffrage movement." },
    { question: "What was the Compromise of 1850?", answer: "Admitted California as a free state, enacted the Fugitive Slave Law, and allowed popular sovereignty in new territories to decide the slavery question." },
    { question: "What was the significance of the Louisiana Purchase (1803)?", answer: "It doubled the size of the United States, acquired from France for $15 million, and raised constitutional questions about federal power." }
];

// ===== QUIZ DATA =====
const quizQuestions = [
    {
        question: "Which document established the principle of self-governance in Plymouth Colony?",
        options: ["Articles of Confederation", "Mayflower Compact", "Declaration of Independence", "Constitution"],
        correct: 1
    },
    {
        question: "What Supreme Court case established judicial review?",
        options: ["Dred Scott v. Sandford", "Brown v. Board of Education", "Marbury v. Madison", "McCulloch v. Maryland"],
        correct: 2
    },
    {
        question: "The Louisiana Purchase was made during whose presidency?",
        options: ["John Adams", "Thomas Jefferson", "James Madison", "James Monroe"],
        correct: 1
    },
    {
        question: "What was the primary purpose of the Monroe Doctrine?",
        options: ["Expand slavery westward", "Oppose European colonialism in the Americas", "Establish trade with China", "Create a national bank"],
        correct: 1
    },
    {
        question: "Which amendment abolished slavery?",
        options: ["13th Amendment", "14th Amendment", "15th Amendment", "19th Amendment"],
        correct: 0
    },
    {
        question: "What event directly led to US entry into World War II?",
        options: ["Sinking of the Lusitania", "Attack on Pearl Harbor", "Zimmermann Telegram", "Invasion of Poland"],
        correct: 1
    },
    {
        question: "The New Deal was implemented by which president?",
        options: ["Herbert Hoover", "Harry Truman", "Franklin D. Roosevelt", "Dwight Eisenhower"],
        correct: 2
    },
    {
        question: "What did the Emancipation Proclamation do?",
        options: ["Freed all slaves nationwide", "Freed slaves in Confederate states", "Ended the Civil War", "Gave freed slaves voting rights"],
        correct: 1
    },
    {
        question: "Which case overturned 'separate but equal'?",
        options: ["Plessy v. Ferguson", "Roe v. Wade", "Brown v. Board of Education", "Miranda v. Arizona"],
        correct: 2
    },
    {
        question: "What was the significance of the Gulf of Tonkin Resolution?",
        options: ["Ended the Vietnam War", "Authorized military force in Vietnam without formal war declaration", "Established NATO", "Created the United Nations"],
        correct: 1
    },
    {
        question: "The Missouri Compromise prohibited slavery north of which line?",
        options: ["34°40'", "36°30'", "38°00'", "40°00'"],
        correct: 1
    },
    {
        question: "Which amendment granted women's suffrage?",
        options: ["15th Amendment", "17th Amendment", "18th Amendment", "19th Amendment"],
        correct: 3
    },
    {
        question: "What was the main cause of the Spanish-American War (1898)?",
        options: ["Impressment of American sailors", "Explosion of the USS Maine and yellow journalism", "Trade disputes with Spain", "Border conflicts in Texas"],
        correct: 1
    },
    {
        question: "Reconstruction ended with which event in 1877?",
        options: ["Passage of the 15th Amendment", "Compromise of 1877", "Election of Ulysses Grant", "Passage of the Civil Rights Act"],
        correct: 1
    },
    {
        question: "What was Manifest Destiny used to justify?",
        options: ["The abolition of slavery", "American westward expansion", "US entry into World War I", "The creation of the Federal Reserve"],
        correct: 1
    }
];

// ===== FLASHCARD LOGIC =====
let currentCard = 0;

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        flashcard.classList.toggle('flipped');
    }
}

function updateCard() {
    const questionEl = document.getElementById('flashcard-question');
    const answerEl = document.getElementById('flashcard-answer');
    const counterEl = document.getElementById('card-counter');
    const flashcard = document.getElementById('flashcard');

    if (questionEl && answerEl) {
        // Remove flip before changing content
        if (flashcard) {
            flashcard.classList.remove('flipped');
        }

        setTimeout(() => {
            questionEl.textContent = flashcards[currentCard].question;
            answerEl.textContent = flashcards[currentCard].answer;
            if (counterEl) {
                counterEl.textContent = `${currentCard + 1} / ${flashcards.length}`;
            }
        }, 100);
    }
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    updateCard();
}

function prevCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    updateCard();
}

// ===== QUIZ LOGIC =====
let currentQuestion = 0;
let score = 0;
let quizActive = true;

function loadQuestion() {
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const counterEl = document.getElementById('quiz-counter');
    const nextBtn = document.getElementById('next-btn');
    const scoreEl = document.getElementById('quiz-score');

    if (!questionEl || !optionsEl) return;

    if (currentQuestion >= quizQuestions.length) {
        // Quiz complete
        questionEl.textContent = "Quiz Complete!";
        optionsEl.innerHTML = '';
        if (nextBtn) nextBtn.style.display = 'none';
        if (scoreEl) scoreEl.textContent = `Your score: ${score} / ${quizQuestions.length} (${Math.round(score / quizQuestions.length * 100)}%)`;
        if (counterEl) counterEl.textContent = '';
        return;
    }

    const q = quizQuestions[currentQuestion];
    questionEl.textContent = q.question;
    if (counterEl) counterEl.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    if (nextBtn) nextBtn.style.display = 'none';
    if (scoreEl) scoreEl.textContent = '';

    optionsEl.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsEl.appendChild(btn);
    });

    quizActive = true;
}

function selectAnswer(index) {
    if (!quizActive) return;
    quizActive = false;

    const q = quizQuestions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const nextBtn = document.getElementById('next-btn');

    options.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === q.correct) {
            btn.classList.add('correct');
        }
        if (i === index && i !== q.correct) {
            btn.classList.add('incorrect');
        }
    });

    if (index === q.correct) {
        score++;
    }

    if (nextBtn) {
        nextBtn.style.display = 'inline-flex';
    }
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

// ===== SETTINGS LOGIC =====
function saveSettings() {
    const darkMode = document.getElementById('dark-mode');
    const fontSize = document.getElementById('font-size');
    const quizCount = document.getElementById('quiz-count');
    const shuffle = document.getElementById('shuffle');

    const settings = {
        darkMode: darkMode ? darkMode.checked : true,
        fontSize: fontSize ? fontSize.value : 'medium',
        quizCount: quizCount ? quizCount.value : '10',
        shuffle: shuffle ? shuffle.checked : false
    };

    localStorage.setItem('apush-settings', JSON.stringify(settings));
    alert('Settings saved successfully!');
}

function resetSettings() {
    localStorage.removeItem('apush-settings');
    const darkMode = document.getElementById('dark-mode');
    const fontSize = document.getElementById('font-size');
    const quizCount = document.getElementById('quiz-count');
    const shuffle = document.getElementById('shuffle');

    if (darkMode) darkMode.checked = true;
    if (fontSize) fontSize.value = 'medium';
    if (quizCount) quizCount.value = '10';
    if (shuffle) shuffle.checked = false;

    alert('Settings reset to defaults!');
}

function loadSettings() {
    const saved = localStorage.getItem('apush-settings');
    if (saved) {
        const settings = JSON.parse(saved);
        const darkMode = document.getElementById('dark-mode');
        const fontSize = document.getElementById('font-size');
        const quizCount = document.getElementById('quiz-count');
        const shuffle = document.getElementById('shuffle');

        if (darkMode) darkMode.checked = settings.darkMode;
        if (fontSize) fontSize.value = settings.fontSize;
        if (quizCount) quizCount.value = settings.quizCount;
        if (shuffle) shuffle.checked = settings.shuffle;
    }
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function () {
    // Initialize flashcards if on flashcard page
    if (document.getElementById('flashcard')) {
        updateCard();
    }

    // Initialize quiz if on quiz page
    if (document.getElementById('quiz-question')) {
        loadQuestion();
    }

    // Load settings if on settings page
    if (document.getElementById('dark-mode')) {
        loadSettings();
    }
});
