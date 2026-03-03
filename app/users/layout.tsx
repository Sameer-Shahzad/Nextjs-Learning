export default function UsersLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1 className="text-2xl font-bold">Hello Ji</h1>
            {children}
        </div>
    )
}