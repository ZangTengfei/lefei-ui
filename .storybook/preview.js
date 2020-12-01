import React from 'react';

export const decorators = [
  (Story) => <div style={{ margin: '3em' }}><Story/></div>,
  (Story) => <div style={{ textAlign: 'center' }}><Story/></div>
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}