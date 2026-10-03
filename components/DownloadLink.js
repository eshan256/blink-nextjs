'use client';

// "Get the app" links: scroll to this page's download section, or go to the home page's.
export default function DownloadLink({ className, children, onNavigate }) {
  function handleClick(e) {
    const target = document.getElementById('download');
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#download');
    }
    if (onNavigate) onNavigate();
  }
  return (
    <a href="/#download" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
