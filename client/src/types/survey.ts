export type Step = "intro" | "calibration" | "slo-1" | "slo-2" | "slo-3" | "slo-4" | "topic" | "reflection";

export type SLO = {
    id: number;
    label: string;
    shortDescription: string,
    description: string;
    fullDescription: string; // "What does this mean?" dropdown
    tag: string;
    confidenceQuestion: string;
    activities: Activity[];
    frequencyQuestion: string;
    frequencyOptions: string[];
    openEndedPrompt: string;
    quickCheck?: QuickCheck;
}

export type Activity = {
    label: string;
    icon: string; // lucide icon name
}

export type QuickCheck = {
    code: string;
    language: string;
    question: string;
    scratchPad?: boolean;
    options: { label: string; value: string }[];
    answer: string;
}

export type Topic = {
    name: string;
    category: string;
}

export type CourseSection = {
    surveyTitle: string;
    surveyDescription: string;
    courseCode: string;
    courseName: string;
    section: string;
    semester: string;
    professor: {
        name: string;
        email: string;
    };
}

export type Student = {
    userName: string;
    userRole: string;
    profile: string;
}
