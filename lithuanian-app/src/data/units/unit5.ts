import { Unit } from "../curriculum";

export const unit5: Unit = {
    id: "unit-5",
    title: "Unit 5: University & Student Life",
    description: "Talk to classmates",
    lessons: [
        {
            id: "lesson-5-1",
            title: "At the University",
            description: "Campus vocabulary.",
            exercises: [
                {
                    id: "ex-5-1-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'University'?",
                    options: ["Universitetas", "Mokykla", "Biblioteka", "Fakultetas"],
                    correctAnswer: "Universitetas",
                    translation: "University",
                    audioText: "Universitetas"
                },
                {
                    id: "ex-5-1-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Paskaita", "Studentas", "Dėstytojas", "Fakultetas"],
                    correctAnswer: "Studentas",
                    translation: "Student",
                    audioText: "Studentas"
                },
                {
                    id: "ex-5-1-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Universitetas", "University", "Studentas", "Student"],
                    correctAnswer: "Universitetas:University,Studentas:Student"
                },
                {
                    id: "ex-5-1-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'I study at the university.'",
                    options: ["Aš", "studijuoju", "universitete.", "mokykloje."],
                    correctAnswer: ["Aš", "studijuoju", "universitete."],
                    audioText: "Aš studijuoju universitete."
                },
                {
                    id: "ex-5-1-5",
                    type: "fill_in_blank",
                    prompt: "Lecture = Pas____",
                    correctAnswer: "kaita",
                    translation: "Lecture",
                    audioText: "Paskaita"
                }
            ]
        },
        {
            id: "lesson-5-2",
            title: "Classes & Subjects",
            description: "What are you studying?",
            exercises: [
                {
                    id: "ex-5-2-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Book'?",
                    options: ["Knyga", "Sąsiuvinis", "Rašiklis", "Kuprinė"],
                    correctAnswer: "Knyga",
                    translation: "Book",
                    audioText: "Knyga"
                },
                {
                    id: "ex-5-2-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Istorija", "Matematika", "Kalba", "Fizika"],
                    correctAnswer: "Kalba",
                    translation: "Language",
                    audioText: "Kalba"
                },
                {
                    id: "ex-5-2-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Knyga", "Book", "Rašiklis", "Pen"],
                    correctAnswer: "Knyga:Book,Rašiklis:Pen"
                },
                {
                    id: "ex-5-2-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'I study the Lithuanian language.'",
                    options: ["Aš", "studijuoju", "lietuvių", "kalbą.", "istoriją."],
                    correctAnswer: ["Aš", "studijuoju", "lietuvių", "kalbą."],
                    audioText: "Aš studijuoju lietuvių kalbą."
                },
                {
                    id: "ex-5-2-5",
                    type: "fill_in_blank",
                    prompt: "Library = Biblio____",
                    correctAnswer: "teka",
                    translation: "Library",
                    audioText: "Biblioteka"
                }
            ]
        },
        {
            id: "lesson-5-3",
            title: "Exams & Grades",
            description: "Measuring success.",
            exercises: [
                {
                    id: "ex-5-3-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Exam'?",
                    options: ["Egzaminas", "Testas", "Pažymys", "Užduotis"],
                    correctAnswer: "Egzaminas",
                    translation: "Exam",
                    audioText: "Egzaminas"
                },
                {
                    id: "ex-5-3-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Dešimtukas", "Pažymys", "Egzaminas", "Svarbu"],
                    correctAnswer: "Pažymys",
                    translation: "Grade",
                    audioText: "Pažymys"
                },
                {
                    id: "ex-5-3-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'Tomorrow is the exam.'",
                    options: ["Rytoj", "yra", "egzaminas.", "paskaita."],
                    correctAnswer: ["Rytoj", "yra", "egzaminas."],
                    audioText: "Rytoj yra egzaminas."
                },
                {
                    id: "ex-5-3-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Egzaminas", "Exam", "Pažymys", "Grade"],
                    correctAnswer: "Egzaminas:Exam,Pažymys:Grade"
                },
                {
                    id: "ex-5-3-5",
                    type: "fill_in_blank",
                    prompt: "Homework = Namų ____",
                    correctAnswer: "darbai",
                    translation: "Homework",
                    audioText: "Namų darbai"
                }
            ]
        },
        {
            id: "lesson-5-4",
            title: "Classmates",
            description: "Talking to peers.",
            exercises: [
                {
                    id: "ex-5-4-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Friend'?",
                    options: ["Draugas", "Priešas", "Kaimynas", "Kolega"],
                    correctAnswer: "Draugas",
                    translation: "Friend",
                    audioText: "Draugas"
                },
                {
                    id: "ex-5-4-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Mes studijuojame", "Jie studijuoja", "Aš studijuoju", "Jūs studijuojate"],
                    correctAnswer: "Mes studijuojame",
                    translation: "We study",
                    audioText: "Mes studijuojame"
                },
                {
                    id: "ex-5-4-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'He is my friend.'",
                    options: ["Jis", "yra", "mano", "draugas.", "brolis."],
                    correctAnswer: ["Jis", "yra", "mano", "draugas."],
                    audioText: "Jis yra mano draugas."
                },
                {
                    id: "ex-5-4-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Mes", "We", "Jie", "They"],
                    correctAnswer: "Mes:We,Jie:They"
                },
                {
                    id: "ex-5-4-5",
                    type: "fill_in_blank",
                    prompt: "Together = Kar____",
                    correctAnswer: "tu",
                    translation: "Together",
                    audioText: "Kartu"
                }
            ]
        },
        {
            id: "lesson-5-5",
            title: "Asking Questions",
            description: "Clarifying details.",
            exercises: [
                {
                    id: "ex-5-5-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'I don't understand'?",
                    options: ["Aš nesuprantu", "Aš žinau", "Aš nežinau", "Aš suprantu"],
                    correctAnswer: "Aš nesuprantu",
                    translation: "I don't understand",
                    audioText: "Aš nesuprantu"
                },
                {
                    id: "ex-5-5-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Aš turiu klausimą", "Aš suprantu", "Pakartokite", "Nežinau"],
                    correctAnswer: "Aš turiu klausimą",
                    translation: "I have a question",
                    audioText: "Aš turiu klausimą"
                },
                {
                    id: "ex-5-5-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'Can you repeat?'",
                    options: ["Ar", "galite", "pakartoti?", "suprasti?"],
                    correctAnswer: ["Ar", "galite", "pakartoti?"],
                    audioText: "Ar galite pakartoti?"
                },
                {
                    id: "ex-5-5-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Klausimas", "Question", "Atsakymas", "Answer"],
                    correctAnswer: "Klausimas:Question,Atsakymas:Answer"
                },
                {
                    id: "ex-5-5-5",
                    type: "fill_in_blank",
                    prompt: "I don't know = Aš neži____",
                    correctAnswer: "nau",
                    translation: "I don't know",
                    audioText: "Aš nežinau"
                }
            ]
        }
    ]
};
