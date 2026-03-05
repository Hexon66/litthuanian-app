import { Unit } from "../curriculum";

export const unit2: Unit = {
    id: "unit-2",
    title: "Unit 2: The Future & Locative (A2)",
    description: "Discussing plans and locations",
    lessons: [
        {
            id: "lesson-2-1",
            title: "Future Tense",
            description: "What will happen?",
            exercises: [
                {
                    id: "ex-2-1-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'I will go'?",
                    options: ["Aš eisiu", "Aš ėjau", "Aš einu", "Tu eisi"],
                    correctAnswer: "Aš eisiu",
                    translation: "I will go",
                    audioText: "Aš eisiu namo."
                },
                {
                    id: "ex-2-1-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Mes dirbsime", "Jie dirbs", "Aš dirbsiu", "Mes dirbome"],
                    correctAnswer: "Mes dirbsime",
                    translation: "We will work",
                    audioText: "Mes dirbsime"
                },
                {
                    id: "ex-2-1-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Gyvensiu", "I will live", "Važiuosiu", "I will ride/drive"],
                    correctAnswer: "Gyvensiu:I will live,Važiuosiu:I will ride/drive"
                },
                {
                    id: "ex-2-1-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'They will buy tickets.'",
                    options: ["Jie", "pirks", "bilietus.", "bilietus"],
                    correctAnswer: ["Jie", "pirks", "bilietus."],
                    audioText: "Jie pirks bilietus."
                },
                {
                    id: "ex-2-1-5",
                    type: "fill_in_blank",
                    prompt: "Will you see? = Ar tu maty____?",
                    correctAnswer: "si",
                    translation: "Will you see?",
                    audioText: "Ar tu matysi?"
                }
            ]
        },
        {
            id: "lesson-2-2",
            title: "Locative Case",
            description: "Saying 'in' or 'at'.",
            exercises: [
                {
                    id: "ex-2-2-1",
                    type: "multiple_choice",
                    prompt: "Choose the correct locative form: 'Aš esu (miestas)'",
                    options: ["mieste", "miestą", "miesto", "miestu"],
                    correctAnswer: "mieste",
                    translation: "I am in the city",
                    audioText: "Aš esu mieste."
                },
                {
                    id: "ex-2-2-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Parduotuvėje", "Mokykloje", "Darne", "Kavinėje"],
                    correctAnswer: "Parduotuvėje",
                    translation: "In the shop",
                    audioText: "Parduotuvėje"
                },
                {
                    id: "ex-2-2-3",
                    type: "matching",
                    prompt: "Match Nominative to Locative",
                    options: ["Kavinė", "Kavinėje", "Namas", "Name"],
                    correctAnswer: "Kavinė:Kavinėje,Namas:Name"
                },
                {
                    id: "ex-2-2-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'We will live in Vilnius.'",
                    options: ["Mes", "gyvensime", "Vilniuje.", "Vilnių."],
                    correctAnswer: ["Mes", "gyvensime", "Vilniuje."],
                    audioText: "Mes gyvensime Vilniuje."
                },
                {
                    id: "ex-2-2-5",
                    type: "fill_in_blank",
                    prompt: "At work = Dar____",
                    correctAnswer: "be",
                    translation: "At work (from 'darbas')",
                    audioText: "Darbe"
                }
            ]
        },
        {
            id: "lesson-2-3",
            title: "Making Plans",
            description: "Tomorrow and next week.",
            exercises: [
                {
                    id: "ex-2-3-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Next week'?",
                    options: ["Kitą savaitę", "Šią savaitę", "Praeitą savaitę", "Rytoj"],
                    correctAnswer: "Kitą savaitę",
                    translation: "Next week",
                    audioText: "Kitą savaitę"
                },
                {
                    id: "ex-2-3-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Ką veiksi rytoj?", "Ką veikei vakar?", "Kur būsi rytoj?", "Ar eisime rytoj?"],
                    correctAnswer: "Ką veiksi rytoj?",
                    translation: "What will you do tomorrow?",
                    audioText: "Ką veiksi rytoj?"
                },
                {
                    id: "ex-2-3-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'Next month we will travel.'",
                    options: ["Kitą", "mėnesį", "mes", "keliausime."],
                    correctAnswer: ["Kitą", "mėnesį", "mes", "keliausime."],
                    audioText: "Kitą mėnesį mes keliausime."
                },
                {
                    id: "ex-2-3-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Rytoj", "Tomorrow", "Poryt", "The day after tomorrow"],
                    correctAnswer: "Rytoj:Tomorrow,Poryt:The day after tomorrow"
                },
                {
                    id: "ex-2-3-5",
                    type: "fill_in_blank",
                    prompt: "Will you go? = Ar eisi____?",
                    correctAnswer: "te",
                    translation: "Will you (plural) go?",
                    audioText: "Ar eisite?"
                }
            ]
        },
        {
            id: "lesson-2-4",
            title: "Transport (Instrumental)",
            description: "Traveling 'by' something.",
            exercises: [
                {
                    id: "ex-2-4-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'By bus'?",
                    options: ["Autobusu", "Autobuse", "Autobusą", "Autobusas"],
                    correctAnswer: "Autobusu",
                    translation: "By bus",
                    audioText: "Autobusu"
                },
                {
                    id: "ex-2-4-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Aš važiuosiu traukiniu", "Aš važiavau mašina", "Aš važiuoju taksi", "Jis važiuos autobusu"],
                    correctAnswer: "Aš važiuosiu traukiniu",
                    translation: "I will go by train",
                    audioText: "Aš važiuosiu traukiniu"
                },
                {
                    id: "ex-2-4-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'We will fly by plane.'",
                    options: ["Mes", "skrisime", "lėktuvu.", "lėktuve."],
                    correctAnswer: ["Mes", "skrisime", "lėktuvu."],
                    audioText: "Mes skrisime lėktuvu."
                },
                {
                    id: "ex-2-4-4",
                    type: "matching",
                    prompt: "Match the methods of transport",
                    options: ["Taksi", "By taxi (indeclinable)", "Mašina", "By car"],
                    correctAnswer: "Taksi:By taxi (indeclinable),Mašina:By car"
                },
                {
                    id: "ex-2-4-5",
                    type: "fill_in_blank",
                    prompt: "By bicycle = Dvirat____",
                    correctAnswer: "iu",
                    translation: "By bicycle",
                    audioText: "Dviračiu"
                }
            ]
        },
        {
            id: "lesson-2-5",
            title: "Future Story",
            description: "Connecting sentences.",
            exercises: [
                {
                    id: "ex-2-5-1",
                    type: "sentence_arrange",
                    prompt: "Translate 'Tomorrow I will be at home and I will read a book.'",
                    options: ["Rytoj", "būsiu", "namuose", "ir", "skaitysiu", "knygą."],
                    correctAnswer: ["Rytoj", "būsiu", "namuose", "ir", "skaitysiu", "knygą."],
                    audioText: "Rytoj būsiu namuose ir skaitysiu knygą."
                },
                {
                    id: "ex-2-5-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Kitą savaitę mes važiuosime į pajūrį", "Vakar mes buvome pajūryje", "Rytoj as eisiu į mišką", "Kitą mėnesį jie keliaus lėktuvu"],
                    correctAnswer: "Kitą savaitę mes važiuosime į pajūrį",
                    translation: "Next week we will go to the seaside",
                    audioText: "Kitą savaitę mes važiuosime į pajūrį"
                },
                {
                    id: "ex-2-5-3",
                    type: "multiple_choice",
                    prompt: "How do you say 'We will see!'?",
                    options: ["Pamatysime!", "Pamatėme!", "Matome!", "Žiūrime!"],
                    correctAnswer: "Pamatysime!",
                    translation: "We will see!",
                    audioText: "Pamatysime!"
                },
                {
                    id: "ex-2-5-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Miegosiu", "I will sleep", "Rašysiu", "I will write"],
                    correctAnswer: "Miegosiu:I will sleep,Rašysiu:I will write"
                },
                {
                    id: "ex-2-5-5",
                    type: "fill_in_blank",
                    prompt: "It will be interesting = Bus įdo____",
                    correctAnswer: "mu",
                    translation: "It will be interesting",
                    audioText: "Bus įdomu"
                }
            ]
        }
    ]
};
