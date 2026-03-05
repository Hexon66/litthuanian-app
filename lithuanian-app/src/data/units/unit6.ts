import { Unit } from "../curriculum";

export const unit6: Unit = {
    id: "unit-6",
    title: "Unit 6: Shopping & Money",
    description: "Buy things, ask prices",
    lessons: [
        {
            id: "lesson-6-1",
            title: "At the Shop",
            description: "Everyday purchases.",
            exercises: [
                {
                    id: "ex-6-1-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Shop'?",
                    options: ["Parduotuvė", "Turgus", "Pinigai", "Grynieji"],
                    correctAnswer: "Parduotuvė",
                    translation: "Shop / Store",
                    audioText: "Parduotuvė"
                },
                {
                    id: "ex-6-1-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Pirkėjas", "Pardavėjas", "Prekė", "Kasa"],
                    correctAnswer: "Kasa",
                    translation: "Cash register",
                    audioText: "Kasa"
                },
                {
                    id: "ex-6-1-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Krepšelis", "Basket", "Maišelis", "Bag"],
                    correctAnswer: "Krepšelis:Basket,Maišelis:Bag"
                },
                {
                    id: "ex-6-1-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'Do you need a bag?'",
                    options: ["Ar", "reikia", "maišelio?", "krepšelio?"],
                    correctAnswer: ["Ar", "reikia", "maišelio?"],
                    audioText: "Ar reikia maišelio?"
                },
                {
                    id: "ex-6-1-5",
                    type: "fill_in_blank",
                    prompt: "I am buying = Aš per____",
                    correctAnswer: "ku",
                    translation: "I am buying",
                    audioText: "Aš perku"
                }
            ]
        },
        {
            id: "lesson-6-2",
            title: "Prices",
            description: "How much does it cost?",
            exercises: [
                {
                    id: "ex-6-2-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'How much does it cost?'",
                    options: ["Kiek kainuoja?", "Kada atidaryta?", "Kur yra?", "Kas tai?"],
                    correctAnswer: "Kiek kainuoja?",
                    translation: "How much does it cost?",
                    audioText: "Kiek kainuoja?"
                },
                {
                    id: "ex-6-2-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Brangu", "Pigu", "Kaina", "Nuolaida"],
                    correctAnswer: "Brangu",
                    translation: "Expensive",
                    audioText: "Brangu"
                },
                {
                    id: "ex-6-2-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Brangu", "Expensive", "Pigu", "Cheap"],
                    correctAnswer: "Brangu:Expensive,Pigu:Cheap"
                },
                {
                    id: "ex-6-2-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'It is too expensive.'",
                    options: ["Tai", "yra", "per", "brangu.", "pigu."],
                    correctAnswer: ["Tai", "yra", "per", "brangu."],
                    audioText: "Tai yra per brangu."
                },
                {
                    id: "ex-6-2-5",
                    type: "fill_in_blank",
                    prompt: "Price = Kai____",
                    correctAnswer: "na",
                    translation: "Price",
                    audioText: "Kaina"
                }
            ]
        },
        {
            id: "lesson-6-3",
            title: "Clothes",
            description: "Shopping for apparel.",
            exercises: [
                {
                    id: "ex-6-3-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Clothes'?",
                    options: ["Drabužiai", "Batai", "Kelnės", "Marškiniai"],
                    correctAnswer: "Drabužiai",
                    translation: "Clothes",
                    audioText: "Drabužiai"
                },
                {
                    id: "ex-6-3-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Batai", "Striukė", "Kepurė", "Didelis"],
                    correctAnswer: "Batai",
                    translation: "Shoes",
                    audioText: "Batai"
                },
                {
                    id: "ex-6-3-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'I need shoes.'",
                    options: ["Man", "reikia", "batų.", "drabužių."],
                    correctAnswer: ["Man", "reikia", "batų."],
                    audioText: "Man reikia batų."
                },
                {
                    id: "ex-6-3-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Didelis", "Large", "Mažas", "Small"],
                    correctAnswer: "Didelis:Large,Mažas:Small"
                },
                {
                    id: "ex-6-3-5",
                    type: "fill_in_blank",
                    prompt: "Shirt = Marški____",
                    correctAnswer: "niai",
                    translation: "Shirt",
                    audioText: "Marškiniai"
                }
            ]
        },
        {
            id: "lesson-6-4",
            title: "Colors",
            description: "Describing items.",
            exercises: [
                {
                    id: "ex-6-4-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'Black'?",
                    options: ["Juoda", "Balta", "Raudona", "Žalia"],
                    correctAnswer: "Juoda",
                    translation: "Black",
                    audioText: "Juoda"
                },
                {
                    id: "ex-6-4-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Mėlyna", "Geltona", "Balta", "Žalia"],
                    correctAnswer: "Balta",
                    translation: "White",
                    audioText: "Balta"
                },
                {
                    id: "ex-6-4-3",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Raudona", "Red", "Mėlyna", "Blue"],
                    correctAnswer: "Raudona:Red,Mėlyna:Blue"
                },
                {
                    id: "ex-6-4-4",
                    type: "sentence_arrange",
                    prompt: "Translate 'I want a white shirt.'",
                    options: ["Aš", "noriu", "baltų", "marškinių."],
                    correctAnswer: ["Aš", "noriu", "baltų", "marškinių."],
                    audioText: "Aš noriu baltų marškinių."
                },
                {
                    id: "ex-6-4-5",
                    type: "fill_in_blank",
                    prompt: "Green = Ža____",
                    correctAnswer: "lia",
                    translation: "Green",
                    audioText: "Žalia"
                }
            ]
        },
        {
            id: "lesson-6-5",
            title: "Payment",
            description: "Finishing the transaction.",
            exercises: [
                {
                    id: "ex-6-5-1",
                    type: "multiple_choice",
                    prompt: "How do you say 'To pay'?",
                    options: ["Mokėti", "Pirkti", "Imti", "Duoti"],
                    correctAnswer: "Mokėti",
                    translation: "To pay",
                    audioText: "Mokėti"
                },
                {
                    id: "ex-6-5-2",
                    type: "listening",
                    prompt: "What do you hear?",
                    options: ["Grąža", "Kortelė", "Grynieji", "Kvitas"],
                    correctAnswer: "Grąža",
                    translation: "Change (money)",
                    audioText: "Grąža"
                },
                {
                    id: "ex-6-5-3",
                    type: "sentence_arrange",
                    prompt: "Translate 'Can I pay by card?'",
                    options: ["Ar", "galiu", "mokėti", "kortele?", "grynais?"],
                    correctAnswer: ["Ar", "galiu", "mokėti", "kortele?"],
                    audioText: "Ar galiu mokėti kortele?"
                },
                {
                    id: "ex-6-5-4",
                    type: "matching",
                    prompt: "Match the pairs",
                    options: ["Kvitas", "Receipt", "Grąža", "Change"],
                    correctAnswer: "Kvitas:Receipt,Grąža:Change"
                },
                {
                    id: "ex-6-5-5",
                    type: "fill_in_blank",
                    prompt: "Cash = Grynie____",
                    correctAnswer: "ji",
                    translation: "Cash",
                    audioText: "Grynieji"
                }
            ]
        }
    ]
};
