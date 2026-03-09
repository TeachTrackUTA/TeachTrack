import { Link } from 'react-router-dom';
import {Home, ChevronRight } from 'lucide-react';

type BreadcrumbItem = {
    label: string;
    href?: string;
};

interface Props {
    items: BreadcrumbItem[];
}

export default function Breadcrumb ({ items }: Props ) {
    return (
        <nav className='flex items-center gap-1 text-sm text-[var(--color-text-secondary)]'>
             <Link to="/" className='text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-hover)]'>
                <Home size={16} />
             </Link>
             {items.map((item, index) => (
                <div key={index} className='flex items-center gap-1'>
                    <ChevronRight size={14} />
                    {item.href ? (
                        <Link to={item.href} className='text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-hover)]'>
                            {item.label}
                        </Link>
                    ) : (
                        <span className='text-[var(--color-text-secondary)] font-medium'>{item.label}</span>
                    )}
                </div>
             ))}
        </nav>
    );
}