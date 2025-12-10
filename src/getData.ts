const URL = 'https://corsproxy.io/?url=https://app.knightmodels.com/gamedata';

export const getGameData = async () => {
    const response = await fetch(URL);
    const json = await response.json();

    console.log(json);

    return json;
};
