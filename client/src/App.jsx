import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.routes';
import { Provider } from 'react-redux';
import { store } from './store/store';
function App() {
    return (
        <div className="min-h-screen">
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
}

export default App;
