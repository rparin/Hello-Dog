export default function dogResults({
  params,
}: {
  params: { dogName: string };
}) {
  return <main>Hello {params.dogName}</main>;
}
