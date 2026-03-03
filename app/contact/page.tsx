import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Contact Page",
    description: "This is the contact page of our Next.js application",
    keywords: ["contact", "next.js", "react", "javascript"],
}


async function getData() {
    const res = await fetch (`${process.env.NEXT_URL}/api/apisub`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: "Sameer" })
    });

    const data = await res.json();
    return { data };
}


export default async function ContactPage () {
    const { data } = await getData();
    return (

       <p className="text-blue-500">This is the contact page and here is the data: {data.message}</p>
    )
}
