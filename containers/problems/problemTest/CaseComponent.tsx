interface CaseComponentProps {
  left: string;
  right: string;
}

export default function CaseComponent({ left, right }: CaseComponentProps) {
  return (
    <div className="mb-1 flex flex-col gap-1">
      <p className="text-subtext dark:text-subtextDark">{left} =</p>
      <div className="bg-chip dark:bg-chipDark rounded-lg px-4 py-3">
        {right}
      </div>
    </div>
  );
}
