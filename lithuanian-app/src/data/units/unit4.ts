import { Unit } from "../curriculum";

export const unit4: Unit = {
    id: "unit-4",
    title: "Unit 4: Dative & Prepositions (A2)",
    description: "Giving directions and expressing preferences",
    lessons: [
        {
            id: "lesson-4-1",
            title: "Liking & Disliking",
            description: "Using Dative to express feelings.",
            exercises: [
                {
                    id: "ex-4-1-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'I like coffee'?",
                    options: ["Man patinka kava", "Aš patinka kava", "Man patinku kava", "Aš mėgstu kavai"],
                    correctAnswer: "Man patinka kava",
                    translation: "I like coffee",
                    audioText: "Man labai patinka kava."
                },
                {
                    id: "ex-4-1-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Jam nepatinka žiema", "Jai patinka vasara", "Mus patinka kinas", "Jums patinka skaityti"],
                    correctAnswer: "Jam nepatinka žiema",
                    translation: "He doesn't like winter",
                    audioText: "Jam nepatinka žiema"
                },
                {
                    id: "ex-4-1-3",
                    type: "matching",
                    prompt: "Match the Dative pronouns",
                    options: ["Man", "To me/For me", "Jam", "To him/For him", "Mums", "To us/For us"],
                    correctAnswer: "Man:To me/For me,Jam:To him/For him,Mums:To us/For us"
                },
                {
                    id: "ex-4-1-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'She likes to read books.'",
                    options: ["Jai", "patinka", "skaityti", "knygas.", "knyga."],
                    correctAnswer: ["Jai", "patinka", "skaityti", "knygas."],
                    audioText: "Jai patinka skaityti knygas."
                },
                {
                    id: "ex-4-1-5",
                    type: "fill_in_blank",
                    prompt: "They like = J____ patinka",
                    correctAnswer: "iems",
                    translation: "They (masc) like",
                    audioText: "Jiems patinka"
                }
            ]
        },
        {
            id: "lesson-4-2",
            title: "Giving & Sending",
            description: "Dative as indirect object.",
            exercises: [
                {
                    id: "ex-4-2-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'I give you a book'?",
                    options: ["Aš duodu tau knygą", "Aš duodu tave knyga", "Aš duodu tavo knygoje", "Aš duoti tu knyga"],
                    correctAnswer: "Aš duodu tau knygą",
                    translation: "I give you a book",
                    audioText: "Aš duodu tau knygą."
                },
                {
                    id: "ex-4-2-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Ji parašė man laišką", "Jis skambins draugui", "Mes nupirkome jam dovaną", "Jie duos mums pinigų"],
                    correctAnswer: "Jis skambins draugui",
                    translation: "He will call a friend",
                    audioText: "Jis skambins draugui"
                },
                {
                    id: "ex-4-2-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Duoti", "To give", "Skambinti", "To call (phone)"],
                    correctAnswer: "Duoti:To give,Skambinti:To call (phone)"
                },
                {
                    id: "ex-4-2-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'We bought a gift for mother.'",
                    options: ["Mes", "nupirkome", "dovaną", "mamai."],
                    correctAnswer: ["Mes", "nupirkome", "dovaną", "mamai."],
                    audioText: "Mes nupirkome dovaną mamai."
                },
                {
                    id: "ex-4-2-5",
                    type: "fill_in_blank",
                    prompt: "Call me tomorrow = Paskambink ma____ rytoj",
                    correctAnswer: "n",
                    translation: "Call me tomorrow",
                    audioText: "Paskambink man rytoj"
                }
            ]
        },
        {
            id: "lesson-4-3",
            title: "Prepositions 'Į' and 'Iš'",
            description: "To and From.",
            exercises: [
                {
                    id: "ex-4-3-1",
                    type: "multiple_choice",
                    prompt: "Choose the correct phrase for 'To the store':",
                    options: ["Į parduotuvę", "Iš parduotuvės", "Prie parduotuvės", "Parduotuvėje"],
                    correctAnswer: "Į parduotuvę",
                    translation: "To the store",
                    audioText: "Aš einu į parduotuvę."
                },
                {
                    id: "ex-4-3-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Mes važiuojame į Lietuvą", "Jis grįžta iš darbo", "Ji eina į mokyklą", "Aš skrendu iš Vilniaus"],
                    correctAnswer: "Jis grįžta iš darbo",
                    translation: "He is returning from work",
                    audioText: "Jis grįžta iš darbo"
                },
                {
                    id: "ex-4-3-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'Next week I will fly to London.'",
                    options: ["Kitą", "savaitę", "skrissiu", "į", "Londoną."],
                    correctAnswer: ["Kitą", "savaitę", "skrissiu", "į", "Londoną."],
                    audioText: "Kitą savaitę skrissiu į Londoną."
                },
                {
                    id: "ex-4-3-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Į (Accusative)", "To / Into", "Iš (Genitive)", "From / Out of"],
                    correctAnswer: "Į (Accusative):To / Into,Iš (Genitive):From / Out of"
                },
                {
                    id: "ex-4-3-5",
                    type: "fill_in_blank",
                    prompt: "We are going to Kaunas = Važiuojame į Kau____",
                    correctAnswer: "ną",
                    translation: "We are going to Kaunas",
                    audioText: "Važiuojame į Kauną"
                }
            ]
        },
        {
            id: "lesson-4-4",
            title: "Preposition 'Su' (Instrumental)",
            description: "With someone or something.",
            exercises: [
                {
                    id: "ex-4-4-1",
                    type: "multiple_choice",
                    prompt: "Choose the correct form for 'With a friend (draugas)':",
                    options: ["Su draugu", "Su drauguose", "Su draugo", "Su draugą"],
                    correctAnswer: "Su draugu",
                    translation: "With a friend",
                    audioText: "Aš kalbuosi su draugu."
                },
                {
                    id: "ex-4-4-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Kava su pienu", "Arbata be cukraus", "Susitiksime su jais", "Eisiu su tavimi"],
                    correctAnswer: "Kava su pienu",
                    translation: "Coffee with milk",
                    audioText: "Kava su pienu"
                },
                {
                    id: "ex-4-4-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'I will go with you.'",
                    options: ["Aš", "eisiu", "su", "tavimi.", "tave."],
                    correctAnswer: ["Aš", "eisiu", "su", "tavimi."],
                    audioText: "Aš eisiu su tavimi."
                },
                {
                    id: "ex-4-4-4",
                    type: "matching",
                    prompt: "Match the pronouns (Instrumental)",
                    options: ["Su manimi", "With me", "Su tavimi", "With you"],
                    correctAnswer: "Su manimi:With me,Su tavimi:With you"
                },
                {
                    id: "ex-4-4-5",
                    type: "fill_in_blank",
                    prompt: "With him = Su j____",
                    correctAnswer: "uo",
                    translation: "With him",
                    audioText: "Su juo"
                }
            ]
        },
        {
            id: "lesson-4-5",
            title: "Complex Needs & Feelings",
            description: "Expressing conditions.",
            exercises: [
                {
                    id: "ex-4-5-1",
                    type: "sentence_arrange",
                    prompt: "Translate 'He is cold, he needs tea.'",
                    options: ["Jam", "šalta,", "reikia", "arbatos."],
                    correctAnswer: ["Jam", "šalta,", "reikia", "arbatos."],
                    audioText: "Jam šalta, reikia arbatos."
                },
                {
                    id: "ex-4-5-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Man karšta ir noriu gerti", "Tau liūdna, gal einam į kiną?", "Jums sunku tai suprasti", "Mums labai įdomu mokytis"],
                    correctAnswer: "Tau liūdna, gal einam į kiną?",
                    translation: "You are sad, maybe we should go to the cinema?",
                    audioText: "Tau liūdna, gal einam į kiną?"
                },
                {
                    id: "ex-4-5-3",
                    type: "multiple_choice",
                    prompt: "How do you say 'I am bored' (literally 'To me it is boring')?",
                    options: ["Man nuobodu", "Aš nuobodus", "Mane nuobodu", "Mano nuobodu"],
                    correctAnswer: "Man nuobodu",
                    translation: "I am bored",
                    audioText: "Man nuobodu"
                },
                {
                    id: "ex-4-5-4",
                    type: "matching",
                    prompt: "Match the feelings (Adverbial used with Dative)",
                    options: ["Man šalta", "I am cold", "Man karšta", "I am hot", "Man sunku", "It is hard for me"],
                    correctAnswer: "Man šalta:I am cold,Man karšta:I am hot,Man sunku:It is hard for me"
                },
                {
                    id: "ex-4-5-5",
                    type: "fill_in_blank",
                    prompt: "It's interesting for us = Mums įdo____",
                    correctAnswer: "mu",
                    translation: "It's interesting for us",
                    audioText: "Mums įdomu"
                }
            ]
        }
    ]
};
