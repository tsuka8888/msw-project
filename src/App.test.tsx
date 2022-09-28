import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('IDが少なくとも1つ画面に表示されている', async () => {
  render(<App />);
  // 再描画を待つ
  await waitFor(()=>{
    const idElements = screen.getAllByTestId('id');
    expect(idElements).not.toHaveLength(0);
  })
});
