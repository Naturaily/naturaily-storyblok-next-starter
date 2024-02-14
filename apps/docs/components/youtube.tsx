type YoutubeProps = {
  id: string;
};

const Youtube = ({ id }: YoutubeProps) => (
  <iframe
    style={{ width: '100%', height: 'auto', aspectRatio: '16 / 9' }}
    src={`https://www.youtube.com/embed/${id}`}
  ></iframe>
);

export default function MyApp({ id }) {
  return <Youtube id={id} />;
}
