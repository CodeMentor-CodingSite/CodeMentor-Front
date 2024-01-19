'use client';

import React from 'react';
import SkillList from "@/containers/userBoard/skills/SkillList";
import {IconDot} from "@/public/svgs";

export const skillList = [
    {title:'Array', count:2},
    {title:'Two Pointers', count:3},
    {title:'Sorting', count:1},
    {title:'Divide Conquer', count:5},
    {title:'blabla', count:1},
    {title:'vlalva', count:2}
];

function Skills() {
    return (
        <section className='flex flex-col'>
            <h2 className='font-semibold text-[18px]'>Skills</h2>
            <section className='flex flex-col space-y-4 my-3'>
                <div>
                    <div className='flex items-center space-x-1 font-semibold'>
                        <IconDot width={10} height={10} r={2.5} color='#EF4643'/>
                        <span>Hard</span>
                    </div>
                    <SkillList/>
                </div>
                <div>
                    <div className='flex items-center space-x-1 font-semibold'>
                        <IconDot width={10} height={10} r={2.5} color='#F7BB1F' />
                        <span>Medium</span>
                    </div>
                    <SkillList/>
                </div>
                <div>
                    <div className='flex items-center space-x-1 font-semibold'>
                        <IconDot width={10} height={10} r={2.5} color='#29C244' />
                        <span>Easy</span>
                    </div>
                    <SkillList/>
                </div>
            </section>
        </section>
    );
}

export default Skills;