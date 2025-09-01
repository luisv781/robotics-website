import TeamMember from './TeamMember';

import memberInfo from '../MemberInfo';

export default function TeamSection() {
    return (
        <div className='section flex flex-col bg-blue-950/20'>
            <h1 className='text-4xl font-bold my-4' id='about-us'>
                Meet the Team
            </h1>
            <div
                className='justify-center items-center flex-wrap gap-8 p-8 grid grid-cols-[repeat(auto-fit,minmax(24em,1fr))]'
                id='theTeam'
            >
                <TeamMember {...memberInfo[0]} />
                <TeamMember {...memberInfo[1]} />
                <TeamMember {...memberInfo[2]} />
                <TeamMember {...memberInfo[3]} />
                <TeamMember {...memberInfo[4]} />
                <TeamMember {...memberInfo[5]} />
            </div>
        </div>
    );
}
