export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const fetchWithToken = async (url, token) => {
    const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json', token }),
        credentials: 'same-origin',
    });
    const data = await res.json();

    return data;
};
