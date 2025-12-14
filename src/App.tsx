import { Provider } from 'react-redux';
import { loadGameData } from './utils/loadGameData';
import { store } from './store/store';
import { useOnMount } from './hooks/useOnMount';
import { useState } from 'react';
import Menu from './components/Menu';
import Cards from './components/Cards';

const App = () => {
    const [loading, setLoading] = useState(true);

    useOnMount(async () => {
        await loadGameData();
        setLoading(false);
    });

    if (loading) return <div>Loading...</div>;

    return (
        <Provider store={store}>
            <div className="h-full flex flex-col">
                <Menu />
                <Cards />
            </div>
        </Provider>
    );
};

export default App;
