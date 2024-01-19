import React from 'react';
import Badge from "@/components/common/Badge/Badge";

function Languages() {
    return (
        <section className='flex flex-col'>
            <h2 className='font-semibold text-[18px]'>Languages</h2>
            <div className='flex py-3'>
                <ul className='flex'>
                    <li><Badge title='Java'/></li>
                </ul>
                <div className='ml-auto flex items-center'>
                    <span className='px-1 font-semibold dark:text-gray-300/70'>2</span>
                    <span className='text-[#85858A]'>problem solved</span>
                </div>
                {/* <div className='text-[#85858A] font-semibold text-[14px]'>Not Enough Data</div> */}
            </div>
        </section>
    );
}

export default Languages;