import { render } from '@testing-library/react';

import Quiz from './quiz';

describe('Quiz', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Quiz />);
    expect(baseElement).toBeTruthy();
  });
});
