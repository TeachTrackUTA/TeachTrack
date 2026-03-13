import type { SLO, Topic, CourseSection, Student } from "../types/survey";
// // ─── STUDENT ────────────────────────────────────────────────────────

export const STUDENT_DATA: Student = {
    userName: "Bobby Flennoy",
    userRole: "Computer Science Senior",
    profile: "https://i.pravatar.cc/150?img=3"
}
// ─── COURSE / SECTION ────────────────────────────────────────────────────────
// TODO: Replace with API response — GET /api/surveys/:surveyId

export const COURSE_DATA: CourseSection = {
    surveyTitle: "CSE 1310 Student Learning Outcomes Survey",
    surveyDescription: "This evaluation asks you to reflect on what you learned — not to rate your professor. Your honest self-assessment helps improve how this course is taught.",
    courseCode: "CSE 1310",
    courseName: "Introduction to Computers & Programming",
    section: "001",
    semester: "Spring 2026",
    professor: {
        name: "Dr. Jane Smith",
        email: "jane.smith@uta.edu",
    },
};

// ─── SLO DATA ─────────────────────────────────────────────────────────────────
// TODO: Replace with API response — GET /api/surveys/:surveyId/slos


export const SLO_DATA: SLO[] = [
    {
        id: 1,
        label: "SLO 1",
        shortDescription: "Structured Programming",
        description: "Implement the concepts of structured programming to design and develop a C program (up to 250 lines).",
        fullDescription: "This means you can take a problem described in words, break it down into pseudocode, and write a complete, working C program using proper structure — functions, loops, conditionals, arrays, and file I/O — following formatting standards.",
        tag: "Apply / Create",
        confidenceQuestion: "How confident are you in your ability to write a for loop that prints numbers 1 to 10?",
        activities: [
            { label: "Lecture", icon: "BookOpen" },
            { label: "Programming Labs / Assignments", icon: "CodeXml" },
            { label: "Group Projects", icon: "Users" },
            { label: "Textbook / Readings", icon: "BookMarked" },
            { label: "Office Hours / TA Sessions", icon: "Info" },
            { label: "Peer Discussion", icon: "MessageCircle" },
            { label: "Videos", icon: "Video" },
            { label: "Debugging Practice", icon: "Bug" },
        ],
        frequencyQuestion: "How often did course activities require you to design a program from scratch (not just modify existing code)?",
        frequencyOptions: ["Never", "Rarely (1-2 times)", "Sometimes (3-5 times)", "Often (6-10 times)", "Very Often (11+ times)"],
        openEndedPrompt: "Describe a specific assignment or moment where you felt you truly understood structured programming — or where you struggled most.",
    },
    {
        id: 2,
        label: "SLO 2",
        description: "Interpret and demonstrate what a C program does, line by line, from beginning to end.",
        shortDescription: "Code Interpretation",
        fullDescription: "This means you can look at someone else's C code (up to 250 lines) and explain exactly what each line does, including how control flows through conditionals, loops, and function calls.",
        tag: "Understand / Analyze",
        confidenceQuestion: "How confident are you in your ability to read unfamiliar C code and explain what it does line by line?",
        activities: [
            { label: "Lecture", icon: "BookOpen" },
            { label: "Programming Labs / Assignments", icon: "Video" },
            { label: "Group Projects", icon: "Users" },
            { label: "Textbook / Readings", icon: "BookOpen" },
            { label: "Office Hours / TA Sessions", icon: "Clock" },
            { label: "Peer Discussion", icon: "MessageCircle" },
            { label: "Videos", icon: "Video" },
            { label: "Debugging Practice", icon: "Bug" },
        ],
        frequencyQuestion: "How often did you have to trace through code to understand what it does?",
        frequencyOptions: ["Never", "Rarely (1-2 times)", "Sometimes (3-5 times)", "Often (6-10 times)", "Very Often (11+ times)"],
        openEndedPrompt: "Describe a moment where tracing through code helped you understand a concept — or where it was especially difficult.",
    },
    {
        id: 3,
        label: "SLO 3",
        shortDescription: "Variable Tracing",
        description: "Extrapolate the value of any variable at any point in the execution of a C program.",
        fullDescription: "This means that given a C program, you can determine what value any variable holds at any specific line — tracking it through assignments, loops, conditionals, and function calls.",
        tag: "Analyze",
        confidenceQuestion: "How confident are you in your ability to determine the value of any variable at any point during a program's execution?",
        activities: [
            { label: "Lecture", icon: "BookOpen" },
            { label: "Programming Labs / Assignments", icon: "Video" },
            { label: "Group Projects", icon: "Users" },
            { label: "Textbook / Readings", icon: "BookOpen" },
            { label: "Office Hours / TA Sessions", icon: "Clock" },
            { label: "Peer Discussion", icon: "MessageCircle" },
            { label: "Videos", icon: "Video" },
            { label: "Debugging Practice", icon: "Bug" },
        ],
        frequencyQuestion: "How often did you need to manually track variable values to debug or understand a program?",
        frequencyOptions: ["Never", "Rarely (1-2 times)", "Sometimes (3-5 times)", "Often (6-10 times)", "Very Often (11+ times)"],
        openEndedPrompt: "Describe a time when tracking variable values was critical to solving a problem.",
        quickCheck: {
            code: `int x = 5;\nint y = 3;\nfor (int i = 0; i < 3; i++)\n{\n    x = x + y;\n    y = y - 1;\n}`,
            language: "c",
            question: "What is the value of x after the loop completes?",
            scratchPad: true,
            options: [
                { label: "A", value: "11" },
                { label: "B", value: "14" },
                { label: "C", value: "17" },
                { label: "D", value: "20" },
            ],
            answer: "B",
        },
    },
    {
        id: 4,
        label: "SLO 4",
        shortDescription: "Reproduce Output",
        description: "Reproduce the output of a C program (up to 250 lines).",
        fullDescription: "This means given a complete C program, you can determine exactly what will be printed to the screen, including correct formatting, spacing, and newlines.",
        tag: "Apply",
        confidenceQuestion: "How confident are you in your ability to look at a C program and write out exactly what it would print?",
        activities: [
            { label: "Lecture", icon: "BookOpen" },
            { label: "Programming Labs / Assignments", icon: "Video" },
            { label: "Group Projects", icon: "Users" },
            { label: "Textbook / Readings", icon: "BookOpen" },
            { label: "Office Hours / TA Sessions", icon: "Clock" },
            { label: "Peer Discussion", icon: "MessageCircle" },
            { label: "Videos", icon: "Video" },
            { label: "Debugging Practice", icon: "Bug" },
        ],
        frequencyQuestion: "How often did assignments ask you to predict or reproduce program output?",
        frequencyOptions: ["Never", "Rarely (1-2 times)", "Sometimes (3-5 times)", "Often (6-10 times)", "Very Often (11+ times)"],
        openEndedPrompt: "Describe a moment where predicting output helped or challenged your understanding.",
        quickCheck: {
            code: `int a = 10;\nint b = 3;\nprintf("%d %d %.2f\\n", a/b, a%b, (float)a/b);`,
            language: "c",
            question: "What is the exact output of this code?",
            options: [
                { label: "A", value: "3 1 3.33" },
                { label: "B", value: "3 1 3.00" },
                { label: "C", value: "3.33 1 3.33" },
                { label: "D", value: "3 1 3.3" },
            ],
            answer: "A",
        },
    },
];

// ─── TOPIC CONFIDENCE DATA ────────────────────────────────────────────────────
// TODO: Replace with API response — GET /api/surveys/:surveyId/topics

export const TOPIC_DATA: { category: string; topics: Topic[] }[] = [
    {
        category: "Foundations",
        topics: [
            { name: "ASCII values and character relationships", category: "Foundations" },
            { name: "Number system conversions (binary, octal, hex, decimal)", category: "Foundations" },
            { name: "Basic UNIX commands and command-line compilation", category: "Foundations" },
        ],
    },
    {
        category: "Core Programming",
        topics: [
            { name: "Variables, data types, and type casting", category: "Core Programming" },
            { name: "Formatted I/O (printf and scanf)", category: "Core Programming" },
            { name: "Operators and operator precedence", category: "Core Programming" },
            { name: "Preprocessor directives (#include, #define)", category: "Core Programming" },
        ],
    },
    {
        category: "Program Design",
        topics: [
            { name: "Software development cycle and pseudocode", category: "Program Design" },
            { name: "Debugging strategies (compiler errors, logic errors)", category: "Program Design" },
        ],
    },
    {
        category: "Control & Structure",
        topics: [
            { name: "Selection structures (if, if-else, switch)", category: "Control & Structure" },
            { name: "Loops (while, do-while, for, nested loops)", category: "Control & Structure" },
            { name: "Functions (defining, calling, scope, parameters)", category: "Control & Structure" },
        ],
    },
    {
        category: "Data",
        topics: [
            { name: "Arrays (1D and 2D — declare, initialize, search, pass to functions)", category: "Data" },
            { name: "File handling (fopen, fclose, fprintf, fscanf, fgets)", category: "Data" },
        ],
    },
];

// ─── REFLECTION DATA ────────────────────────────────────────────────────
// TODO: Replace with API response — GET /api/surveys/:surveyId/reflection

export const REFLECTION_DATA = {
    preparednessScale: [
        { value: 1, label: "Not Prepared" },
        { value: 2, label: "" },
        { value: 3, label: "Somewhat Prepared" },
        { value: 4, label: "Considerably" },
        { value: 5, label: "Well Prepared" }
    ],
    leastConfidentAreas: [
        "ASCII values and character relationships",
        "Number system conversions (binary, octal, hex, decimal)",
        "Basic UNIX commands and command-line compilation",
        "Variables, data types, and type casting",
        "Formatted I/O (printf and scanf)",
        "Operators and operator precedence",
        "Preprocessor directives (#include, #define)",
        "Debugging strategies (compiler errors, logic errors)",
        "Selection structures (if, if-else, switch)",
        "Functions (defining, calling, scope, parameters)",
        "Arrays (1D and 2D — declare, initialize, search, pass to functions)",
        "File handling (fopen, fclose, fprintf, fscanf, fgets)"
    ],
    changeForLearning: {
        prompt: "What is one specific change that would have helped you learn more effectively in this course?",
        helperText: "Be specific — for example, 'More in-class practice with nested loops' is more helpful than 'better teaching.'"
    },
    valuableLearning: {
        prompt: "What was the single most valuable thing you learned in this course?",
        helperText: "Think beyond just code — it could be a problem-solving approach, debugging mindset, etc."
    }
};