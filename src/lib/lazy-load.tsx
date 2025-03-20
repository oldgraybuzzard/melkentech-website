import React from 'react';

interface LoadingProps {
  className?: string;
}

export function lazyLoad<T extends React.ComponentType<LoadingProps>>(
  importFunc: () => Promise<{ default: T }>,
  options?: {
    loading?: React.ComponentType<LoadingProps>;
  }
) {
  const LoadingComponent = options?.loading || DefaultLoading;
  const LazyComponent = (props: React.ComponentProps<T>) => (
    <LoadingComponent {...props} />
  );
  LazyComponent.displayName = 'LazyComponent';
  return LazyComponent;
}

const DefaultLoading: React.FC<LoadingProps> = () => <div>Loading...</div>;
DefaultLoading.displayName = 'DefaultLoading';