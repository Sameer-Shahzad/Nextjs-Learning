export default async function UsersPage () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();

    return (
        <div>
            <p className="text-blue-500">This is the users page.</p>
            
            <br/>

            <ul>
                {data.map((user: { id: number, name: string }) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}