import Button from "./button";

export default async function about () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <h1>About Page</h1>
            <p className="text-blue-300">This is the about page of the application.</p>
            { /*  <button onClick={ () => alert('Button Clicked!') }>Click Me</button> -->> Because onclick works only in client components so it will not work in server component, we have to make a client component for it, make sure to call the client component in this server component */ } 
            <Button />
            
        </div>

       
    )
}