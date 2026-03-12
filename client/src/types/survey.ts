export type Step = "intro" | "calibration" | "slo-1" | "slo-2" | "slo-3" | "slo-4" | "topic" | "reflection";

export type SLO = {
    id: number;
    label: string;
    description: string;
    tag: string;
}
