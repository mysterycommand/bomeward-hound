import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../app/store';
import { App } from './App';

test('renders previous room and next room buttons', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText(/previous room/i)).toBeInTheDocument();
  expect(getByText(/next room/i)).toBeInTheDocument();
});
