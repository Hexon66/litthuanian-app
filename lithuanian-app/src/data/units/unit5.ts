import { Unit } from "../curriculum";

export const unit5: Unit = {
  id: "unit-5",
  title: "Present Tense Verbs",
  description: "Learn to say what you do every day",
  icon: "🏃",
  grammarTips: [
    {
      title: "Present Tense Conjugation",
      explanation: "Lithuanian verbs change endings based on who does the action. The infinitive ends in -ti. Remove -ti and add the person ending.",
      examples: [
        { lithuanian: "aš dirbu (I work)", english: "-u for 'I'" },
        { lithuanian: "tu dirbi (you work)", english: "-i for 'you'" },
        { lithuanian: "jis/ji dirba (he/she works)", english: "-a for 'he/she'" },
        { lithuanian: "mes dirbame (we work)", english: "-ame for 'we'" },
        { lithuanian: "Negation: aš nedirbau (I don't work)", english: "ne + verb" },
      ],
    },
  ],
  keyVocabulary: [
    { lithuanian: "dirbti", english: "to work", audioText: "dirbti" },
    { lithuanian: "valgyti", english: "to eat", audioText: "valgyti" },
    { lithuanian: "gerti", english: "to drink", audioText: "gerti" },
    { lithuanian: "eiti", english: "to go (walk)", audioText: "eiti" },
    { lithuanian: "miegoti", english: "to sleep", audioText: "miegoti" },
    { lithuanian: "kalbėti", english: "to speak", audioText: "kalbėti" },
    { lithuanian: "skaityti", english: "to read", audioText: "skaityti" },
    { lithuanian: "rašyti", english: "to write", audioText: "rašyti" },
    { lithuanian: "mokytis", english: "to learn/study", audioText: "mokytis" },
    { lithuanian: "noriu", english: "I want", audioText: "noriu" },
    { lithuanian: "galiu", english: "I can", audioText: "galiu" },
    { lithuanian: "turiu", english: "I have/must", audioText: "turiu" },
  ],
  lessons: [
    {
      id: "lesson-5-1",
      title: "I Do, You Do",
      description: "First conjugation: dirbti, valgyti, gerti.",
      exercises: [
        { id: "ex-5-1-1", type: "matching", prompt: "Match the verb forms", options: ["aš dirbu", "I work", "tu dirbi", "you work", "jis dirba", "he works"], correctAnswer: "aš dirbu:I work,tu dirbi:you work,jis dirba:he works", audioText: "aš dirbu, tu dirbi, jis dirba" },
        { id: "ex-5-1-2", type: "fill_in_blank", prompt: "I eat = Aš val____", correctAnswer: "gau", translation: "I eat", audioText: "Aš valgau" },
        { id: "ex-5-1-3", type: "multiple_choice", prompt: "How do you say 'you drink'?", options: ["tu geri", "tu geriu", "tu geria", "tu geriam"], correctAnswer: "tu geri", translation: "you drink", audioText: "tu geri" },
        { id: "ex-5-1-4", type: "listening", prompt: "What does this person do?", options: ["dirba (works)", "valgo (eats)", "geria (drinks)", "miega (sleeps)"], correctAnswer: "valgo (eats)", audioText: "Aš valgau" },
        { id: "ex-5-1-5", type: "sentence_arrange", prompt: "Say: 'He works every day'", options: ["Jis", "dirba", "kiekvieną", "dieną.", "valgau", "aš"], correctAnswer: ["Jis", "dirba", "kiekvieną", "dieną."], translation: "He works every day", audioText: "Jis dirba kiekvieną dieną." },
      ],
    },
    {
      id: "lesson-5-2",
      title: "I Speak Lithuanian",
      description: "More verbs: speak, read, write, study.",
      exercises: [
        { id: "ex-5-2-1", type: "multiple_choice", prompt: "How do you say 'I speak Lithuanian'?", options: ["Aš kalbu lietuviškai", "Aš kalbėti lietuviškai", "Aš kalba lietuviškai", "Aš kalbam lietuviškai"], correctAnswer: "Aš kalbu lietuviškai", translation: "I speak Lithuanian", audioText: "Aš kalbu lietuviškai" },
        { id: "ex-5-2-2", type: "matching", prompt: "Match verbs", options: ["skaityti", "to read", "rašyti", "to write", "mokytis", "to study"], correctAnswer: "skaityti:to read,rašyti:to write,mokytis:to study", audioText: "skaityti, rašyti, mokytis" },
        { id: "ex-5-2-3", type: "fill_in_blank", prompt: "I read = Aš skai____", correctAnswer: "tau", translation: "I read", audioText: "Aš skaitau" },
        { id: "ex-5-2-4", type: "listening", prompt: "What is this person doing?", options: ["skaito (reads)", "rašo (writes)", "kalba (speaks)", "mokosi (studies)"], correctAnswer: "rašo (writes)", audioText: "Aš rašau" },
        { id: "ex-5-2-5", type: "sentence_arrange", prompt: "Say: 'She reads a book'", options: ["Ji", "skaito", "knygą.", "rašo", "laišką.", "jis"], correctAnswer: ["Ji", "skaito", "knygą."], translation: "She reads a book", audioText: "Ji skaito knygą." },
      ],
    },
    {
      id: "lesson-5-3",
      title: "Daily Routine",
      description: "Wake up, eat, go, sleep.",
      exercises: [
        { id: "ex-5-3-1", type: "matching", prompt: "Match daily verbs", options: ["keltis", "to wake up", "valgyti", "to eat", "eiti", "to go", "miegoti", "to sleep"], correctAnswer: "keltis:to wake up,valgyti:to eat,eiti:to go,miegoti:to sleep", audioText: "keltis, valgyti, eiti, miegoti" },
        { id: "ex-5-3-2", type: "multiple_choice", prompt: "'Aš einu' means:", options: ["I go", "I eat", "I sleep", "I work"], correctAnswer: "I go", translation: "I go", audioText: "Aš einu" },
        { id: "ex-5-3-3", type: "fill_in_blank", prompt: "I sleep = Aš mie____", correctAnswer: "gu", translation: "I sleep", audioText: "Aš miegu" },
        { id: "ex-5-3-4", type: "listening", prompt: "What time of day is described?", options: ["rytas (morning)", "diena (afternoon)", "vakaras (evening)", "naktis (night)"], correctAnswer: "rytas (morning)", audioText: "Aš keliuosi ryte" },
        { id: "ex-5-3-5", type: "sentence_arrange", prompt: "Say: 'I wake up in the morning'", options: ["Aš", "keliuosi", "ryte.", "vakare.", "miegu", "ji"], correctAnswer: ["Aš", "keliuosi", "ryte."], translation: "I wake up in the morning", audioText: "Aš keliuosi ryte." },
      ],
    },
    {
      id: "lesson-5-4",
      title: "Likes & Wants",
      description: "Noriu (want), galiu (can), turiu (have to).",
      exercises: [
        { id: "ex-5-4-1", type: "matching", prompt: "Match the modal verbs", options: ["noriu", "I want", "galiu", "I can", "turiu", "I must/have"], correctAnswer: "noriu:I want,galiu:I can,turiu:I must/have", audioText: "noriu, galiu, turiu" },
        { id: "ex-5-4-2", type: "multiple_choice", prompt: "'Aš noriu valgyti' means:", options: ["I want to eat", "I can eat", "I must eat", "I like to eat"], correctAnswer: "I want to eat", translation: "I want to eat", audioText: "Aš noriu valgyti" },
        { id: "ex-5-4-3", type: "fill_in_blank", prompt: "I can speak = Aš ____ kalbėti", correctAnswer: "galiu", translation: "I can speak", audioText: "Aš galiu kalbėti" },
        { id: "ex-5-4-4", type: "listening", prompt: "What does this person want?", options: ["noriu valgyti (eat)", "noriu gerti (drink)", "noriu miegoti (sleep)", "noriu eiti (go)"], correctAnswer: "noriu gerti (drink)", audioText: "Aš noriu gerti" },
        { id: "ex-5-4-5", type: "sentence_arrange", prompt: "Say: 'I have to work'", options: ["Aš", "turiu", "dirbti.", "valgyti.", "noriu", "tu"], correctAnswer: ["Aš", "turiu", "dirbti."], translation: "I have to work", audioText: "Aš turiu dirbti." },
      ],
    },
    {
      id: "lesson-5-5",
      title: "Questions & Negation",
      description: "Ask questions and say 'I don't...'",
      exercises: [
        { id: "ex-5-5-1", type: "multiple_choice", prompt: "How do you ask 'Do you speak Lithuanian?'", options: ["Ar tu kalbi lietuviškai?", "Tu kalbi lietuviškai", "Kalbėti lietuviškai?", "Ar kalba lietuviškai?"], correctAnswer: "Ar tu kalbi lietuviškai?", translation: "Do you speak Lithuanian?", audioText: "Ar tu kalbi lietuviškai?" },
        { id: "ex-5-5-2", type: "fill_in_blank", prompt: "I don't work = Aš ne____", correctAnswer: "dirbu", translation: "I don't work", audioText: "Aš nedirbu" },
        { id: "ex-5-5-3", type: "matching", prompt: "Match questions and answers", options: ["Ką tu darai?", "What are you doing?", "Kur tu eini?", "Where are you going?"], correctAnswer: "Ką tu darai?:What are you doing?,Kur tu eini?:Where are you going?", audioText: "Ką tu darai? Kur tu eini?" },
        { id: "ex-5-5-4", type: "listening", prompt: "Is this a question or a statement?", options: ["Question", "Statement"], correctAnswer: "Question", audioText: "Ar tu kalbi lietuviškai?" },
        { id: "ex-5-5-5", type: "sentence_arrange", prompt: "Say: 'No, I don't speak Lithuanian'", options: ["Ne,", "aš", "nekalbu", "lietuviškai.", "kalbu", "taip"], correctAnswer: ["Ne,", "aš", "nekalbu", "lietuviškai."], translation: "No, I don't speak Lithuanian", audioText: "Ne, aš nekalbu lietuviškai." },
      ],
    },
  ],
};
