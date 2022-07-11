import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Layout } from './layout';
describe('Given the component Layout', () => {
  describe('when it is called', () => {
    test('should have render its children', () => {
      //Arrange
      let MockChildren: () => JSX.Element;
      MockChildren = function () {
        return (
          <>
            <p>test</p>
          </>
        );
      };
      render(
        <MemoryRouter>
          <Layout>
            <MockChildren></MockChildren>
          </Layout>
        </MemoryRouter>
      );
      const display = screen.getByText(/test/i);
      expect(display).toBeInTheDocument();
    });
  });
});
