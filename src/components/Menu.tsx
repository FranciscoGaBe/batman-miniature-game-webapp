import { fetchGameData } from '../utils/loadGameData';

const Menu = () => {
    const refreshData = () => {
        fetchGameData();
    };

    return (
        <div className="h-20 bg-yellow-500 shrink-0 flex items-center justify-end px-4 py-2">
            <button
                className="cursor-pointer bg-yellow-600 px-2 py-1 rounded font-semibold text-white"
                onClick={refreshData}
            >
                Refresh Data
            </button>
        </div>
    );
};

export default Menu;
