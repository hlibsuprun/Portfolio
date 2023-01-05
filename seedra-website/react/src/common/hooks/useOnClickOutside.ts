import { RefObject, useEffect } from 'react';

interface Props {
  ref: RefObject<HTMLElement>;
  handler: () => void;
  otherRef?: RefObject<any>;
}

export function useOnClickOutside({ ref, handler, otherRef }: Props) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !ref.current ||
        ref.current.contains(<HTMLElement>event.target) ||
        !otherRef?.current ||
        otherRef.current.contains(<HTMLElement>event.target)
      ) {
        return;
      }

      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
