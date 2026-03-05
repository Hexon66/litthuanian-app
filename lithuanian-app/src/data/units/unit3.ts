import { Unit } from "../curriculum";

export const unit3: Unit = {
    id: "unit-3",
    title: "Unit 3: Genitive & Quantities (A2)",
    description: "Expressing 'how much' and possession",
    lessons: [
        {
            id: "lesson-3-1",
            title: "Possession (Whose?)",
            description: "Saying who owns what.",
            exercises: [
                {
                    id: "ex-3-1-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'My brother's car'?",
                    options: ["Mano brolio mašina", "Mano brolis mašina", "Mano brolį mašiną", "Mano broliui mašina"],
                    correctAnswer: "Mano brolio mašina",
                    translation: "My brother's car",
                    audioText: "Tai yra mano brolio mašina."
                },
                {
                    id: "ex-3-1-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Kieno tai knyga?", "Kur tai knyga?", "Kokia tai knyga?", "Kam ta knyga?"],
                    correctAnswer: "Kieno tai knyga?",
                    translation: "Whose book is this?",
                    audioText: "Kieno tai knyga?"
                },
                {
                    id: "ex-3-1-3",
                    type: "matching",
                    prompt: "Match Nominative to Genitive",
                    options: ["Draugas", "Draugo", "Mokytoja", "Mokytojos"],
                    correctAnswer: "Draugas:Draugo,Mokytoja:Mokytojos"
                },
                {
                    id: "ex-3-1-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'This is the student's book.'",
                    options: ["Tai", "yra", "studento", "knyga."],
                    correctAnswer: ["Tai", "yra", "studento", "knyga."],
                    audioText: "Tai yra studento knyga."
                },
                {
                    id: "ex-3-1-5",
                    type: "fill_in_blank",
                    prompt: "Sister's = Sese____",
                    correctAnswer: "ries",
                    translation: "Sister's (from 'sesuo')",
                    audioText: "Seseries"
                }
            ]
        },
        {
            id: "lesson-3-2",
            title: "Quantities (A lot, A little)",
            description: "Daug, mažai, and numbers.",
            exercises: [
                {
                    id: "ex-3-2-1",
                    type: "multiple_choice",
                    prompt: "Choose the correct ending: 'Daug (žmonės)'",
                    options: ["žmonių", "žmones", "žmonėms", "žmonėmis"],
                    correctAnswer: "žmonių",
                    translation: "A lot of people",
                    audioText: "Parduotuvėje yra daug žmonių."
                },
                {
                    id: "ex-3-2-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Man reikia nedaug vandens", "Aš noriu daug vandens", "Ji turi mažai laiko", "Mes neturime pinigų"],
                    correctAnswer: "Ji turi mažai laiko",
                    translation: "She has little time",
                    audioText: "Ji turi mažai laiko"
                },
                {
                    id: "ex-3-2-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Daug", "Much/Many", "Mažai", "Little/Few"],
                    correctAnswer: "Daug:Much/Many,Mažai:Little/Few"
                },
                {
                    id: "ex-3-2-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'We have a lot of work.'",
                    options: ["Mes", "turime", "daug", "darbo.", "darbų."],
                    correctAnswer: ["Mes", "turime", "daug", "darbo."],
                    audioText: "Mes turime daug darbo."
                },
                {
                    id: "ex-3-2-5",
                    type: "fill_in_blank",
                    prompt: "Little money = Mažai pini____",
                    correctAnswer: "gų",
                    translation: "Little money",
                    audioText: "Mažai pinigų"
                }
            ]
        },
        {
            id: "lesson-3-3",
            title: "Having to / Needing to",
            description: "Reikia + Genitive.",
            exercises: [
                {
                    id: "ex-3-3-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'I need help (pagalba)'?",
                    options: ["Man reikia pagalbos", "Man reikia pagalbą", "Aš reikia pagalba", "Man pagalboje"],
                    correctAnswer: "Man reikia pagalbos",
                    translation: "I need help",
                    audioText: "Man reikia pagalbos."
                },
                {
                    id: "ex-3-3-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Ar tau reikia vandens?", "Ar jums reikia pagalbos?", "Man reikia kavos", "Jums reikia miego"],
                    correctAnswer: "Ar jums reikia pagalbos?",
                    translation: "Do you (formal/plural) need help?",
                    audioText: "Ar jums reikia pagalbos?"
                },
                {
                    id: "ex-3-3-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'He needs a new car.'",
                    options: ["Jam", "reikia", "naujos", "mašinos.", "mašiną."],
                    correctAnswer: ["Jam", "reikia", "naujos", "mašinos."],
                    audioText: "Jam reikia naujos mašinos."
                },
                {
                    id: "ex-3-3-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Man reikia", "I need", "Tau reikia", "You need"],
                    correctAnswer: "Man reikia:I need,Tau reikia:You need"
                },
                {
                    id: "ex-3-3-5",
                    type: "fill_in_blank",
                    prompt: "I need peace = Man reikia ramy____",
                    correctAnswer: "bės",
                    translation: "I need peace/quiet",
                    audioText: "Man reikia ramybės"
                }
            ]
        },
        {
            id: "lesson-3-4",
            title: "Genitive Prepositions",
            description: "Iš, Nuo, Iki, Prie, Po.",
            exercises: [
                {
                    id: "ex-3-4-1",
                    type: "multiple_choice",
                    prompt: "Choose the correct form: 'Mano namas yra prie (parkas)'",
                    options: ["parko", "parke", "parką", "parkui"],
                    correctAnswer: "parko",
                    translation: "My house is by the park",
                    audioText: "Mano namas yra prie parko."
                },
                {
                    id: "ex-3-4-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Nuo ryto iki vakaro", "Iš namų į darbą", "Prie jūros", "Po darbo"],
                    correctAnswer: "Nuo ryto iki vakaro",
                    translation: "From morning until evening",
                    audioText: "Nuo ryto iki vakaro"
                },
                {
                    id: "ex-3-4-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'I am going from the shop.'",
                    options: ["Aš", "einu", "iš", "parduotuvės."],
                    correctAnswer: ["Aš", "einu", "iš", "parduotuvės."],
                    audioText: "Aš einu iš parduotuvės."
                },
                {
                    id: "ex-3-4-4",
                    type: "matching",
                    prompt: "Match the prepositions",
                    options: ["Iš", "From/Out of", "Prie", "By/Near"],
                    correctAnswer: "Iš:From/Out of,Prie:By/Near"
                },
                {
                    id: "ex-3-4-5",
                    type: "fill_in_blank",
                    prompt: "After work = Po dar____",
                    correctAnswer: "bo",
                    translation: "After work",
                    audioText: "Po darbo"
                }
            ]
        },
        {
            id: "lesson-3-5",
            title: "Genitive in Practice",
            description: "Mixed sentences using Genitive.",
            exercises: [
                {
                    id: "ex-3-5-1",
                    type: "sentence_arrange",
                    prompt: "Translate 'There are a lot of interesting places near the sea.'",
                    options: ["Prie", "jūros", "yra", "daug", "įdomių", "vietų."],
                    correctAnswer: ["Prie", "jūros", "yra", "daug", "įdomių", "vietų."],
                    audioText: "Prie jūros yra daug įdomių vietų."
                },
                {
                    id: "ex-3-5-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Man reikia išmokti daug naujų žodžių", "Jam reikia daugiau laisvo laiko", "Mums trūksta pinigų", "Man nereikia pagalbos"],
                    correctAnswer: "Man reikia išmokti daug naujų žodžių",
                    translation: "I need to learn a lot of new words",
                    audioText: "Man reikia išmokti daug naujų žodžių"
                },
                {
                    id: "ex-3-5-3",
                    type: "multiple_choice",
                    prompt: "How do you say 'A little bit of water'?",
                    options: ["Šiek tiek vandens", "Daug vandens", "Vandenį", "Be vandens"],
                    correctAnswer: "Šiek tiek vandens",
                    translation: "A little bit of water",
                    audioText: "Prašau šiek tiek vandens."
                },
                {
                    id: "ex-3-5-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Neturiu", "I don't have", "Šiek tiek", "A little bit"],
                    correctAnswer: "Neturiu:I don't have,Šiek tiek:A little bit"
                },
                {
                    id: "ex-3-5-5",
                    type: "fill_in_blank",
                    prompt: "I don't have time = Aš neturiu lai____",
                    correctAnswer: "ko",
                    translation: "I don't have time",
                    audioText: "Aš neturiu laiko."
                }
            ]
        }
    ]
};
