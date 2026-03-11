import Breadcrumb from '../ui/Breadcrumb';
import { HelpCircle } from 'lucide-react';

interface Props {
    courseCode: string;
    userName: string;
    userRole: string;
    userAvatar: string;
    content?: React.ReactNode; 
}

export default function SurveySidebar ({ courseCode, userName, userRole, userAvatar, content }: Props ) {
    return (
        <div className='flex flex-col h-full p-8'>
            {/* Top Section: Breadcrumbs & Description */}
            <div className='flex flex-col gap-6'>
                <Breadcrumb items = {[
                    { label: 'My Surveys', href: '/surveys' },
                    { label: courseCode },
                ]} />
            </div>

            {/* Middle Section */}
            <div className='flex-1 flex items-center'>
                {content}
            </div>

            {/* Bottom */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={userAvatar} alt={userName} className='w-10 h-10 rounded-full object-cover' />
                    <div className='flex flex-col'>
                        <span className='font-semibold text-sm'>{userName}</span>
                        <span className='text-xs text-[var(--color-text-secondary)]'>{userRole}</span>
                    </div>
                </div>
                <button className='text-[var(--color-brand-primary)] hover:opacity-75'>
                    <HelpCircle size={22} />
                </button>
            </div>
        </div>
    );
}