import { Provider } from 'react-redux';
import { loadGameData } from './utils/loadGameData';
import { store } from './store/store';
import Characters from './components/characters/Characters';
import { useOnMount } from './hooks/useOnMount';
import { useState } from 'react';

const App = () => {
    const [loading, setLoading] = useState(true);

    useOnMount(async () => {
        await loadGameData();
        setLoading(false);
    });

    if (loading) return <div>Loading...</div>;

    return (
        <Provider store={store}>
            <Characters />
        </Provider>
    );
};

export default App;
