import { Unit } from "../curriculum";

export const unit7: Unit = {
    id: "unit-7",
    title: "Unit 7: Weather & Small Talk",
    description: "Sound like a local",
    lessons: [
        {
            id: "lesson-7-1",
            title: "Weather Types",
            description: "How is it outside?",
            exercises: [
                {
                    id: "ex-7-1-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Weather'?",
                    options: ["Oras", "Saulė", "Lietus", "Sniegas"],
                    correctAnswer: "Oras",
                    translation: "Weather / Air",
                    audioText: "Oras"
                },
                {
                    id: "ex-7-1-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Šilta", "Šalta", "Lyja", "Sninga"],
                    correctAnswer: "Lyja",
                    translation: "It is raining",
                    audioText: "Lyja"
                },
                {
                    id: "ex-7-1-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Saulė", "Sun", "Lietus", "Rain"],
                    correctAnswer: "Saulė:Sun,Lietus:Rain"
                },
                {
                    id: "ex-7-1-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'Today the weather is good.'",
                    options: ["Šiandien", "yra", "geras", "oras."],
                    correctAnswer: ["Šiandien", "yra", "geras", "oras."],
                    audioText: "Šiandien yra geras oras."
                },
                {
                    id: "ex-7-1-5",
                    type: "fill_in_blank",
                    prompt: "Snow = Snie____",
                    correctAnswer: "gas",
                    translation: "Snow",
                    audioText: "Sniegas"
                }
            ]
        },
        {
            id: "lesson-7-2",
            title: "Temperature",
            description: "Hot or cold?",
            exercises: [
                {
                    id: "ex-7-2-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Cold'?",
                    options: ["Šalta", "Šilta", "Karšta", "Vėsu"],
                    correctAnswer: "Šalta",
                    translation: "Cold",
                    audioText: "Šalta"
                },
                {
                    id: "ex-7-2-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Karšta", "Šalta", "Šilta", "Gražu"],
                    correctAnswer: "Karšta",
                    translation: "Hot",
                    audioText: "Karšta"
                },
                {
                    id: "ex-7-2-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Šilta", "Warm", "Šalta", "Cold"],
                    correctAnswer: "Šilta:Warm,Šalta:Cold"
                },
                {
                    id: "ex-7-2-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'It is very cold.'",
                    options: ["Yra", "labai", "šalta."],
                    correctAnswer: ["Yra", "labai", "šalta."],
                    audioText: "Yra labai šalta."
                },
                {
                    id: "ex-7-2-5",
                    type: "fill_in_blank",
                    prompt: "Hot = Karš____",
                    correctAnswer: "ta",
                    translation: "Hot",
                    audioText: "Karšta"
                }
            ]
        },
        {
            id: "lesson-7-3",
            title: "Seasons",
            description: "Times of the year.",
            exercises: [
                {
                    id: "ex-7-3-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Summer'?",
                    options: ["Vasara", "Žiema", "Pavasaris", "Ruduo"],
                    correctAnswer: "Vasara",
                    translation: "Summer",
                    audioText: "Vasara"
                },
                {
                    id: "ex-7-3-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Vasara", "Žiema", "Ruduo", "Metai"],
                    correctAnswer: "Žiema",
                    translation: "Winter",
                    audioText: "Žiema"
                },
                {
                    id: "ex-7-3-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Pavasaris", "Spring", "Ruduo", "Autumn"],
                    correctAnswer: "Pavasaris:Spring,Ruduo:Autumn"
                },
                {
                    id: "ex-7-3-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'I love summer.'",
                    options: ["Aš", "myliu", "vasarą.", "žiemą."],
                    correctAnswer: ["Aš", "myliu", "vasarą."],
                    audioText: "Aš myliu vasarą."
                },
                {
                    id: "ex-7-3-5",
                    type: "fill_in_blank",
                    prompt: "Winter = Žie____",
                    correctAnswer: "ma",
                    translation: "Winter",
                    audioText: "Žiema"
                }
            ]
        },
        {
            id: "lesson-7-4",
            title: "Compliments",
            description: "Saying nice things.",
            exercises: [
                {
                    id: "ex-7-4-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Beautiful'?",
                    options: ["Gražu", "Baisu", "Gerai", "Blogai"],
                    correctAnswer: "Gražu",
                    translation: "Beautiful",
                    audioText: "Gražu"
                },
                {
                    id: "ex-7-4-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Geras", "Nuostabu", "Puiku", "Blogas"],
                    correctAnswer: "Nuostabu",
                    translation: "Wonderful",
                    audioText: "Nuostabu"
                },
                {
                    id: "ex-7-4-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'You look great.'",
                    options: ["Tu", "atrodai", "puikiai."],
                    correctAnswer: ["Tu", "atrodai", "puikiai."],
                    audioText: "Tu atrodai puikiai."
                },
                {
                    id: "ex-7-4-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Puiku", "Great", "Gražu", "Beautiful"],
                    correctAnswer: "Puiku:Great,Gražu:Beautiful"
                },
                {
                    id: "ex-7-4-5",
                    type: "fill_in_blank",
                    prompt: "Wonderful = Nuosta____",
                    correctAnswer: "bu",
                    translation: "Wonderful",
                    audioText: "Nuostabu"
                }
            ]
        },
        {
            id: "lesson-7-5",
            title: "Interjections",
            description: "Expressions in talk.",
            exercises: [
                {
                    id: "ex-7-5-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Really?'",
                    options: ["Tikrai?", "Galbūt?", "Kodėl?", "Kur?"],
                    correctAnswer: "Tikrai?",
                    translation: "Really?",
                    audioText: "Tikrai?"
                },
                {
                    id: "ex-7-5-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Gaila", "Puiku", "Atsiprašau", "Žinoma"],
                    correctAnswer: "Žinoma",
                    translation: "Of course",
                    audioText: "Žinoma"
                },
                {
                    id: "ex-7-5-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'Maybe tomorrow.'",
                    options: ["Galbūt", "rytoj.", "šiandien."],
                    correctAnswer: ["Galbūt", "rytoj."],
                    audioText: "Galbūt rytoj."
                },
                {
                    id: "ex-7-5-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Tikrai", "Really", "Gaila", "It's a pity"],
                    correctAnswer: "Tikrai:Really,Gaila:It's a pity"
                },
                {
                    id: "ex-7-5-5",
                    type: "fill_in_blank",
                    prompt: "Of course = Žino____",
                    correctAnswer: "ma",
                    translation: "Of course",
                    audioText: "Žinoma"
                }
            ]
        }
    ]
};
