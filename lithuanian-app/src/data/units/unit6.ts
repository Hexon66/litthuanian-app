import { Unit } from "../curriculum";

export const unit6: Unit = {
  id: "unit-6",
  title: "Review Checkpoint",
  description: "Test everything you learned in Units 1-5",
  icon: "🏆",
  grammarTips: [
    {
      title: "Quick Review",
      explanation: "You've learned: greetings, numbers, family, colors, food, adjective agreement, present tense verbs, and basic questions. This unit tests it all!",
      examples: [
        { lithuanian: "Labas! Aš esu Jonas.", english: "Hello! I am Jonas." },
        { lithuanian: "Man yra dvidešimt metų.", english: "I am 20 years old." },
        { lithuanian: "Namas yra didelis.", english: "The house is big." },
        { lithuanian: "Aš kalbu lietuviškai.", english: "I speak Lithuanian." },
      ],
    },
  ],
  keyVocabulary: [
    { lithuanian: "Labas", english: "Hello", audioText: "Labas" },
    { lithuanian: "Ačiū", english: "Thank you", audioText: "Ačiū" },
    { lithuanian: "šeima", english: "family", gender: "f", audioText: "šeima" },
    { lithuanian: "didelis", english: "big", gender: "m", audioText: "didelis" },
    { lithuanian: "dirbti", english: "to work", audioText: "dirbti" },
    { lithuanian: "kalbėti", english: "to speak", audioText: "kalbėti" },
    { lithuanian: "vienas", english: "one", gender: "m", audioText: "vienas" },
    { lithuanian: "pirmadienis", english: "Monday", gender: "m", audioText: "pirmadienis" },
    { lithuanian: "raudonas", english: "red", gender: "m", audioText: "raudonas" },
    { lithuanian: "duona", english: "bread", gender: "f", audioText: "duona" },
  ],
  lessons: [
    {
      id: "lesson-6-1",
      title: "Greetings & Sounds Review",
      description: "Review greetings and polite words.",
      exercises: [
        { id: "ex-6-1-1", type: "listening", prompt: "What greeting do you hear?", options: ["Labas rytas (Good morning)", "Laba diena (Good day)", "Labas vakaras (Good evening)", "Viso gero (Goodbye)"], correctAnswer: "Labas vakaras (Good evening)", audioText: "Labas vakaras" },
        { id: "ex-6-1-2", type: "matching", prompt: "Match greetings and polite words", options: ["Ačiū", "Thank you", "Prašau", "Please", "Atsiprašau", "Sorry", "Taip", "Yes"], correctAnswer: "Ačiū:Thank you,Prašau:Please,Atsiprašau:Sorry,Taip:Yes", audioText: "Ačiū, prašau, atsiprašau, taip" },
        { id: "ex-6-1-3", type: "fill_in_blank", prompt: "Goodbye = Viso ____", correctAnswer: "gero", translation: "Goodbye", audioText: "Viso gero" },
        { id: "ex-6-1-4", type: "sentence_arrange", prompt: "Say: 'Good morning! How are you?'", options: ["Labas", "rytas!", "Kaip", "sekasi?", "vakaras!", "ačiū"], correctAnswer: ["Labas", "rytas!", "Kaip", "sekasi?"], translation: "Good morning! How are you?", audioText: "Labas rytas! Kaip sekasi?" },
        { id: "ex-6-1-5", type: "multiple_choice", prompt: "What does 'Malonu susipažinti' mean?", options: ["Nice to meet you", "How are you?", "Thank you very much", "Goodbye"], correctAnswer: "Nice to meet you", translation: "Nice to meet you", audioText: "Malonu susipažinti" },
      ],
    },
    {
      id: "lesson-6-2",
      title: "Introduce Yourself",
      description: "Combine name, age, nationality, profession.",
      exercises: [
        { id: "ex-6-2-1", type: "sentence_arrange", prompt: "Say: 'Hello, my name is Rasa, I am from Lithuania'", options: ["Labas,", "mano", "vardas", "Rasa,", "aš", "esu", "iš", "Lietuvos.", "Anglijos.", "Jonas."], correctAnswer: ["Labas,", "mano", "vardas", "Rasa,", "aš", "esu", "iš", "Lietuvos."], translation: "Hello, my name is Rasa, I am from Lithuania", audioText: "Labas, mano vardas Rasa, aš esu iš Lietuvos." },
        { id: "ex-6-2-2", type: "fill_in_blank", prompt: "I am a student = Aš esu studen____", correctAnswer: "tas", translation: "I am a student (m)", audioText: "Aš esu studentas" },
        { id: "ex-6-2-3", type: "listening", prompt: "What is this person's profession?", options: ["studentas (student)", "mokytojas (teacher)", "gydytojas (doctor)", "programuotojas (programmer)"], correctAnswer: "mokytojas (teacher)", audioText: "Aš esu mokytojas" },
        { id: "ex-6-2-4", type: "matching", prompt: "Match the introduction parts", options: ["Mano vardas", "My name", "Aš esu iš", "I am from", "Man yra ... metų", "I am ... years old"], correctAnswer: "Mano vardas:My name,Aš esu iš:I am from,Man yra ... metų:I am ... years old", audioText: "Mano vardas. Aš esu iš. Man yra metų." },
        { id: "ex-6-2-5", type: "multiple_choice", prompt: "A female doctor is:", options: ["gydytoja", "gydytojas", "mokytoja", "studentė"], correctAnswer: "gydytoja", translation: "doctor (f)", audioText: "gydytoja" },
      ],
    },
    {
      id: "lesson-6-3",
      title: "Describe Your Day",
      description: "Use verbs and vocab to describe daily activities.",
      exercises: [
        { id: "ex-6-3-1", type: "sentence_arrange", prompt: "Say: 'I wake up in the morning and eat breakfast'", options: ["Aš", "keliuosi", "ryte", "ir", "valgau", "pusryčius.", "miegu", "vakare"], correctAnswer: ["Aš", "keliuosi", "ryte", "ir", "valgau", "pusryčius."], translation: "I wake up in the morning and eat breakfast", audioText: "Aš keliuosi ryte ir valgau pusryčius." },
        { id: "ex-6-3-2", type: "fill_in_blank", prompt: "I go to work = Aš ____ į darbą", correctAnswer: "einu", translation: "I go to work", audioText: "Aš einu į darbą" },
        { id: "ex-6-3-3", type: "multiple_choice", prompt: "'Aš galiu kalbėti lietuviškai' means:", options: ["I can speak Lithuanian", "I want to speak Lithuanian", "I speak Lithuanian", "I must speak Lithuanian"], correctAnswer: "I can speak Lithuanian", translation: "I can speak Lithuanian", audioText: "Aš galiu kalbėti lietuviškai" },
        { id: "ex-6-3-4", type: "listening", prompt: "What does this person do in the evening?", options: ["skaito knygą (reads a book)", "dirba (works)", "miega (sleeps)", "valgo (eats)"], correctAnswer: "skaito knygą (reads a book)", audioText: "Vakare aš skaitau knygą" },
        { id: "ex-6-3-5", type: "matching", prompt: "Match daily activities", options: ["keliuosi", "I wake up", "dirbu", "I work", "valgau", "I eat", "miegu", "I sleep"], correctAnswer: "keliuosi:I wake up,dirbu:I work,valgau:I eat,miegu:I sleep", audioText: "keliuosi, dirbu, valgau, miegu" },
      ],
    },
    {
      id: "lesson-6-4",
      title: "Numbers in Context",
      description: "Use numbers for ages, time, and counting.",
      exercises: [
        { id: "ex-6-4-1", type: "multiple_choice", prompt: "'Dvidešimt penki' is:", options: ["25", "35", "15", "52"], correctAnswer: "25", translation: "twenty-five", audioText: "dvidešimt penki" },
        { id: "ex-6-4-2", type: "fill_in_blank", prompt: "It is 3 o'clock = Dabar yra trys ____", correctAnswer: "valandos", translation: "It is 3 o'clock", audioText: "Dabar yra trys valandos" },
        { id: "ex-6-4-3", type: "listening", prompt: "What day is mentioned?", options: ["pirmadienis (Monday)", "penktadienis (Friday)", "sekmadienis (Sunday)", "trečiadienis (Wednesday)"], correctAnswer: "penktadienis (Friday)", audioText: "Šiandien yra penktadienis" },
        { id: "ex-6-4-4", type: "matching", prompt: "Match numbers", options: ["septyni", "7", "dvylika", "12", "trisdešimt", "30", "šimtas", "100"], correctAnswer: "septyni:7,dvylika:12,trisdešimt:30,šimtas:100", audioText: "septyni, dvylika, trisdešimt, šimtas" },
        { id: "ex-6-4-5", type: "sentence_arrange", prompt: "Say: 'I am 30 years old'", options: ["Man", "yra", "trisdešimt", "metų.", "dvidešimt", "valandų"], correctAnswer: ["Man", "yra", "trisdešimt", "metų."], translation: "I am 30 years old", audioText: "Man yra trisdešimt metų." },
      ],
    },
    {
      id: "lesson-6-5",
      title: "Mini Conversation",
      description: "Full dialogue: meet someone new.",
      exercises: [
        { id: "ex-6-5-1", type: "sentence_arrange", prompt: "Greet and introduce: 'Hello! I am Jonas. Nice to meet you!'", options: ["Labas!", "Aš", "esu", "Jonas.", "Malonu", "susipažinti!", "Iki!", "Ačiū!"], correctAnswer: ["Labas!", "Aš", "esu", "Jonas.", "Malonu", "susipažinti!"], translation: "Hello! I am Jonas. Nice to meet you!", audioText: "Labas! Aš esu Jonas. Malonu susipažinti!" },
        { id: "ex-6-5-2", type: "fill_in_blank", prompt: "What do you do? = ____ tu darai?", correctAnswer: "Ką", translation: "What do you do?", audioText: "Ką tu darai?" },
        { id: "ex-6-5-3", type: "listening", prompt: "What does this person say about themselves?", options: ["Aš esu studentas iš Lietuvos", "Aš esu mokytojas iš Anglijos", "Aš esu gydytoja iš Vokietijos", "Aš esu programuotojas iš Lietuvos"], correctAnswer: "Aš esu studentas iš Lietuvos", audioText: "Aš esu studentas iš Lietuvos" },
        { id: "ex-6-5-4", type: "matching", prompt: "Complete the conversation", options: ["Kaip sekasi?", "How are you?", "Ką tu darai?", "What do you do?", "Kiek tau metų?", "How old are you?"], correctAnswer: "Kaip sekasi?:How are you?,Ką tu darai?:What do you do?,Kiek tau metų?:How old are you?", audioText: "Kaip sekasi? Ką tu darai? Kiek tau metų?" },
        { id: "ex-6-5-5", type: "sentence_arrange", prompt: "Say: 'I work and I study Lithuanian'", options: ["Aš", "dirbu", "ir", "mokausi", "lietuvių", "kalbos.", "nemokausi", "anglų"], correctAnswer: ["Aš", "dirbu", "ir", "mokausi", "lietuvių", "kalbos."], translation: "I work and I study Lithuanian", audioText: "Aš dirbu ir mokausi lietuvių kalbos." },
      ],
    },
  ],
};
