import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('displays a list of character details', async () => {
    render(
      <MemoryRouter
        initialEntries={['/', '/characters', 'characters/1']}
        initialIndex={0}
      >
        <App />
      </MemoryRouter>
    );
    const link = screen.getByLabelText('characters-list');
    expect(link).toBeInTheDocument();
  });
  test('displays a character name that redirects to details', async () => {
    render(
      <MemoryRouter initialEntries={['/characters']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );
    const name = await screen.findByText('Rick Sanchez');
    expect(name).toBeInTheDocument();
  });
  test('character image, name, status and species displays under lis', async () => {
    render(
      <MemoryRouter initialEntries={['/characters/1']} initialIndex={2}>
        <App />
      </MemoryRouter>
    );
    const image = await screen.findByAltText('image');
    expect(image).toBeInTheDocument();

    //     const status = await screen.findByText('Alive');
    //     expect(status).toBeInTheDocument();
  });
});

//   or would I be testing for the link ?

//   const link =
//   userEvent.click();
//   const image = await screen.getByAltText('image')
//   expect(image).toBeInTheDocument();
