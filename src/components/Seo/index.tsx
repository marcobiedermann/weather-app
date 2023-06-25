import { Helmet } from 'react-helmet';

interface SeoProps {
  title: string;
}

function Seo(props: SeoProps) {
  const { title } = props;

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export type { SeoProps };
export default Seo;
