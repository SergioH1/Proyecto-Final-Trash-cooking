import { render, screen } from '../../utils/test.utils';
import { MemoryRouter } from 'react-router';
import { Layout } from './layout';
import { usersReducer } from '../../reducer/user/user.reducer';

const reducer = {
    user: usersReducer,
};
const preloadedState = {
    user: {},
};
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
                </MemoryRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const display = screen.getByText(/test/i);
            expect(display).toBeInTheDocument();
        });
    });
});
