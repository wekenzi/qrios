import { useEffect, useState } from "react";

export const useFetch = (url:string) => {
    const [data, setData] = useState<[]>([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
};