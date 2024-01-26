interface ResultComponentProps {
  values: { inputs: string[]; output: string; expected: string };
}

export default function ResultComponent({ values }: ResultComponentProps) {
  const { inputs, output, expected } = values;

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-subtext dark:text-subtextDark mb-1">Input</p>
        <div className="flex flex-col gap-2">
          {inputs.map((input) => (
            <div className="bg-chip dark:bg-chipDark rounded-lg px-4 py-3">
              {input}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-subtext dark:text-subtextDark mb-1">Output</p>
        <div className="bg-chip dark:bg-chipDark rounded-lg px-4 py-3">
          {output}
        </div>
      </div>

      <div>
        <p className="text-subtext dark:text-subtextDark mb-1">Expected</p>
        <div className="bg-chip dark:bg-chipDark rounded-lg px-4 py-3">
          {expected}
        </div>
      </div>
    </div>
  );
}
