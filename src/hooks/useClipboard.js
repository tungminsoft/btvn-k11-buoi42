import { useState } from "react";

function useClipboard(){
    const [clipboard , setClipboard] = useState("");

    const readClipboard = () => {
        navigator.clipboard.readText()
        .then(text => {
            setClipboard(text)
        })
    }

    return [clipboard, readClipboard];
}

export default useClipboard;