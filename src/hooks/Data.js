const Data = () => {

  const lines = new Map([
    [1, 'Favourites 1'], [2, 'Favourites 2'],
    [3, 'Pizza'], [4, 'Round Table'], [5, 'Bowl'],
    [6, 'Vege'], [7, 'Cafe Pickup Line'], [8, 'Salad/Nokia Coffee']]);

  const times = new Map([
    [1, 'wait time < 30s'], [2, 'wait time < 1m'],
    [3, 'wait time < 1m 30s'], [4, 'wait time < 2m”'], [5, 'wait time > 2m']]);

  const colours = new Map([
    [1, '#CFFFA7'], [2, '#ECFFAC'],
    [3, '#FFF7A7'], [4, '#FFEAA5'], [5, '#FFD9A7']]);

  return {
    lines,
    times,
    colours,

  };
};
export default Data;