const URL = 'https://app.knightmodels.com/crew'

export const getGameData = async () => {
  const response = await fetch(URL);
  const json = await response.json()

  return json
}
