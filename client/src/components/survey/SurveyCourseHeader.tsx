interface Props {
    semester: string
    section: string
    courseTitle: string
    courseNumber: string
    instructor: string
}

export default function SurveyCourseHeader ({ semester, courseTitle, courseNumber, instructor, section }: Props) {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-lg text-[var(--color-text-secondary)]">{semester} | {section}</span>
            <h2 className="text-2xl text-[var(--color-text-primary)]">{courseNumber} — {courseTitle}</h2>
            <span className="text-lg text-[var(--color-text-secondary)]">Instructor: {instructor}</span>
        </div>
    );
}