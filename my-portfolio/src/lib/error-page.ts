import React from 'react';

export default function ErrorPage({ error }: { error?: any }) {
  return (
    <div style={{ padding: 32 }}>
      <h1>Something went wrong</h1>
      <pre>{String(error)}</pre>
    </div>
  );
}
