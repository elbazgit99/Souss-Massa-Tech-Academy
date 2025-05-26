import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import axios from "axios";
import updateicon from "../assets/icons/pen.png";
import deleteicon from "../assets/icons/delete.png";
import usericon from "../assets/icons/user.png";
import { Link } from "react-router";

export function TableUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/users/")
            .then((data) => {
                setUsers(data.data);
            })
            .catch((error) => error.message);
    }, []);

    return (
        <>
            <h2 className="text-center text-cyan-700 text-2xl uppercase font-bold bg-gray-50 py-5">
                A list of Student
            </h2>
            <Table className="border-2 border-yellow-100 ">
                <TableHeader className="capitalize">
                    <TableRow style={{ backgroundColor: "#F7EF79" }}>
                        <TableHead className="w-[40px]"></TableHead>
                        <TableHead className="w-[140px]">Username</TableHead>
                        <TableHead>email</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-center">
                            update / delete
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => {
                        // if (user.role) {
                        //     if (user.role.role_name == "admin") {
                        //         console.log(user);
                        //     }
                        // }
                        // && !(user.role.role_name == "admin")
                        return (
                            <>
                                {user.is_actif == true ? (
                                    <TableRow key={user._id}>
                                        <TableCell>
                                            <img src={usericon} alt="" />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {user.username}
                                        </TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell className="text-center">
                                            {user.hasOwnProperty("role")
                                                ? "valide"
                                                : "No-valide"}
                                        </TableCell>
                                        <TableCell className="flex justify-center gap-3">
                                            <Link
                                                to={`/dash-home/users/update/${user._id}`}
                                            >
                                                <img
                                                    src={updateicon}
                                                    className="w-6"
                                                    alt=""
                                                />
                                            </Link>
                                            <img
                                                src={deleteicon}
                                                className="w-6"
                                                alt=""
                                            />
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    ""
                                )}
                            </>
                        );
                    })}
                </TableBody>
            </Table>
        </>
    );
}
