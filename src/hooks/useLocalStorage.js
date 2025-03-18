import { useState } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(localStorage.getItem(key) ?? initialValue);

    const changeValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, newValue);
    }

    return [value, changeValue]
}

export default useLocalStorage;