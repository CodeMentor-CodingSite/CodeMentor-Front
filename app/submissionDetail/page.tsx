'use client';

import React, {useEffect, useState} from 'react';
import Link from "next/link";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// eslint-disable-next-line import/no-extraneous-dependencies
import { coy, a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {useTheme} from "next-themes";

function SubmissionDetailPage(
    {
        searchParams
    }: {
        searchParams: Record<string, string | string[] | undefined>
    }) {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const problemId = searchParams.problemId as string;

    // todo - problemId로 submissionDetail 조회
    const data = {
        status:'Compile Error',
        passedDate:'1 day, 23 hours',
        language:'java',
        code: 'class Solution {\n' +
            '    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n' +
            '        int m = nums1.length;\n' +
            '        int n = nums2.length;\n' +
            '        List<Integer> ls = new ArrayList<>();\n' +
            '        int i = 0, j = 0;\n' +
            '        \n' +
            '        while (i < m && j < n) {\n' +
            '            if (nums1[i] < nums2[j]) {\n' +
            '                ls.add(nums1[i++]);\n' +
            '            } else {\n' +
            '                ls.add(nums2[j++]);\n' +
            '            }\n' +
            '        }\n' +
            '        \n' +
            '        while (i < m) ls.add(nums1[i++]);\n' +
            '        while (j < n) ls.add(nums2[j++]);\n' +
            '\n' +
            '        int mid = ls.size()/2;\n' +
            '        if(ls.size() % 2 == 0){\n' +
            '            return (ls.get(mid-1) + ls.get(mid))/2.0;\n' +
            '        }else{\n' +
            '            return ls.get(mid);\n' +
            '        }\n' +
            '    }\n' +
            '}',
        errorMessage: 'Line 15: Char 71: error TS2355: A function whose declared type is neither \'undefined\', \'void\', nor \'any\' must return a value.'
    }

    // todo - edit code 버튼 클릭시 해당 문제 풀이 페이지로 이동 (?probelmId={problemId})
    console.log('problemId, ', problemId);

    if(!mounted) return null;

    return (
        <section className='w-full flex flex-col space-y-[10px] px-1 pt-1'>
            <h1 className='px-1 text-[#1C78FF] text-[18px] font-semibold'>
                Leaf-Similar Trees
            </h1>
            <section className='flex flex-col w-full px-1 py-1'>
                <h2 className='text-[24px] font-semibld'>Submission Detail</h2>
                <div className='w-full flex flex-col items-end space-y-[10px] pt-[12px] pr-[20px] pb-[15px] border border-[#ddd]'>
                    <div className='flex items-center space-x-1 pt-[8px] pr-[13px] pb-[8px] pl-[8px] dark:bg-stone-800/80'>
                        <span className='text-lg text-[#595959] dark:text-[#a6a6a6]'>
                            Status:
                        </span>
                        <span className={`${data.status === 'Accepted' ? 'text-themeSuccess dark:text-themeSuccessDark' : 'text-themeError dark:text-themeErrorDark'}
                                            text-lg font-bold`}
                        >
                            {data.status}
                        </span>
                    </div>
                    <div className='flex items-center space-x-1 px-[8px] text-md'>
                        <span className='text-[#595959] dark:text-[#a6a6a6]'>
                            Submitted:
                        </span>
                        <span className='text-[#595959] dark:text-[#a6a6a6] font-medium'>
                            {data.passedDate}
                        </span>
                    </div>
                </div>
                {
                    data.status !== 'Accepted' &&
                    <div className='-mt-1 p-4 rounded-md bg-[#F7DCDD] dark:bg-[#3E2A2B] border border-[#F3C8D1] dark:border-[#9C8185]
                    text-[#B8303A] dark:text-[#F66F70] text-md font-medium'>
                        {data.errorMessage}
                    </div>
                }
                <hr className='mt-[20px] mb-[12px] border-t border-[#ddd]'/>
                <div className='flex flex-col mb-2 space-y-1'>
                    <div className='flex items-center w-full font-medium space-x-1'>
                        <span className='text-[20px]'>Submitted Code:</span>
                        <span className='text-md'>{data.passedDate}</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className='text-md text-[#595959] dark:text-[#a6a6a6] font-semibold '>
                            Language: {data.language}
                        </span>
                        <Link
                            className='self-top px-[8px] py-[10px] text-md text-white font-semibold rounded-md bg-[#337AB7]
                                        dark:border dark:border-white'
                            href='/'
                        >
                            Edit Code
                        </Link>
                    </div>
                </div>
                <SyntaxHighlighter
                    style={theme === 'light' || theme === undefined ? coy : a11yDark}
                    language={data.language}
                    className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
                    showLineNumbers
                    useInlineStyles
                >
                    {data.code}
                </SyntaxHighlighter>
            </section>
        </section>
    );
}

export default SubmissionDetailPage;