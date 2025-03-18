import { useEffect, useState } from "react";

function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch(url)
            .then(res => {
                if (!res.ok)
                    throw new Error("Lỗi khi tải dữ liệu");
                return res.json();
            })
            .then(res => setData(res))
            .catch(error => setError(error.message))
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return [loading, data, error];
}

export default useFetch;