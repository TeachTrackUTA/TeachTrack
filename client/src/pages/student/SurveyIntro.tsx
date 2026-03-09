import SurveyLayout from "../../components/survey/layout/SurveyLayout";
import SurveySidebar from "../../components/survey/layout/SurveySidebar";
import Logo from '../assets/logo.svg'


export default function SurveyIntro () {
    return (
        <SurveyLayout
            sidebar={
                <SurveySidebar 
                    courseCode="CSE 1310"
                    userName="Quandale D."
                    userRole="Computer Science Junior"
                    userAvatar="https://i.pravatar.cc/150?img=3"
                    content={
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <img src={Logo} alt="TeachTrack" className="w-12 h-12" />
                                <span className="font-semibold text-lg">TeachTrack</span>
                            </div>
                            <h1 className="text-2xl text-[var(--color-text-primary)]">CSE 1310 Student Learning Outcomes Survey</h1>
                            <p className="text-lg text-[var(--color-text-secondary)]">This evaluation asks you to reflect on what you learned — not to rate your professor. Your honest self-assessment helps improve how this course is taught.</p>
                        </div>
                    }
                />
            }
        >
            {/* Survey Card Content Here */}
            <div className="p-8">Hello from main</div>
        </SurveyLayout>
    )
}