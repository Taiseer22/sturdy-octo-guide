import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { flushSync } from 'react-dom';
import CssInclusion from './CssInclusion';

describe('css inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    flushSync(() => {
      ReactDOMClient.createRoot(div).render(<CssInclusion />);
    });
  });
});
