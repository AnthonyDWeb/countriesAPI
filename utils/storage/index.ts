export const setStorage = (key: string, value: string) =>
	localStorage.setItem(key, value);
export const getStorage = (key: string) => {
	const data = localStorage.getItem(key);
	const dataParse = data && JSON.parse(data);
	return dataParse;
};
export const removeStorage = (key: string) => localStorage.removeItem(key);
export const clearStorage = () => localStorage.clear();
