'use client';

import { useState, useCallback } from 'react';
import { Button, Divider, Tabs, Tab } from '@nextui-org/react';
import {
  IconTestCase,
  IconTestResult,
  IconAscendingOrder,
} from '@/public/svgs';
import CaseComponent from './CaseComponent';
import ResultComponent from './ResultComponent';

const caseItems = [
  {
    key: '1',
    title: 'Case 1',
    values: {
      inputs: ['nums = [2, 7, 11, 15]', 'target = 9'],
      output: '[0, 1]',
      expected: '[0, 1]',
    },
  },
  {
    key: '2',
    title: 'Case 2',
    values: {
      inputs: ['nums = [3, 2, 4]', 'target = 6'],
      output: '[2, 3]',
      expected: '[1, 2]',
    },
  },
];

export default function ProblemTest() {
  const [isCase, setIsCase] = useState(true);
  const [spread, setSpread] = useState(false);
  const [selectedCase, setSelectedCase] = useState('1');
  const [selectedResult, setSelectedResult] = useState('1');

  const onClickSpread = useCallback(() => {
    setSpread(!spread);
  }, [spread]);

  const onClickTestCase = useCallback(() => {
    setIsCase(true);
  }, []);

  const onClickTestResult = useCallback(() => {
    setIsCase(false);
  }, []);

  return (
    <section
      className={`${spread ? 'h-screnn' : 'h-9'} bg-component dark:bg-componentDark w-[636px] rounded-xl border dark:border-borderDark overflow-hidden flex flex-col`}
    >
      <h1
        className={`h-9 flex justify-between items-center dark:bg-[#333333] bg-[#FAFAFA] ${spread ? 'border-b dark:border-borderDark' : ''}`}
      >
        <div className="flex items-center ">
          <Button
            startContent={<IconTestCase />}
            className="flex items-center gap-2 bg-transparent"
            onClick={onClickTestCase}
          >
            <p>Test Case</p>
          </Button>

          <Divider className="w-[1px] h-6" />

          <Button
            startContent={<IconTestResult />}
            className="flex items-center gap-2 bg-transparent"
            onClick={onClickTestResult}
          >
            <p>Test Result</p>
          </Button>
        </div>

        <Button isIconOnly className="bg-transparent" onClick={onClickSpread}>
          <IconAscendingOrder />
        </Button>
      </h1>

      <div className="p-6 overflow-y-scroll">
        {isCase ? (
          <Tabs
            key="1"
            variant="light"
            aria-label="Tabs variants"
            selectedKey={selectedCase}
            onSelectionChange={setSelectedCase}
          >
            {caseItems.map(({ key, title, values }) => (
              <Tab key={key} title={title}>
                {values.inputs.map((input) => (
                  <CaseComponent
                    left={input.split(' = ')[0]}
                    right={input.split(' = ')[1]}
                  />
                ))}
              </Tab>
            ))}
          </Tabs>
        ) : (
          <Tabs
            key="1"
            variant="light"
            aria-label="Tabs variants"
            selectedKey={selectedResult}
            onSelectionChange={setSelectedResult}
          >
            {caseItems.map(({ key, title, values }) => {
              const isRight = values.expected === values.output;

              return (
                <Tab key={key} title={title}>
                  <h2
                    className={`mb-4 font-bold ${isRight ? 'text-themeGreen' : 'text-themeRed'}`}
                  >
                    {isRight ? 'Accepted' : 'Wrong Answer'}
                  </h2>
                  <ResultComponent values={values} />
                </Tab>
              );
            })}
          </Tabs>
        )}
      </div>
    </section>
  );
}
