const STORAGE_KEY = "mindtrack_moods";

export const getMoods = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveMoods = (moods) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(moods));
};
