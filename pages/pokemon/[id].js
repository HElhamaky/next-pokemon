import { useRouter } from 'next/router';

export default function Details() {
  const {
    query: { id },
  } = useRouter();
  return <div> Hello {id}</div>;
}
