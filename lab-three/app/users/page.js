import UserCard from "../components/UserCard";

async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });

        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }

        return res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default async function UserPage() {
    const users = await getUsers();

    return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    username={user.username}
                />
            ))}
        </div>
    );
}
