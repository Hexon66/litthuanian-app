import { Unit } from "../curriculum";

export const unit3: Unit = {
  id: "unit-3",
  title: "About Me",
  description: "Talk about family, nationality, and who you are",
  icon: "🧑",
  grammarTips: [
    {
      title: "Gender in Lithuanian",
      explanation: "Every Lithuanian noun is masculine or feminine. Masculine nouns usually end in -as, -is, or -us. Feminine nouns usually end in -a or -ė.",
      examples: [
        { lithuanian: "brolis (-is = masculine)", english: "brother" },
        { lithuanian: "sesuo (-uo = feminine)", english: "sister" },
        { lithuanian: "studentas (-as = masculine)", english: "male student" },
        { lithuanian: "studentė (-ė = feminine)", english: "female student" },
      ],
    },
  ],
  keyVocabulary: [
    { lithuanian: "mama", english: "mom", gender: "f", audioText: "mama" },
    { lithuanian: "tėtis", english: "dad", gender: "m", audioText: "tėtis" },
    { lithuanian: "brolis", english: "brother", gender: "m", audioText: "brolis" },
    { lithuanian: "sesuo", english: "sister", gender: "f", audioText: "sesuo" },
    { lithuanian: "šeima", english: "family", gender: "f", audioText: "šeima" },
    { lithuanian: "draugas", english: "friend (m)", gender: "m", audioText: "draugas" },
    { lithuanian: "draugė", english: "friend (f)", gender: "f", audioText: "draugė" },
    { lithuanian: "lietuvis", english: "Lithuanian (m)", gender: "m", audioText: "lietuvis" },
    { lithuanian: "lietuvė", english: "Lithuanian (f)", gender: "f", audioText: "lietuvė" },
    { lithuanian: "metai", english: "years", audioText: "metai" },
    { lithuanian: "jis", english: "he", gender: "m", audioText: "jis" },
    { lithuanian: "ji", english: "she", gender: "f", audioText: "ji" },
    { lithuanian: "studentas", english: "student (m)", gender: "m", audioText: "studentas" },
    { lithuanian: "mokytojas", english: "teacher (m)", gender: "m", audioText: "mokytojas" },
  ],
  lessons: [
    {
      id: "lesson-3-1",
      title: "I Am From...",
      description: "Talk about where you are from.",
      exercises: [
        { id: "ex-3-1-1", type: "multiple_choice", prompt: "How do you say 'I am from Lithuania'?", options: ["Aš esu iš Lietuvos", "Aš esu Lietuva", "Aš iš Lietuvos esu", "Mano Lietuva"], correctAnswer: "Aš esu iš Lietuvos", translation: "I am from Lithuania", audioText: "Aš esu iš Lietuvos" },
        { id: "ex-3-1-2", type: "matching", prompt: "Match countries", options: ["Lietuva", "Lithuania", "Anglija", "England", "Vokietija", "Germany"], correctAnswer: "Lietuva:Lithuania,Anglija:England,Vokietija:Germany", audioText: "Lietuva, Anglija, Vokietija" },
        { id: "ex-3-1-3", type: "fill_in_blank", prompt: "A Lithuanian man = Lietu____", correctAnswer: "vis", translation: "Lithuanian (m)", audioText: "lietuvis" },
        { id: "ex-3-1-4", type: "listening", prompt: "What country do you hear?", options: ["Lietuva", "Latvija", "Lenkija", "Anglija"], correctAnswer: "Lietuva", audioText: "Lietuva" },
        { id: "ex-3-1-5", type: "sentence_arrange", prompt: "Say: 'I am from England'", options: ["Aš", "esu", "iš", "Anglijos.", "Lietuvos.", "tu"], correctAnswer: ["Aš", "esu", "iš", "Anglijos."], translation: "I am from England", audioText: "Aš esu iš Anglijos." },
      ],
    },
    {
      id: "lesson-3-2",
      title: "How Old Are You?",
      description: "Talk about age.",
      exercises: [
        { id: "ex-3-2-1", type: "multiple_choice", prompt: "How do you ask 'How old are you?'", options: ["Kiek tau metų?", "Kaip sekasi?", "Kur tu gyveni?", "Kas tu esi?"], correctAnswer: "Kiek tau metų?", translation: "How old are you?", audioText: "Kiek tau metų?" },
        { id: "ex-3-2-2", type: "fill_in_blank", prompt: "I am 25 years old = Man yra dvidešimt penki ____", correctAnswer: "metų", translation: "I am 25 years old", audioText: "Man yra dvidešimt penki metai" },
        { id: "ex-3-2-3", type: "listening", prompt: "How old is this person?", options: ["20 metų", "25 metų", "30 metų", "18 metų"], correctAnswer: "25 metų", audioText: "Man yra dvidešimt penki metai" },
        { id: "ex-3-2-4", type: "sentence_arrange", prompt: "Say: 'I am 20 years old'", options: ["Man", "yra", "dvidešimt", "metų.", "penki", "tu"], correctAnswer: ["Man", "yra", "dvidešimt", "metų."], translation: "I am 20 years old", audioText: "Man yra dvidešimt metų." },
        { id: "ex-3-2-5", type: "multiple_choice", prompt: "What does 'metų' mean?", options: ["years (of age)", "months", "days", "hours"], correctAnswer: "years (of age)", translation: "years", audioText: "metų" },
      ],
    },
    {
      id: "lesson-3-3",
      title: "My Family",
      description: "Name your family members.",
      exercises: [
        { id: "ex-3-3-1", type: "matching", prompt: "Match family members", options: ["mama", "mom", "tėtis", "dad", "brolis", "brother", "sesuo", "sister"], correctAnswer: "mama:mom,tėtis:dad,brolis:brother,sesuo:sister", audioText: "mama, tėtis, brolis, sesuo" },
        { id: "ex-3-3-2", type: "multiple_choice", prompt: "What is 'šeima'?", options: ["family", "friend", "sister", "home"], correctAnswer: "family", translation: "family", audioText: "šeima" },
        { id: "ex-3-3-3", type: "fill_in_blank", prompt: "Son = Sū____", correctAnswer: "nus", translation: "son", audioText: "sūnus" },
        { id: "ex-3-3-4", type: "listening", prompt: "Who is mentioned?", options: ["brolis (brother)", "sesuo (sister)", "mama (mom)", "tėtis (dad)"], correctAnswer: "sesuo (sister)", audioText: "Mano sesuo" },
        { id: "ex-3-3-5", type: "sentence_arrange", prompt: "Say: 'My family is big'", options: ["Mano", "šeima", "yra", "didelė.", "maža.", "tu"], correctAnswer: ["Mano", "šeima", "yra", "didelė."], translation: "My family is big", audioText: "Mano šeima yra didelė." },
      ],
    },
    {
      id: "lesson-3-4",
      title: "He, She, They",
      description: "Learn pronouns and gender endings.",
      exercises: [
        { id: "ex-3-4-1", type: "matching", prompt: "Match the pronouns", options: ["aš", "I", "tu", "you", "jis", "he", "ji", "she"], correctAnswer: "aš:I,tu:you,jis:he,ji:she", audioText: "aš, tu, jis, ji" },
        { id: "ex-3-4-2", type: "multiple_choice", prompt: "'He is a student' — which ending?", options: ["Jis yra studentas", "Jis yra studentė", "Ji yra studentas", "Jis yra studente"], correctAnswer: "Jis yra studentas", translation: "He is a student", audioText: "Jis yra studentas" },
        { id: "ex-3-4-3", type: "fill_in_blank", prompt: "She is a student = Ji yra student____", correctAnswer: "ė", translation: "She is a student", audioText: "Ji yra studentė" },
        { id: "ex-3-4-4", type: "listening", prompt: "Is this about 'he' or 'she'?", options: ["Jis (he)", "Ji (she)"], correctAnswer: "Ji (she)", audioText: "Ji yra mokytoja" },
        { id: "ex-3-4-5", type: "multiple_choice", prompt: "What are 'jie' and 'jos'?", options: ["they (m) and they (f)", "he and she", "we and you", "I and you"], correctAnswer: "they (m) and they (f)", translation: "they", audioText: "jie, jos" },
      ],
    },
    {
      id: "lesson-3-5",
      title: "What Do You Do?",
      description: "Talk about professions.",
      exercises: [
        { id: "ex-3-5-1", type: "matching", prompt: "Match professions", options: ["mokytojas", "teacher (m)", "gydytojas", "doctor (m)", "studentas", "student (m)"], correctAnswer: "mokytojas:teacher (m),gydytojas:doctor (m),studentas:student (m)", audioText: "mokytojas, gydytojas, studentas" },
        { id: "ex-3-5-2", type: "fill_in_blank", prompt: "Female teacher = Mokyto____", correctAnswer: "ja", translation: "teacher (f)", audioText: "mokytoja" },
        { id: "ex-3-5-3", type: "multiple_choice", prompt: "What is 'gydytoja'?", options: ["doctor (f)", "teacher (f)", "student (f)", "nurse (f)"], correctAnswer: "doctor (f)", translation: "doctor (f)", audioText: "gydytoja" },
        { id: "ex-3-5-4", type: "listening", prompt: "What profession do you hear?", options: ["mokytojas (teacher)", "gydytojas (doctor)", "studentas (student)", "programuotojas (programmer)"], correctAnswer: "programuotojas (programmer)", audioText: "Aš esu programuotojas" },
        { id: "ex-3-5-5", type: "sentence_arrange", prompt: "Say: 'She is a doctor'", options: ["Ji", "yra", "gydytoja.", "gydytojas.", "jis", "studentė."], correctAnswer: ["Ji", "yra", "gydytoja."], translation: "She is a doctor", audioText: "Ji yra gydytoja." },
      ],
    },
  ],
};
