import { render } from '@testing-library/react';

import MultiChoiceList from './multi-choice-list';

describe('MultiChoiceList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultiChoiceList />);
    expect(baseElement).toBeTruthy();
  });
});
