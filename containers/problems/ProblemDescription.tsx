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
      <div className="flex flex-wrap gap-2 mt-6 mb-8">
        <Chip
          size="sm"
          className={`h-5 text-sm font-medium ${
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
          <Chip size="sm" className="h-5 text-sm font-medium">
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

      <div className="flex flex-col gap-6 mt-20">
        {examples.map(({ input, output, explanation }, index) => (
          <div>
            <h3 className="mb-2 text-lg font-semibold">Example {index + 1}:</h3>
            <div className="pl-3">
              <p>
                Input: <span className="text-subtext">{input}</span>
              </p>
              <p>
                Output: <span className="text-subtext">{output}</span>
              </p>
              {explanation !== undefined && (
                <p>
                  Explanation:{' '}
                  <span className="text-subtext">{explanation}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-2 text-lg font-semibold">Constraints:</h3>
        {constraints.map((constraint) => (
          <p className="text-subtext">&bull; {constraint}</p>
        ))}
      </div>
    </div>
  );
}
