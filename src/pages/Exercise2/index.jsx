import useLocalStorage from "../../hooks/useLocalStorage";

function Exercise2() {
    const [name, setName] = useLocalStorage("name", "F8 User");
    const [age, setAge] = useLocalStorage("age", "10");
    const [address, setAddress] = useLocalStorage("address", "Ha Noi");

    return (
        <div>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <input value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <p>Xin chào, {name} - {age} - {address}!</p>
        </div>
    );
}

export default Exercise2;
