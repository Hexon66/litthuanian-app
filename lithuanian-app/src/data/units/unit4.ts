import { Unit } from "../curriculum";

export const unit4: Unit = {
  id: "unit-4",
  title: "Everyday Things",
  description: "Colors, food, home, and describing things",
  icon: "🏠",
  grammarTips: [
    {
      title: "Adjective Agreement",
      explanation: "Adjectives must match the gender of the noun. Masculine: -as, -is, -us. Feminine: -a, -ė, -i.",
      examples: [
        { lithuanian: "didelis namas (big house, m)", english: "masculine adjective" },
        { lithuanian: "didelė šeima (big family, f)", english: "feminine adjective" },
        { lithuanian: "gražus miestas (beautiful city, m)", english: "masculine -us" },
        { lithuanian: "graži diena (beautiful day, f)", english: "feminine -i" },
      ],
    },
  ],
  keyVocabulary: [
    { lithuanian: "raudonas", english: "red", gender: "m", audioText: "raudonas" },
    { lithuanian: "mėlynas", english: "blue", gender: "m", audioText: "mėlynas" },
    { lithuanian: "žalias", english: "green", gender: "m", audioText: "žalias" },
    { lithuanian: "baltas", english: "white", gender: "m", audioText: "baltas" },
    { lithuanian: "juodas", english: "black", gender: "m", audioText: "juodas" },
    { lithuanian: "namas", english: "house", gender: "m", audioText: "namas" },
    { lithuanian: "stalas", english: "table", gender: "m", audioText: "stalas" },
    { lithuanian: "duona", english: "bread", gender: "f", audioText: "duona" },
    { lithuanian: "pienas", english: "milk", gender: "m", audioText: "pienas" },
    { lithuanian: "vanduo", english: "water", gender: "m", audioText: "vanduo" },
    { lithuanian: "kava", english: "coffee", gender: "f", audioText: "kava" },
    { lithuanian: "didelis", english: "big", gender: "m", audioText: "didelis" },
    { lithuanian: "mažas", english: "small", gender: "m", audioText: "mažas" },
    { lithuanian: "geras", english: "good", gender: "m", audioText: "geras" },
  ],
  lessons: [
    {
      id: "lesson-4-1",
      title: "Colors",
      description: "Learn the main colors.",
      exercises: [
        { id: "ex-4-1-1", type: "matching", prompt: "Match the colors", options: ["raudonas", "red", "mėlynas", "blue", "žalias", "green", "geltonas", "yellow"], correctAnswer: "raudonas:red,mėlynas:blue,žalias:green,geltonas:yellow", audioText: "raudonas, mėlynas, žalias, geltonas" },
        { id: "ex-4-1-2", type: "multiple_choice", prompt: "What color is 'baltas'?", options: ["white", "black", "blue", "red"], correctAnswer: "white", translation: "white", audioText: "baltas" },
        { id: "ex-4-1-3", type: "fill_in_blank", prompt: "Black = Juo____", correctAnswer: "das", translation: "black", audioText: "juodas" },
        { id: "ex-4-1-4", type: "listening", prompt: "What color do you hear?", options: ["raudonas (red)", "žalias (green)", "mėlynas (blue)", "geltonas (yellow)"], correctAnswer: "žalias (green)", audioText: "žalias" },
        { id: "ex-4-1-5", type: "multiple_choice", prompt: "The Lithuanian flag colors are:", options: ["geltonas, žalias, raudonas", "mėlynas, baltas, raudonas", "žalias, baltas, juodas", "geltonas, mėlynas, raudonas"], correctAnswer: "geltonas, žalias, raudonas", audioText: "geltonas, žalias, raudonas" },
      ],
    },
    {
      id: "lesson-4-2",
      title: "At Home",
      description: "Things around the house.",
      exercises: [
        { id: "ex-4-2-1", type: "matching", prompt: "Match household items", options: ["namas", "house", "stalas", "table", "kėdė", "chair", "lova", "bed"], correctAnswer: "namas:house,stalas:table,kėdė:chair,lova:bed", audioText: "namas, stalas, kėdė, lova" },
        { id: "ex-4-2-2", type: "multiple_choice", prompt: "What is 'langas'?", options: ["window", "door", "wall", "floor"], correctAnswer: "window", translation: "window", audioText: "langas" },
        { id: "ex-4-2-3", type: "fill_in_blank", prompt: "Room = Kam____", correctAnswer: "barys", translation: "room", audioText: "kambarys" },
        { id: "ex-4-2-4", type: "listening", prompt: "What do you hear?", options: ["durys (door)", "langas (window)", "stalas (table)", "lova (bed)"], correctAnswer: "durys (door)", audioText: "durys" },
        { id: "ex-4-2-5", type: "sentence_arrange", prompt: "Say: 'The house is big'", options: ["Namas", "yra", "didelis.", "mažas.", "stalas", "graži"], correctAnswer: ["Namas", "yra", "didelis."], translation: "The house is big", audioText: "Namas yra didelis." },
      ],
    },
    {
      id: "lesson-4-3",
      title: "Food Basics",
      description: "Common food and drinks.",
      exercises: [
        { id: "ex-4-3-1", type: "matching", prompt: "Match food words", options: ["duona", "bread", "pienas", "milk", "vanduo", "water", "kava", "coffee"], correctAnswer: "duona:bread,pienas:milk,vanduo:water,kava:coffee", audioText: "duona, pienas, vanduo, kava" },
        { id: "ex-4-3-2", type: "multiple_choice", prompt: "What is 'obuolys'?", options: ["apple", "orange", "bread", "milk"], correctAnswer: "apple", translation: "apple", audioText: "obuolys" },
        { id: "ex-4-3-3", type: "fill_in_blank", prompt: "Cheese = Sū____", correctAnswer: "ris", translation: "cheese", audioText: "sūris" },
        { id: "ex-4-3-4", type: "listening", prompt: "What drink do you hear?", options: ["kava (coffee)", "arbata (tea)", "pienas (milk)", "vanduo (water)"], correctAnswer: "arbata (tea)", audioText: "arbata" },
        { id: "ex-4-3-5", type: "sentence_arrange", prompt: "Say: 'I want coffee'", options: ["Aš", "noriu", "kavos.", "arbatos.", "pieno.", "tu"], correctAnswer: ["Aš", "noriu", "kavos."], translation: "I want coffee", audioText: "Aš noriu kavos." },
      ],
    },
    {
      id: "lesson-4-4",
      title: "Big & Small",
      description: "Describe things with adjectives.",
      exercises: [
        { id: "ex-4-4-1", type: "matching", prompt: "Match adjectives", options: ["didelis", "big (m)", "mažas", "small (m)", "gražus", "beautiful (m)", "geras", "good (m)"], correctAnswer: "didelis:big (m),mažas:small (m),gražus:beautiful (m),geras:good (m)", audioText: "didelis, mažas, gražus, geras" },
        { id: "ex-4-4-2", type: "fill_in_blank", prompt: "Big (feminine) = Didel____", correctAnswer: "ė", translation: "big (f)", audioText: "didelė" },
        { id: "ex-4-4-3", type: "multiple_choice", prompt: "'Graži diena' means:", options: ["Beautiful day", "Big day", "Good day", "Bad day"], correctAnswer: "Beautiful day", translation: "Beautiful day", audioText: "Graži diena" },
        { id: "ex-4-4-4", type: "listening", prompt: "What adjective do you hear?", options: ["blogas (bad)", "geras (good)", "mažas (small)", "didelis (big)"], correctAnswer: "blogas (bad)", audioText: "blogas" },
        { id: "ex-4-4-5", type: "sentence_arrange", prompt: "Say: 'The table is small'", options: ["Stalas", "yra", "mažas.", "didelis.", "kėdė", "graži"], correctAnswer: ["Stalas", "yra", "mažas."], translation: "The table is small", audioText: "Stalas yra mažas." },
      ],
    },
    {
      id: "lesson-4-5",
      title: "This Is...",
      description: "Point and describe things.",
      exercises: [
        { id: "ex-4-5-1", type: "multiple_choice", prompt: "How do you say 'This is...'?", options: ["Tai yra...", "Kas yra...", "Kur yra...", "Ar yra..."], correctAnswer: "Tai yra...", translation: "This is...", audioText: "Tai yra" },
        { id: "ex-4-5-2", type: "fill_in_blank", prompt: "Here is = ____ yra", correctAnswer: "Čia", translation: "Here is", audioText: "Čia yra" },
        { id: "ex-4-5-3", type: "sentence_arrange", prompt: "Ask: 'Is this a house?'", options: ["Ar", "tai", "yra", "namas?", "stalas?", "čia"], correctAnswer: ["Ar", "tai", "yra", "namas?"], translation: "Is this a house?", audioText: "Ar tai yra namas?" },
        { id: "ex-4-5-4", type: "listening", prompt: "What is being pointed at?", options: ["Tai yra stalas (table)", "Tai yra kėdė (chair)", "Tai yra namas (house)", "Tai yra lova (bed)"], correctAnswer: "Tai yra stalas (table)", audioText: "Tai yra stalas" },
        { id: "ex-4-5-5", type: "matching", prompt: "Match the phrases", options: ["Tai yra", "This is", "Čia yra", "Here is", "Ar tai?", "Is this?"], correctAnswer: "Tai yra:This is,Čia yra:Here is,Ar tai?:Is this?", audioText: "Tai yra. Čia yra. Ar tai?" },
      ],
    },
  ],
};
