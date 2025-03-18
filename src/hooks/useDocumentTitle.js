import { useEffect, useState } from "react";

function useDocumentTitle(inittialValue){
    const [title, setTitle] = useState(inittialValue);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return [title, setTitle];
}

export default useDocumentTitle;