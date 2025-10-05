import { Button } from '@/shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// Тест ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) throw Error();
  }, [error]);

  const throwError = () => setError((prev) => !prev);

  return <Button onClick={throwError}>BUg</Button>;
};
