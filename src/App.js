import "./App.css";
import { useEffect, useState } from "react";

function App() {
    return (
        <div className="App">
            <MyComponent name="React" salary="20k"></MyComponent>
            <MyComponent name="Google" salary="30k"></MyComponent>
            <MyComponent name="Microsoft" salary="35k"></MyComponent>
            <MyComponent name="Facebook" salary="25k"></MyComponent>
            <LoadUsers></LoadUsers>
        </div>
    );
}

function User(props) {
    return (
        <div className="btn">
            <h3>Id: {props.id}</h3>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
        </div>
    );
}

function LoadUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => setUsers(users));
    }, []);
    return (
        <div>
            <h1>Loaded Users: {users.length}</h1>

            {users.map((user) => (
                <User id={user.id} name={user.name} email={user.email}></User>
            ))}
        </div>
    );
}

function MyComponent(props) {
    const [bonus, setBonus] = useState(0);
    const myStyle = {
        backgroundColor: "lightsalmon",
        border: "1px solid blue",
        borderRadius: "10px",
        margin: "10px",
    };
    const addBonus = () => {
        setBonus(bonus + 500);
    };
    return (
        <div style={myStyle}>
            <h2>Hello {props.name} Mama!</h2>
            <p>I can Create React Component!</p>
            <p>Salary: {props.salary}</p>
            <p>Bonus: {bonus}</p>
            <button className="btn" onClick={addBonus}>
                Add Bonus
            </button>
        </div>
    );
}

export default App;
