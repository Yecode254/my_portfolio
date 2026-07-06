import React from 'react';
export default function Tooltip({ children }: { children?: React.ReactNode }) {
  return (
    <span title={typeof children === 'string' ? children : undefined}>
      {children}
    </span>
  );
}
