import { SITE } from '@/lib/site';

// Shows a site email. While it is still a [PLACEHOLDER] it renders highlighted so it is easy to spot.
export default function Email({ kind = 'support', className, plain = false }) {
  const value = SITE.emails[kind] || '';
  if (!value || value.startsWith('[')) {
    if (plain) return <span className={className}>{value}</span>;
    return <mark className={['ph', className].filter(Boolean).join(' ')}>{value}</mark>;
  }
  return (
    <a className={className} href={`mailto:${value}`}>
      {value}
    </a>
  );
}
