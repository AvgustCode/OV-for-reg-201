const faqData = [
    { question: "Что такое эстетика?", answer: "Эстетика — это философская дисциплина, изучающая природу красоты, искусства и эстетического восприятия." },
    { question: "Как понять эстетический опыт?", answer: "Эстетический опыт — это эмоциональное восприятие и оценка художественных произведений, основанное на чувствах и личных переживаниях." },
    { question: "Что такое эстетство?", answer: "Эстетство — это стремление к эстетическим ценностям, проявляющееся в поведении, образе жизни и восприятии окружающего мира." },
    { question: "Категории эстетики?", answer: "Категории эстетики: красота, прекрасное, возвышенное, ужасное, гармония, симметрия." },
    { question: "Чем отличается красота от прекрасного?", answer: "Красота — это свойство, вызывающее эстетическое наслаждение, в то время как прекрасное — более широкое понятие, охватывающее не только красоту, но и другие положительные качества." },
    { question: "Избыточность, предметная сплошность, случайность?", answer: "Избыточность — наличие излишних элементов; предметная сплошность — целостность объекта; случайность — непредсказуемость явлений." },
    { question: "Периоды становления греческой эстетики?", answer: "Периоды становления греческой эстетики: архаический, классический, эллинистический." },
    { question: "Верно ли утверждение, что натурфилософия как идея доминировала в период классики?", answer: "Да, натурфилософия как идея действительно доминировала в период классики, акцентируя внимание на природе и её законах." },
    { question: "Основа мира число, кому принадлежит данная концепция?", answer: "Концепция 'основа мира — число' принадлежит Пифагору." },
    { question: "С чем Демокрит ассоциировал белое?", answer: "Демокрит ассоциировал белое с ясностью и светом." },
    { question: "С чем Демокрит ассоциировал черное?", answer: "Демокрит ассоциировал черное с тьмой и неопределённостью." },
    { question: "Объясните философскую концепцию 'человек — мера всех вещей'.", answer: "Философская концепция 'человек — мера всех вещей' подразумевает, что восприятие и оценка мира зависят от человеческого опыта и субъективности." },
    { question: "В чем схожесть Римской красоты и греческой? В чем отличие?", answer: "Схожесть: стремление к идеалам красоты. Отличие: греческая эстетика более идеализирована, римская — более реалистична и практична." },
    { question: "Кому или чему, по мнению Цицерона, должны подражать ораторы и человек?", answer: "По мнению Цицерона, ораторы и человек должны подражать природе и великим мастерам." },
    { question: "Что значит совершённый человек?", answer: "Совершённый человек — это идеал, обладающий всеми добродетелями и высоким моральным уровнем." },
    { question: "Возрождение характеризуют как эпоху классической древности. О какой древности идёт речь?", answer: "Эпоха Возрождения характеризуется как эпоха классической древности, относящаяся к античной Греции и Риму." },
    { question: "Периодизация эпохи Возрождения?", answer: "Периодизация эпохи Возрождения: раннее Возрождение, высокое Возрождение, позднее Возрождение." },
    { question: "Что такое гуманизм?", answer: "Гуманизм — это культурное и философское движение, акцентирующее внимание на человеке и его ценностях, а также на изучении античной культуры." },
    { question: "В чем заключается философское противоречие философов об эпохе Возрождения?", answer: "Философское противоречие в эпохе Возрождения заключается в том, что гуманисты искали античные идеалы, но также стремились к новому видению человека и мира." },
    { question: "Верно ли утверждение об эпохе Возрождения: 'Красота — это такое качество, которое не обязательно заложено природой. Художник главный'?", answer: "Да, это утверждение верно: красота не всегда природна, и художник играет ключевую роль в её создании." },
    { question: "В чем сходства и отличия эпохи барокко и рококо?", answer: "Сходства: эмоциональность и декоративность. Отличия: барокко более динамично и театрально, рококо — легковесно и игриво." },
    { question: "Что такое принцип сенсуализма?", answer: "Принцип сенсуализма акцентирует внимание на чувственном восприятии и ощущениях как главных источниках знания." },
    { question: "Ключевые принципы красоты?", answer: "Ключевые принципы красоты: гармония, симметрия, пропорция, оригинальность." },
    { question: "Почему пуритане (английские протестанты) сталкивались с английскими просветителями?", answer: "Пуритане сталкивались с просветителями из-за различий в взглядах на мораль, искусство и общественные нормы." },
    { question: "Что такое воображение?", answer: "Воображение — это способность создавать образы и идеи, не основанные на непосредственном восприятии." },
    { question: "Почему воображение слабо применимо к философии?", answer: "Воображение слабо применимо к философии, так как философия требует логики и доказательств, а не субъективных образов." },
    { question: "Почему Жан Жак Руссо критиковал стиль рококо? Каким должно быть искусство, по его мнению?", answer: "Жан Жак Руссо критиковал стиль рококо за его легкость и поверхностность; он считал, что искусство должно быть глубоким и искренним." },
    { question: "Охарактеризуйте художественный вкус, дурной вкус, изощрённый вкус.", answer: "Художественный вкус — способность оценивать искусство; дурной вкус — отсутствие чувства прекрасного; изощрённый вкус — высокая степень эстетической чувствительности." },
    { question: "Верно ли утверждение: 'Вольтер считал, что художественный вкус только для богатых'?", answer: "Нет, Вольтер не считал, что художественный вкус только для богатых; он подчеркивал, что искусство должно быть доступно всем." },
    { question: "Опишите педагогические идеи Дени Дидро.", answer: "Педагогические идеи Дени Дидро включали развитие критического мышления и самовыражения, а также акцент на важности искусства в образовании." },
    { question: "О каком противнике для духовного искусства идёт речь: 'На этих грубых весах духовные заслуги искусства не имеют веса'?", answer: "Речь идет о противнике, который считает, что духовные заслуги искусства не имеют значения по сравнению с материальными." },
    { question: "Какой критерий, по мнению Гёте, может оценить личность Творца и как его прокачать?", answer: "По мнению Гёте, личность Творца можно оценить по его способности к самовыражению и оригинальности." },
    { question: "Как решить проблему вдохновения?", answer: "Проблему вдохновения можно решить через практику, дисциплину и исследование новых идей." },
    { question: "Верно ли утверждение: 'Умение себя изолировать — это способ добиться истинного художественного совершенства'?", answer: "Да, утверждение верно: умение себя изолировать может помочь в достижении истинного художественного совершенства." },
    { question: "Авангард — это направление в искусстве или стиль?", answer: "Авангард — это направление в искусстве, стремящееся к новаторству и экспериментам." },
    { question: "Верно ли утверждение: 'Наивное искусство и примитивизм — это разные стили'?", answer: "Да, утверждение верно: наивное искусство и примитивизм — это разные стили, но имеют общие черты в простоте и искренности." },
    { question: "Чем отличается абстракционизм от супрематизма?", answer: "Абстракционизм — это отказ от представления объектов, тогда как супрематизм акцентирует внимание на геометрических формах и цветах." },
    { question: "Чем отличается супрематизм от кубизма?", answer: "Супрематизм фокусируется на абстрактных формах и цветах, а кубизм — на многогранных формах и представлении объектов с разных точек зрения." },
    { question: "Что такое дриппинг?", answer: "Дриппинг — это техника живописи, при которой краска капает или распыляется на холст." },
    { question: "Фовизм — что это за стиль и чем он отличается от наивного искусства?", answer: "Фовизм — это стиль, акцентирующий яркие цвета и эмоциональность, отличающийся от наивного искусства своей выразительностью и техникой." },
    { question: "Охарактеризуйте стиль кубизм.", answer: "Кубизм — это стиль, разлагающий объекты на геометрические формы и показывающий их с разных ракурсов." },
    { question: "В чем заключается концепция чёрного квадрата?", answer: "Концепция чёрного квадрата — это отказ от традиционного искусства, выражение абстрактного и концептуального подхода." },
    { question: "Охарактеризуйте стиль футуризм.", answer: "Футуризм — это стиль, выражающий динамику, скорость и движение, часто с использованием ярких цветов и агрессивных форм." },
    { question: "Абстрактный экспрессионизм чем отличается от абстракционизма?", answer: "Абстрактный экспрессионизм акцентирует эмоции и чувства, в то время как абстракционизм фокусируется на форме и цвете." },
    { question: "Перечислите ошибки, которые часто допускают в композиции.", answer: "Ошибки в композиции: неправильная пропорция, несоответствие элементов, отсутствие фокуса, негармоничное сочетание цветов." },
    { question: "Охарактеризуйте концепцию прерафаэлитов.", answer: "Концепция прерафаэлитов — это стремление к искренности, детализированности и возврату к средневековым и ренессансным идеалам." },
    { question: "Чем отличается импрессионизм от реализма?", answer: "Импрессионизм фокусируется на восприятии света и цвета, тогда как реализм стремится к точному изображению действительности." },
    { question: "Чем отличается реализм от романтизма?", answer: "Реализм акцентирует внимание на повседневной жизни, тогда как романтизм — на эмоциях, фантазии и идеализированных образах." }
];

const faqContainer = document.getElementById('faq-container');
const searchInput = document.getElementById('search');

function displayFAQs(faqs) {
    faqContainer.innerHTML = '';
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
        faqItem.innerHTML = `
            <span class="number">${index + 1}.</span>
            <h2 class="question">${faq.question}</h2>
            <p class="answer">${faq.answer}</p>
        `;
        faqItem.addEventListener('click', () => {
            const answer = faqItem.querySelector('.answer');
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none'; // Переключение видимости ответа
        });
        faqContainer.appendChild(faqItem);
    });
}

function filterFAQs() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredFAQs = faqData.filter((faq, index) => 
        faq.question.toLowerCase().includes(searchTerm) || 
        faq.answer.toLowerCase().includes(searchTerm) ||
        (index + 1).toString() === searchTerm // Поиск по номеру
    );
    displayFAQs(filteredFAQs);
}

searchInput.addEventListener('input', filterFAQs);

// Изначально отображаем все вопросы
displayFAQs(faqData);