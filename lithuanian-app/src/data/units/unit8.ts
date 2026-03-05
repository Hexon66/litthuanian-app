import { Unit } from "../curriculum";

export const unit8: Unit = {
    id: "unit-8",
    title: "Unit 8: Making & Keeping Friends",
    description: "Have real conversations",
    lessons: [
        {
            id: "lesson-8-1",
            title: "Hobbies",
            description: "What do you like to do?",
            exercises: [
                {
                    id: "ex-8-1-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Hobby'?",
                    options: ["Hobis", "Darbas", "Mokykla", "Draugas"],
                    correctAnswer: "Hobis",
                    translation: "Hobby",
                    audioText: "Hobis"
                },
                {
                    id: "ex-8-1-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Sportas", "Muzika", "Filmai", "Knygos"],
                    correctAnswer: "Sportas",
                    translation: "Sports",
                    audioText: "Sportas"
                },
                {
                    id: "ex-8-1-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Muzika", "Music", "Knyga", "Book"],
                    correctAnswer: "Muzika:Music,Knyga:Book"
                },
                {
                    id: "ex-8-1-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'I like music.'",
                    options: ["Man", "patinka", "muzika."],
                    correctAnswer: ["Man", "patinka", "muzika."],
                    audioText: "Man patinka muzika."
                },
                {
                    id: "ex-8-1-5",
                    type: "fill_in_blank",
                    prompt: "Movies = Fil____",
                    correctAnswer: "mai",
                    translation: "Movies",
                    audioText: "Filmai"
                }
            ]
        },
        {
            id: "lesson-8-2",
            title: "Weekend Plans",
            description: "What are you doing later?",
            exercises: [
                {
                    id: "ex-8-2-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Weekend'?",
                    options: ["Savaitgalis", "Trečiadienis", "Šiandien", "Rytoj"],
                    correctAnswer: "Savaitgalis",
                    translation: "Weekend",
                    audioText: "Savaitgalis"
                },
                {
                    id: "ex-8-2-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Ką veiki?", "Kaip sekasi?", "Kuo tu vardu?", "Kiek tau metų?"],
                    correctAnswer: "Ką veiki?",
                    translation: "What are you doing?",
                    audioText: "Ką veiki?"
                },
                {
                    id: "ex-8-2-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Pirmadienis", "Monday", "Savaitgalis", "Weekend"],
                    correctAnswer: "Pirmadienis:Monday,Savaitgalis:Weekend"
                },
                {
                    id: "ex-8-2-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'What are you doing this weekend?'",
                    options: ["Ką", "veiki", "šį", "savaitgalį?", "ryt?"],
                    correctAnswer: ["Ką", "veiki", "šį", "savaitgalį?"],
                    audioText: "Ką veiki šį savaitgalį?"
                },
                {
                    id: "ex-8-2-5",
                    type: "fill_in_blank",
                    prompt: "Plans = Pla____",
                    correctAnswer: "nai",
                    translation: "Plans",
                    audioText: "Planai"
                }
            ]
        },
        {
            id: "lesson-8-3",
            title: "Invitations",
            description: "Inviting someone out.",
            exercises: [
                {
                    id: "ex-8-3-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Let's go'?",
                    options: ["Einam", "Stovim", "Sėdim", "Žiūrim"],
                    correctAnswer: "Einam",
                    translation: "Let's go",
                    audioText: "Einam"
                },
                {
                    id: "ex-8-3-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Kur einame?", "Ką veiki?", "Kiek kainuoja?", "Ar nori?"],
                    correctAnswer: "Ar nori?",
                    translation: "Do you want?",
                    audioText: "Ar nori?"
                },
                {
                    id: "ex-8-3-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'Do you want to go to the café?'",
                    options: ["Ar", "nori", "eiti", "į", "kavinę?"],
                    correctAnswer: ["Ar", "nori", "eiti", "į", "kavinę?"],
                    audioText: "Ar nori eiti į kavinę?"
                },
                {
                    id: "ex-8-3-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Kavinė", "Café", "Parkas", "Park"],
                    correctAnswer: "Kavinė:Café,Parkas:Park"
                },
                {
                    id: "ex-8-3-5",
                    type: "fill_in_blank",
                    prompt: "Let's go = Ei____",
                    correctAnswer: "nam",
                    translation: "Let's go",
                    audioText: "Einam"
                }
            ]
        },
        {
            id: "lesson-8-4",
            title: "Meeting People",
            description: "Who is that?",
            exercises: [
                {
                    id: "ex-8-4-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Who'?",
                    options: ["Kas", "Kada", "Kur", "Kodėl"],
                    correctAnswer: "Kas",
                    translation: "Who / What",
                    audioText: "Kas"
                },
                {
                    id: "ex-8-4-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Kada", "Kodėl", "Kur", "Ačiū"],
                    correctAnswer: "Kada",
                    translation: "When",
                    audioText: "Kada"
                },
                {
                    id: "ex-8-4-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Kas", "Who/What", "Kur", "Where"],
                    correctAnswer: "Kas:Who/What,Kur:Where"
                },
                {
                    id: "ex-8-4-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'Who is this?'",
                    options: ["Kas", "tai", "yra?", "kada"],
                    correctAnswer: ["Kas", "tai", "yra?"],
                    audioText: "Kas tai yra?"
                },
                {
                    id: "ex-8-4-5",
                    type: "fill_in_blank",
                    prompt: "Why = Ko____?",
                    correctAnswer: "dėl",
                    translation: "Why",
                    audioText: "Kodėl"
                }
            ]
        },
        {
            id: "lesson-8-5",
            title: "Celebrating",
            description: "Toasts and cheers.",
            exercises: [
                {
                    id: "ex-8-5-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Cheers!'?",
                    options: ["Į sveikatą!", "Gero apetito!", "Ačiū!", "Viso gero!"],
                    correctAnswer: "Į sveikatą!",
                    translation: "Cheers / Bless you",
                    audioText: "Į sveikatą!"
                },
                {
                    id: "ex-8-5-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Sveikinimai!", "Atsiprašau", "Puiku", "Į sveikatą!"],
                    correctAnswer: "Sveikinimai!",
                    translation: "Congratulations",
                    audioText: "Sveikinimai!"
                },
                {
                    id: "ex-8-5-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'Happy Birthday'",
                    options: ["Su", "gimtadieniu!", "metų!"],
                    correctAnswer: ["Su", "gimtadieniu!"],
                    audioText: "Su gimtadieniu!"
                },
                {
                    id: "ex-8-5-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Gimtadienis", "Birthday", "Šventė", "Celebration"],
                    correctAnswer: "Gimtadienis:Birthday,Šventė:Celebration"
                },
                {
                    id: "ex-8-5-5",
                    type: "fill_in_blank",
                    prompt: "Cheers = Į svei____!",
                    correctAnswer: "katą",
                    translation: "Cheers",
                    audioText: "Į sveikatą!"
                }
            ]
        }
    ]
};
