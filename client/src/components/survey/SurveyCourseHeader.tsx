interface Props {
    semester: string
    courseTitle: string
    instructor: string
}

export default function SurveyCourseHeader ({ semester, courseTitle, instructor }: Props) {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-lg text-[var(--color-text-secondary)]">{semester}</span>
            <h2 className="text-2xl text-[var(--color-text-primary)]">{courseTitle}</h2>
            <span className="text-lg text-[var(--color-text-secondary)]">Instructor: {instructor}</span>
        </div>
    );
}