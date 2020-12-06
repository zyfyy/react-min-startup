declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.json' {
  const content: object;
  export default content;
}
declare module '*.less' {
  const content: {
      [className: string]: string;
      (...names: Array<string | null | undefined | {[key: string]: string | boolean}>): string;
  };
  export default content;
}