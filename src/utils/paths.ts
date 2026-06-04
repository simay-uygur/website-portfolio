const EXTERNAL_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;

export const withBase = (path: string) => {
  if (!path || path === '/') {
    return import.meta.env.BASE_URL;
  }

  if (EXTERNAL_URL_PATTERN.test(path) || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\/+/, '')}`;
};
