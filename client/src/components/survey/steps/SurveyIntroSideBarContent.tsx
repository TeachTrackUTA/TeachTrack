import Logo from '../../../assets/logo.svg';

interface Props {
    surveyTitle: string;
    description: string;
}

export default function SurveyIntroSidebarContent ({ surveyTitle, description }: Props) {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
                <img src={Logo} alt="TeachTrack" className="w-12 h-12" />
                <span className="font-semibold text-lg">TeachTrack</span>
            </div>
            <h1 className="text-2xl text-[var(--color-text-primary)]">{surveyTitle}</h1>
            <p className="text-base text-[var(--color-text-secondary)]">{description}</p>
        </div>
    );
}