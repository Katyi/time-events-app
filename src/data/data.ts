const data = [
  {
    id: '1',
    index: 1,
    label: '60-е',
    yearsInterval: {
      start: 1961,
      last: 1969,
    },
    details: [
      {
        year: 1961,
        description:
          'Советский космонавт Юрий Гагарин на корабле "Восток-1" совершил один оборот вокруг Земли, проведя в космосе 108 минут. Это событие стало знаменательным моментом в истории человечества и ознаменовало начало новой эры освоения космоса.',
      },
      {
        year: 1962,
        description:
          'Английская рок-группа The Rolling Stones выпустила свой первый сингл "Come On (Let`s Go)".',
      },
      {
        year: 1964,
        description:
          'В СССР был запущен космический аппарат "Восход-1", на котором впервые в мире был совершен выход человека в открытый космос (Алексей Леонов).',
      },
      {
        year: 1967,
        description:
          'Сто лет одиночества, Габриэль Гарсиа Маркес. Магический реализм, повествующий о расцвете и падении семьи Буэндиа и их вымышленного города Макондо в Колумбии.',
      },
      {
        year: 1969,
        description:
          'Высадка на Луну корабля «Аполлон-11» - Первая пилотируемая миссия по высадке на Луну, ознаменовавшая огромный скачок для человечества в освоении космоса.',
      },
    ],
  },
  {
    id: '2',
    index: 2,
    label: '70-е',
    yearsInterval: {
      start: 1970,
      last: 1977,
    },
    details: [
      {
        year: 1970,
        description:
          'Разработка микропроцессора - подготовила почву для революции персональных компьютеров и миниатюризации электроники',
      },
      {
        year: 1971,
        description:
          'Открытие прионов - новый тип инфекционного агента, состоящего исключительно из белков, фундаментально изменивший наше понимание болезней.',
      },
      {
        year: 1972,
        description:
          'Крестный отец, США (реж. Фрэнсис Форд Коппола). Расширенная история семьи Корлеоне под руководством патриарха Вито Корлеоне (Марлон Брандо) и превращение его младшего сына, Майкла (Аль Пачино), из нежелательного члена семьи в безжалостного мафиозного босса. Широко признан одним из величайших фильмов всех времен.',
      },
      {
        year: 1976,
        description:
          'Смерть Энди Уорхола в 1976 году. Уорхол считается одним из самых влиятельных художников 20-го века, и его смерть ознаменовала собой конец эпохи поп-арта.',
      },
      {
        year: 1977,
        description:
          'Запуск космических аппаратов «Вояджер-1» и «Вояджер-2» - Пионерские космические аппараты, отправленные для исследования внешней части Солнечной системы и за ее пределы, предоставившие беспрецедентные данные и изображения.',
      },
    ],
  },
  {
    id: '80-е',
    index: 3,
    label: '80-е',
    yearsInterval: {
      start: 1980,
      last: 1989,
    },
    details: [
      {
        year: 1980,
        description:
          'XXII Летние Олимпийские игры, проходившие в Москве, стали знаменательным событием как для СССР, так и для всего мира.',
      },
      {
        year: 1983,
        description:
          'Международный фестиваль документального театра в Ямагате (Япония) - первый год проведения этого фестиваля, который стал платформой для инновационного документального театра со всего мира.',
      },
      {
        year: 1984,
        description:
          'Открытие ВИЧ - идентификация вируса иммунодефицита человека, приведшая к разработке жизненно важных методов лечения и профилактики',
      },
      {
        year: 1985,
        description:
          'Рассказ служанки, Маргарет Этвуд. Антиутопический роман, изображающий будущую Америку, где женщины принудительно вовлекаются в деторождение в тоталитарном режиме.',
      },
      {
        year: 1987,
        description:
          'Роберт Уилсон ставит "Саломею" Оскара Уайльда в Американском репертуарном театре (Кембридж, США) - Визуально ошеломляющая и новаторская интерпретация классической пьесы.',
      },
      {
        year: 1989,
        description:
          'Падение Берлинской стены. Это событие ознаменовало собой конец холодной войны и оказало глубокое влияние на художников во всем мире.',
      },
    ],
  },
  {
    id: '4',
    index: 4,
    label: '90-е',
    yearsInterval: {
      start: 1990,
      last: 1999,
    },
    details: [
      {
        year: 1990,
        description:
          'Запуск космического телескопа «Хаббл» - революционизировал астрономию, предоставив детальные изображения Вселенной в видимом и ультрафиолетовом свете.',
      },
      {
        year: 1993,
        description:
          'Список Шиндлера, США (реж. Стивен Спилберг). Историческая драма, основанная на реальной истории Оскара Шиндлера (Лиам Нисон), немецкого бизнесмена, который спас жизни более чем тысяче евреев, наняв их на свои фабрики во время Холокоста. Шедевр Стивена Спилберга получил высокую оценку за его беспощадное изображение темной главы истории.',
      },
      {
        year: 1994,
        description:
          'Смерть Курта Кобейна. Кобейн был фронтменом группы Nirvana, одной из самых популярных рок-групп 1990-х годов. Его смерть ознаменовала собой конец эпохи гранжа.',
      },
      {
        year: 1995,
        description:
          'Семь, США (реж. Дэвид Финчер). Лента рассказывает о расследовании двумя детективами-напарниками серии убийств, которые связаны с семью смертными грехами. В главных ролях: Брэд Питт, Морган Фримен, Гвинет Пэлтроу и Кевин Спейси.',
      },
      {
        year: 1997,
        description:
          'Умница Уилл Хантинг, США (реж. Гас Ван Сент). Драма о молодом человеке (Мэтт Деймон) с гениальным IQ, который работает уборщиком в Массачусетском технологическом институте. Робин Уильямс получил Оскар за лучшую мужскую роль второго плана за роль психотерапевта, помогающего молодому человеку разобраться со своим прошлым и потенциалом.',
      },
      {
        year: 1999,
        description:
          'Матрица, США (реж. Лана и Эндрю Вачовски). Научно-фантастический боевик, который рассказывает о мрачном будущем, где человечество находится в рабстве у машин. Люди подключены к симуляции реальности "Матрица", которая скрывает от них истинную природу их мира.',
      },
    ],
  },
  {
    id: '5',
    index: 5,
    label: '00-е',
    yearsInterval: {
      start: 2001,
      last: 2009,
    },
    details: [
      {
        year: 2001,
        description:
          'Унесенные призраками, Япония (реж. Хаяо Миядзаки). Японский анимационный фэнтезийный фильм, написанный и снятый Хаяо Миядзаки, рассказывающий историю Тихиро Огино, угрюмой десятилетней девочки, которая, переезжая в новый район, попадает в мир духов (ками).',
      },
      {
        year: 2003,
        description:
          'Завершение проекта «Геном человека» - расшифрован весь геном человека, открывая двери для персонализированной медицины и достижений в понимании болезней.',
      },
      {
        year: 2004,
        description:
          'Облачный атлас, Дэвид Митчелл. Амбициозный и сложный роман с шестью переплетенными историями, охватывающими столетия и континенты, исследующий темы реинкарнации и взаимосвязи человечества.',
      },
      {
        year: 2007,
        description:
          'Подъем социально-ориентированного документального театра, например, "Нефть" (Великобритания) The Faction Collective, исследующий проблемы окружающей среды и корпоративную жадность.',
      },
      {
        year: 2008,
        description:
          'Мировой финансовый кризис. Этот кризис, начавшийся в США, привел к рецессии в мировой экономике.',
      },
      {
        year: 2009,
        description:
          'Принятие Киотского протокола. Этот международный договор, направленный на борьбу с изменением климата, вступил в силу после его ратификации достаточным количеством стран.',
      },
    ],
  },
  {
    id: '6',
    index: 6,
    label: '10-е',
    yearsInterval: {
      start: 2010,
      last: 2019,
    },
    details: [
      {
        year: 2010,
        description:
          'Открытие Музея современного искусства Нью-Йорка (MoMA PS1) в Лонг-Айленд-Сити, Нью-Йорк (2010): Это расширение MoMA стало одним из крупнейших пространств для современного искусства в США.',
      },
      {
        year: 2012,
        description:
          'Открытие бозона Хиггса - подтверждено существование поля Хиггса, фундаментальной частицы, критически важной для нашего понимания массы во Вселенной.',
      },
      {
        year: 2013,
        description:
          'Щегол, Донна Тарт. Роман назван в честь картины известного голландского художника Карела Фабрициуса «Щегол» (1654), которая играет важную роль в судьбе главного героя. Книга стала лауреатом многих наград, в том числе Пулитцеровской премии за художественную книгу 2014 года.',
      },
      {
        year: 2014,
        description:
          'Летние Олимпийские игры в Афинах: Греция впервые с 1896 года становится лидером в медальном зачете летних Олимпийских игр, которые проводятся.',
      },
      {
        year: 2015,
        description:
          'Премьера "Гамильтона" Лина-Мануэля Миранды (Бродвей) -  Новый взгляд на историю Александра Гамильтона с помощью хип-хопа и традиционных бродвейских стилей.',
      },
      {
        year: 2017,
        description:
          'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 2018,
        description:
          'CRISPR редактирует гены в эмбрионах человека и лечит серповидноклеточную анемию у мышей, открывая новую эру в медицине.',
      },
      {
        year: 2019,
        description:
          'Паразиты, Южная Корея (реж. Пон Чжун Хо). Южнокорейский триллер в жанре черной комедии, рассказывающий о членах бедной семьи, которые замышляют стать нанятыми богатой семьей. Фильм исследует темы классового неравенства и социального неравенства.',
      },
    ],
  },
];

export default data;
