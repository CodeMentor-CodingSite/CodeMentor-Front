import { Chip } from '@nextui-org/react';
import capitalizeFirstChar from '@/utils/capitalizeFirstChar';

interface ProblemDescriptionProps {
  problemNum: number;
  title: string;
  tags: string[];
  difficulty: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  constraints: string[];
}

export default function ProblemDescription({
  problemNum,
  title,
  tags,
  difficulty,
  description,
  examples,
  constraints,
}: ProblemDescriptionProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{`${problemNum}. ${title}`}</h2>
      <div className="flex flex-wrap mt-6 mb-8 gap-2">
        <Chip
          size="sm"
          className={`h-5 text-sm font-medium bg-chip dark:bg-chipDark ${
            // eslint-disable-next-line no-nested-ternary
            difficulty === 'easy'
              ? 'text-themeGreen'
              : difficulty === 'hard'
                ? 'text-themeRed'
                : 'text-themeYellow'
          }`}
        >
          {capitalizeFirstChar(difficulty)}
        </Chip>
        {tags.map((tag) => (
          <Chip
            size="sm"
            className="h-5 text-sm font-medium bg-chip dark:bg-chipDark"
          >
            {capitalizeFirstChar(tag)}
          </Chip>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {description
          .replace(/\n/g, '<br/>')
          .split('<br/>')
          .map((text) => (
            <p>{text}</p>
          ))}
      </div>

      <div className="flex flex-col mt-20 gap-6">
        {examples.map(({ input, output, explanation }, index) => (
          <div>
            <h3 className="mb-2 text-lg font-semibold">Example {index + 1}:</h3>
            <div className="pl-3">
              <p>
                Input:{' '}
                <span className="text-subtext dark:text-subtextDark">
                  {input}
                </span>
              </p>
              <p>
                Output:{' '}
                <span className="text-subtext dark:text-subtextDark">
                  {output}
                </span>
              </p>
              {explanation !== undefined && (
                <p>
                  Explanation:{' '}
                  <span className="text-subtext dark:text-subtextDark">
                    {explanation}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-2 text-lg font-semibold">Constraints:</h3>
        {constraints.map((constraint) => (
          <p className="text-subtext dark:text-subtextDark">
            &bull; {constraint}
          </p>
        ))}
      </div>
    </div>
  );
}
