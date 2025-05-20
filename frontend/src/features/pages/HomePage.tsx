import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/users/")
            .then((res) => setUsers(res.data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <div>Home page</div>
            {users.map((user, index) => {
                return (
                    <>
                        <h4 key={index}>{user.email}</h4>
                    </>
                );
            })}
        </>
    );
}

export default HomePage;
