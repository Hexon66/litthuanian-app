import { unit1 } from "./units/unit1";
import { unit2 } from "./units/unit2";
import { unit3 } from "./units/unit3";
import { unit4 } from "./units/unit4";
import { unit5 } from "./units/unit5";
import { unit6 } from "./units/unit6";
import { unit7 } from "./units/unit7";
import { unit8 } from "./units/unit8";

export type ExerciseType = 'multiple_choice' | 'fill_in_blank' | 'matching' | 'listening' | 'sentence_arrange';

export interface Exercise {
    id: string;
    type: ExerciseType;
    prompt: string;
    options?: string[]; // For multiple choice, matching, sentence arrange
    correctAnswer: string | string[]; // Can be an array for sentence arrange
    translation?: string;
    audioText?: string; // The text to be synthesized
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    exercises: Exercise[];
}

export interface Unit {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
}

export const curriculum: Unit[] = [
    unit1,
    unit2,
    unit3,
    unit4,
    unit5,
    unit6,
    unit7,
    unit8
];
