export default function TeamMember({ name, role, image, description }) {
    return (
        <div className='flex flex-col items-center p-4 rounded-xl bg-gray-100/10 border-gray-50/20 border-1 transition-transform hover:scale-105 shadow-md'>
            <img
                src={image}
                alt=''
                className='w-32 h-32 rounded-full border-2 mb-4'
            />
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <p className='text-lg text-gray-300'>{role}</p>
            <p className='text-center text-gray-400 mt-2'>{description}</p>
        </div>
    );
}
