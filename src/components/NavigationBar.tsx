import roboticsLogo from '/img/robotlogo.jpg';

export default function NavBar() {
    return (
        <nav className='sticky top-0 z-1 flex items-stretch justify-around w-full h-16 m-0 gap-36 backdrop-blur-lg shadow-2xl'>
            <a
                href='/'
                className='flex items-center gap-4 text-white hover:text-blue-500 will-change-[filter] transition-[filter_colors] duration-200 hover:drop-shadow-[0_0_1em_#503cff66]'
            >
                <img
                    src={roboticsLogo}
                    alt=''
                    className='h-10 w-10 border-2 rounded-full'
                />
                <h1 className='text-inherit text-3xl font-bold'>
                    CHS ROBOTICS
                </h1>
            </a>
            <div className='links flex gap-8'>
                <a href='#about-us'>About Us</a>
                <a href='https://forms.gle/JyCoz9qwUjzfTGiBA' target='_blank'>
                    Join the Club
                </a>
            </div>
        </nav>
    );
}
