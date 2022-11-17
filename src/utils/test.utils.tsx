import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

function render(
    ui: JSX.Element,
    { preloadedState, reducer }: { preloadedState: {}; reducer: {} }
) {
    function Wrapper({ children }: { children: JSX.Element }) {
        return (
            <Provider
                store={configureStore({
                    reducer,
                    preloadedState,
                })}
            >
                {children}
            </Provider>
        );
    }
    return rtlRender(ui, { wrapper: Wrapper });
}

export * from '@testing-library/react';
export { render };
