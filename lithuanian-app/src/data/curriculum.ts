import { unit1 } from "./units/unit1";
import { unit2 } from "./units/unit2";
import { unit3 } from "./units/unit3";
import { unit4 } from "./units/unit4";
import { unit5 } from "./units/unit5";
import { unit6 } from "./units/unit6";

export type ExerciseType = 'multiple_choice' | 'fill_in_blank' | 'matching' | 'listening' | 'sentence_arrange';

export interface Exercise {
    id: string;
    type: ExerciseType;
    prompt: string;
    options?: string[];
    correctAnswer: string | string[];
    translation?: string;
    audioText?: string;
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    exercises: Exercise[];
}

export interface GrammarTip {
    title: string;
    explanation: string;
    examples: { lithuanian: string; english: string }[];
}

export interface VocabWord {
    lithuanian: string;
    english: string;
    gender?: "m" | "f" | "n";
    audioText?: string;
}

export interface Unit {
    id: string;
    title: string;
    description: string;
    icon?: string;
    lessons: Lesson[];
    grammarTips?: GrammarTip[];
    keyVocabulary?: VocabWord[];
}

export const curriculum: Unit[] = [
    unit1,
    unit2,
    unit3,
    unit4,
    unit5,
    unit6,
];
