import * as React from 'react';
import ReactDOMClient from 'react-dom/client';
import { flushSync } from 'react-dom';
import SvgComponent, { SvgComponentWithRef } from './SvgComponent';

// TODO: these fail with React 19 due to the JSX transform mismatch.
describe.skip('svg component', () => {
  it('renders without crashing', async () => {
    const div = document.createElement('div');
    flushSync(() => {
      ReactDOMClient.createRoot(div).render(<SvgComponent />);
    });
    expect(div.textContent).toBe('logo.svg');
  });

  it('svg root element equals the passed ref', async () => {
    const div = document.createElement('div');
    const someRef = React.createRef();
    flushSync(() => {
      ReactDOMClient.createRoot(div).render(
        <SvgComponentWithRef ref={someRef} />
      );
    });
    const svgElement = div.getElementsByTagName('svg');
    expect(svgElement).toHaveLength(1);
    expect(svgElement[0]).toBe(someRef.current);
  });
});
