// Simple base64 blur placeholder
const BLUR_PLACEHOLDER = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Iys+Pj5BQUFBQUFBQUFBQUFBQUFBQUH/2wBDAR';

// Image dimension constants
export const IMAGE_DIMENSIONS = {
  hero: {
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
  },
  thumbnail: {
    width: 384,
    height: 216,
    aspectRatio: '16/9',
  },
  avatar: {
    width: 96,
    height: 96,
    aspectRatio: '1/1',
  },
  blogHeader: {
    width: 1280,
    height: 720,
    aspectRatio: '16/9',
  },
} as const;

// Responsive image sizes for different contexts
export function getImageSizes(type: keyof typeof IMAGE_DIMENSIONS): string {
  switch (type) {
    case 'hero':
      return '100vw';
    case 'thumbnail':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    case 'avatar':
      return '96px';
    case 'blogHeader':
      return '(max-width: 1280px) 100vw, 1280px';
    default:
      return '100vw';
  }
}

export function shouldPrioritize(index: number, type: keyof typeof IMAGE_DIMENSIONS): boolean {
  switch (type) {
    case 'hero':
      return true;
    case 'thumbnail':
      return index < 3; // Prioritize first 3 thumbnails
    case 'blogHeader':
      return true;
    default:
      return false;
  }
}

export function getBlurDataUrl(): string {
  return BLUR_PLACEHOLDER;
}

// CDN URL builder
export function getCdnImageUrl(
  path: string,
  options: {
    width?: number;
    quality?: number;
    format?: 'auto' | 'webp' | 'avif';
  } = {}
): string {
  const baseUrl = 'https://cdn.melkentech.com';
  const { width, quality = 90, format = 'auto' } = options;
  
  let url = `${baseUrl}${path}`;
  
  // Add transformations if needed
  if (width || quality !== 90 || format !== 'auto') {
    url += '?';
    if (width) url += `w=${width}&`;
    if (quality !== 90) url += `q=${quality}&`;
    if (format !== 'auto') url += `fm=${format}&`;
    url = url.slice(0, -1); // Remove trailing &
  }
  
  return url;
}
