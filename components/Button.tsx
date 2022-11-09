import { JSX, ComponentChildren } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  children: ComponentChildren;
}

export function Button({ children, ...buttonAttrs }: ButtonProps) {
  return (
    <button {...buttonAttrs} disabled={!IS_BROWSER || buttonAttrs.disabled}>
      {children}
    </button>
  );
}
