import React from 'react';
import {Pagination} from "@nextui-org/react";

const submittedList = [
    {
        id: '1',
        title: 'Median of Two Sorted Arrays',
        status:'Accepted',
        runtime:'2ms',
        language:'java',
        datePassed: '2'
    },
    {
        id: '2',
        title: 'Median of Two Sorted Arrays',
        status:'Accepted',
        runtime:'2ms',
        language:'java',
        datePassed: '3'
    },
    {
        id: '3',
        title: 'Median of Two Sorted Arrays',
        status:'Accepted',
        runtime:'2ms',
        language:'java',
        datePassed: '4'
    },
    {
        id: '4',
        title: 'Median of Two Sorted Arrays',
        status:'Accepted',
        runtime:'2ms',
        language:'java',
        datePassed: '5'
    },
    {
        id: '5',
        title: 'Median of Two Sorted Arrays',
        status:'Compile Error',
        runtime:'2ms',
        language:'java',
        datePassed: '6'
    },
    // {
    //     id: '6',
    //     title: 'Median of Two Sorted Arrays',
    //     status:'Accepted',
    //     runtime:'2ms',
    //     language:'java',
    //     datePassed: '7'
    // },
    // {
    //     id: '7',
    //     title: 'Median of Two Sorted Arrays',
    //     status:'Compile Error',
    //     runtime:'2ms',
    //     language:'java',
    //     datePassed: '8'
    // },
    // {
    //     id: '8',
    //     title: 'Median of Two Sorted Arrays',
    //     status:'Compile Error',
    //     runtime:'2ms',
    //     language:'java',
    //     datePassed: '9'
    // },
    // {
    //     id: '9',
    //     title: 'Median of Two Sorted Arrays',
    //     status:'Accepted',
    //     runtime:'2ms',
    //     language:'java',
    //     datePassed: '10'
    // },
    // {
    //     id: '10',
    //     title: 'Median of Two Sorted Arrays',
    //     status:'Accepted',
    //     runtime:'2ms',
    //     language:'java',
    //     datePassed: '11'
    // },
];
function Submission() {
    return (
        <section className='flex flex-col p-[10px] userBoardSection'>
            <h2 className='font-semibold text-[18px] px-[13px]'>Submission</h2>
            <div className="mt-[24px] mb-[30px] px-4 flow-root grow">
                <div className="-mx-6 -my-2">
                    <div className="inline-block min-w-full  px-6 py-2  align-middle ">
                        <table className="min-w-full">
                            <thead>
                            <tr className='bg-[#f1f1f1] dark:bg-backgroundDark'>
                                <th scope="col"
                                    className="py-3 pl-4 pr-3 text-left text-sm font-semibold">
                                    Time Submitted
                                </th>
                                <th scope="col"
                                    className="py-3 px-3 text-left text-sm font-semibold">
                                    Title
                                </th>
                                <th scope="col"
                                    className="py-3 px-3 text-left text-sm font-semibold">
                                    Status
                                </th>
                                <th scope="col"
                                    className="py-3 px-3 text-left text-sm font-semibold">
                                    Runtime
                                </th>
                                <th scope="col"
                                    className="relative py-3 pl-3 pr-4 text-sm font-semibold">
                                    Language
                                </th>
                            </tr>
                            </thead>

                            <tbody className="bg-white">
                            {submittedList.map((v) => (
                                <tr
                                    key={v.id}
                                    className="even:bg-[#F7F7F8] dark:even:bg-backgroundDark odd:bg-white
                                                dark:odd:bg-componentDark hover:bg-gray-300/60 dark:hover:bg-backgroundDark/85 cursor-pointer"
                                >
                                    <td
                                        className="flex items-center space-x-1 whitespace-nowrap py-2.5 pl-4 pr-3
                                                        text-left text-sm font-medium text-[#949297]"
                                    >
                                        <span>{v.datePassed}</span>
                                        <span className=''>day ago</span>
                                    </td>
                                    <td className="whitespace-nowrap py-2.5 px-3 text-sm font-medium dark:text-gray-300">
                                        {v.title}
                                    </td>
                                    <td
                                        className={`whitespace-nowrap py-2.5 px-3 text-sm font-semibold 
                                                        ${v.status === 'Accepted' ? 
                                                                'text-themeSuccess dark:text-themeSuccessDark'
                                                                :'text-themeError dark:text-themeErrorDark'}`
                                                    }
                                    >
                                        {v.status}
                                    </td>
                                    <td className="whitespace-nowrap py-2.5 px-3 text-sm font-medium dark:text-gray-300">
                                        {v.runtime}
                                    </td>
                                    <td className="whitespace-nowrap py-2.5 px-7 text-sm font-medium dark:text-gray-300">
                                        {v.language}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Pagination
                showControls
                size="lg"
                total={5}
                initialPage={1}
                className="self-center h-[80px]"
            />
        </section>
    );
}

export default Submission;