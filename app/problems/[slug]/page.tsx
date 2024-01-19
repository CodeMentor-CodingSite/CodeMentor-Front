export default function Problem({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <div>{slug}</div>;
}
