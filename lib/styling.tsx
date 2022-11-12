import React, { useState } from 'react';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';
type ChildProps = { children: React.ReactNode };

export function useStyledJsxRegistry() {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());
  
  function styledJsxFlushEffect() {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  }

  function StyledJsxRegistry({ children }: ChildProps) {
    return (
      <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
    );
  }

  return [StyledJsxRegistry, styledJsxFlushEffect] as const;
}
