import { IconBrandInstagram } from '@tabler/icons-react';
import secret from '../uhm.ts';

export default function Footer() {
    return (
        <footer className='flex justify-between items-center px-32 py-4 h-20 max-lg:px-8 bg-blue-950'>
            <p className='text-gray-300' onClick={secret}>
                Chavez High School Robotics Club
            </p>
            <a
                href='https://www.instagram.com/cchavezroboticsclub/'
                target='_blank'
                aria-label='Our Instagram'
            >
                <IconBrandInstagram color='#d1d5dc' size={32} stroke={1.5} />
            </a>
        </footer>
    );
}
