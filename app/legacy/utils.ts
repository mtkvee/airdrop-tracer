export function ensureArray<T>(value: T | T[] | null | undefined | ""): T[] {
  if (Array.isArray(value)) return value;
  if (value == null || value === '') return [];
  return [value];
}

export function ensureArrayOr<T>(value: T | T[] | null | undefined | "", fallback: T[]): T[] {
  const arr = ensureArray(value);
  if (arr.length) return arr;
  return Array.isArray(fallback) ? fallback.slice() : [];
}

export function escapeHtml(text: unknown): string {
  const div = document.createElement('div');
  div.textContent = text != null ? String(text) : '';
  return div.innerHTML;
}

export function formatRelativeTime(timestamp: number): string {
  if (!timestamp) return 'Never';
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return 'Just now';
  if (minutes < 60) return minutes === 1 ? '1 minute ago' : minutes + ' minutes ago';
  if (hours < 24) return hours === 1 ? '1 hour ago' : hours + ' hours ago';
  if (days < 7) return days === 1 ? '1 day ago' : days + ' days ago';

  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
  });
}

export function sanitizeUrl(url: string): string {
  if (!url) return '';
  try {
    var base =
      typeof window !== 'undefined' && window.location && window.location.origin
        ? window.location.origin
        : 'https://example.com';
    var parsed = new URL(url, base);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') return parsed.href;
  } catch (e) {}
  return '';
}
