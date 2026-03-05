import { Unit } from "../curriculum";

export const unit1: Unit = {
    id: "unit-1",
    title: "Unit 1: The Past & Accusative (A2)",
    description: "Talk about what you did yesterday",
    lessons: [
        {
            id: "lesson-1-1",
            title: "Weekend Actions",
            description: "Past tense verbs.",
            exercises: [
                {
                    id: "ex-1-1-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'I worked'?",
                    options: ["Aš dirbau", "Aš dirbu", "Aš dirbsiu", "Aš dirbti"],
                    correctAnswer: "Aš dirbau",
                    translation: "I worked",
                    audioText: "Aš dirbau ieri, bet šiandien ilsiuosi."
                },
                {
                    id: "ex-1-1-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Jis skaitė knygą", "Jis skaito knygą", "Aš skaičiau knygą", "Ji skaitys knygą"],
                    correctAnswer: "Jis skaitė knygą",
                    translation: "He was reading a book",
                    audioText: "Jis skaitė knygą"
                },
                {
                    id: "ex-1-1-3",
                    type: "matching",
                    prompt: "Match the past tense verbs",
                    options: ["Mačiau", "I saw", "Ėjau", "I went (by foot)"],
                    correctAnswer: "Mačiau:I saw,Ėjau:I went (by foot)"
                },
                {
                    id: "ex-1-1-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'We watched a movie yesterday.'",
                    options: ["Mes", "vakar", "žiūrėjome", "filmą.", "filmui."],
                    correctAnswer: ["Mes", "vakar", "žiūrėjome", "filmą."],
                    audioText: "Mes vakar žiūrėjome filmą."
                },
                {
                    id: "ex-1-1-5",
                    type: "fill_in_blank",
                    prompt: "Did you buy? = Ar tu pir____?",
                    correctAnswer: "kai",
                    translation: "Did you buy?",
                    audioText: "Ar tu pirkai?"
                }
            ]
        },
        {
            id: "lesson-1-2",
            title: "Using the Accusative",
            description: "Direct objects.",
            exercises: [
                {
                    id: "ex-1-2-1",
                    type: "multiple_choice",
                    prompt: "Choose the correct accusative form: 'Aš matau (namas)'",
                    options: ["namą", "namo", "name", "namu"],
                    correctAnswer: "namą",
                    translation: "I see a house",
                    audioText: "Aš matau namą."
                },
                {
                    id: "ex-1-2-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Aš išgėriau kavą", "Aš geriu kavą", "Tu gėrei kavos", "Jis geria kavą"],
                    correctAnswer: "Aš išgėriau kavą",
                    translation: "I drank the coffee",
                    audioText: "Aš išgėriau kavą"
                },
                {
                    id: "ex-1-2-3",
                    type: "matching",
                    prompt: "Match the Nominative to Accusative",
                    options: ["Knyga", "Knygą", "Automobilis", "Automobilį"],
                    correctAnswer: "Knyga:Knygą,Automobilis:Automobilį"
                },
                {
                    id: "ex-1-2-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'She met a friend.'",
                    options: ["Ji", "sutiko", "draugą.", "draugas."],
                    correctAnswer: ["Ji", "sutiko", "draugą."],
                    audioText: "Ji sutiko draugą."
                },
                {
                    id: "ex-1-2-5",
                    type: "fill_in_blank",
                    prompt: "I wrote a letter = Aš parašiau laiš____",
                    correctAnswer: "ką",
                    translation: "I wrote a letter",
                    audioText: "Aš parašiau laišką."
                }
            ]
        },
        {
            id: "lesson-1-3",
            title: "Questions in the Past",
            description: "Asking about yesterday.",
            exercises: [
                {
                    id: "ex-1-3-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'What did you do?'",
                    options: ["Ką tu veikei?", "Ką tu veiki?", "Ką tu veiksi?", "Kaip tu darai?"],
                    correctAnswer: "Ką tu veikei?",
                    translation: "What did you do?",
                    audioText: "Ką tu veikei?"
                },
                {
                    id: "ex-1-3-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Kur buvote?", "Ką jūs darėte?", "Kada atėjote?", "Kodėl išėjote?"],
                    correctAnswer: "Kur buvote?",
                    translation: "Where were you? (formal/plural)",
                    audioText: "Kur buvote?"
                },
                {
                    id: "ex-1-3-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'When did they return?'",
                    options: ["Kada", "jie", "grįžo?", "grįžta?"],
                    correctAnswer: ["Kada", "jie", "grįžo?"],
                    audioText: "Kada jie grįžo?"
                },
                {
                    id: "ex-1-3-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Ką valgei?", "What did you eat?", "Kur buvai?", "Where were you?"],
                    correctAnswer: "Ką valgei?:What did you eat?,Kur buvai?:Where were you?"
                },
                {
                    id: "ex-1-3-5",
                    type: "fill_in_blank",
                    prompt: "Did you sleep well? = Ar gerai miego____?",
                    correctAnswer: "jai",
                    translation: "Did you sleep well?",
                    audioText: "Ar gerai miegojai?"
                }
            ]
        },
        {
            id: "lesson-1-4",
            title: "Negative Past & Accusative",
            description: "With negatives, Accusative becomes Genitive.",
            exercises: [
                {
                    id: "ex-1-4-1",
                    type: "multiple_choice",
                    prompt: "I bought a book (knygą) -> I didn't buy a book (____)",
                    options: ["knygos", "knygą", "knygai", "knygoje"],
                    correctAnswer: "knygos",
                    translation: "I didn't buy a book",
                    audioText: "Aš nepirkau knygos."
                },
                {
                    id: "ex-1-4-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Mes nematėme filmo", "Mes matėme filmą", "Jie nematė filmo", "Aš nemačiau filmo"],
                    correctAnswer: "Mes nematėme filmo",
                    translation: "We didn't see the movie",
                    audioText: "Mes nematėme filmo"
                },
                {
                    id: "ex-1-4-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'He didn't read the letter.'",
                    options: ["Jis", "neskaitė", "laiško.", "laišką."],
                    correctAnswer: ["Jis", "neskaitė", "laiško."],
                    audioText: "Jis neskaitė laiško."
                },
                {
                    id: "ex-1-4-4",
                    type: "matching",
                    prompt: "Match pairs (Positive vs Negative object)",
                    options: ["Valgau obuolį", "Nevalgau obuolio", "Matau namą", "Nematau namo"],
                    correctAnswer: "Valgau obuolį:Nevalgau obuolio,Matau namą:Nematau namo"
                },
                {
                    id: "ex-1-4-5",
                    type: "fill_in_blank",
                    prompt: "I didn't hear the song (dainą) = Aš negirdėjau dain____",
                    correctAnswer: "os",
                    translation: "I didn't hear the song",
                    audioText: "Aš negirdėjau dainos."
                }
            ]
        },
        {
            id: "lesson-1-5",
            title: "Story Time",
            description: "Putting it all together.",
            exercises: [
                {
                    id: "ex-1-5-1",
                    type: "sentence_arrange",
                    prompt: "Translate 'Yesterday I went to the shop and bought milk.'",
                    options: ["Vakar", "ėjau", "į", "parduotuvę", "ir", "nupirkau", "pieno."],
                    correctAnswer: ["Vakar", "ėjau", "į", "parduotuvę", "ir", "nupirkau", "pieno."],
                    audioText: "Vakar ėjau į parduotuvę ir nupirkau pieno."
                },
                {
                    id: "ex-1-5-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Vakare mes žiūrėjome filmą", "Vakar mes žiūrėjome televizorių", "Rytoj mes žiūrėsime filmą", "Šiandien jis žiūri filmą"],
                    correctAnswer: "Vakare mes žiūrėjome filmą",
                    translation: "In the evening we watched a movie",
                    audioText: "Vakare mes žiūrėjome filmą"
                },
                {
                    id: "ex-1-5-3",
                    type: "multiple_choice",
                    prompt: "How do you say 'It was a good day'?",
                    options: ["Tai buvo gera diena", "Tai yra gera diena", "Tai bus gera diena", "Tai buvo bloga diena"],
                    correctAnswer: "Tai buvo gera diena",
                    translation: "It was a good day",
                    audioText: "Tai buvo gera diena"
                },
                {
                    id: "ex-1-5-4",
                    type: "matching",
                    prompt: "Match the verbs",
                    options: ["Buvau", "I was", "Ėjau", "I went", "Mačiau", "I saw"],
                    correctAnswer: "Buvau:I was,Ėjau:I went,Mačiau:I saw"
                },
                {
                    id: "ex-1-5-5",
                    type: "fill_in_blank",
                    prompt: "And what did you do? = O ką tu veike____?",
                    correctAnswer: "i",
                    translation: "And what did you do?",
                    audioText: "O ką tu veikei?"
                }
            ]
        }
    ]
};
