import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.routes';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Auth0Provider } from '@auth0/auth0-react';
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
function App() {
    return (
        <div className="min-h-screen">
            <Auth0Provider
                domain={domain}
                clientId={clientId}
                redirectUri={window.location.origin}
            >
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
            </Auth0Provider>
        </div>
    );
}

export default App;
