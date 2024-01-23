import React from 'react';
import Badge from "@/components/common/Badge";
import {skillList} from "@/containers/userBoard/skills/Skills";

function SkillList() {
    return (
        <>
            <ul className='flex flex-wrap my-3'>
                {
                    skillList.map((v) => (
                        <li className='flex mx-2 my-1' key={v.title}>
                            <Badge title={v.title}/>
                            <span className='text-[#85858A] font-medium'>&#215;{v.count}</span>
                        </li>
                    ))
                }

            </ul>
            {/* <div className='text-[#85858A] font-semibold text-[14px]'>Not Enough Data</div> */}
        </>
    );
}

export default SkillList;