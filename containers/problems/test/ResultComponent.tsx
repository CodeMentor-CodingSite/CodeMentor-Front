interface ResultComponentProps {
  values: { inputs: string[]; output: string; expected: string };
}

export default function ResultComponent({ values }: ResultComponentProps) {
  const { inputs, output, expected } = values;

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="mb-1 text-subtext dark:text-subtextDark">Input</p>
        <div className="flex flex-col gap-2">
          {inputs.map((input) => (
            <div className="px-4 py-3 rounded-lg bg-chip dark:bg-chipDark">
              {input}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-1 text-subtext dark:text-subtextDark">Output</p>
        <div className="px-4 py-3 rounded-lg bg-chip dark:bg-chipDark">
          {output}
        </div>
      </div>

      <div>
        <p className="mb-1 text-subtext dark:text-subtextDark">Expected</p>
        <div className="px-4 py-3 rounded-lg bg-chip dark:bg-chipDark">
          {expected}
        </div>
      </div>
    </div>
  );
}
