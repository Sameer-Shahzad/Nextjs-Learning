import { notFound } from "next/navigation";
export default async function UsersPageForSingleName({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
        notFound();
    }
    const user = await res.json();

    return (
        <div className="p-4">
            <p className="text-blue-500 font-bold">The User is:</p>
            
            <div className="mt-2 p-4 border rounded shadow">
                <h1 className="text-xl">{user.name}</h1>
                <p>Email: {user.email}</p>
                <p>City: {user.address?.city}</p>
                <p>lat: {user.address?.geo?.lat}</p>
                <p>lng: {user.address?.geo?.lng}</p>
            </div>
        </div>
    );
}