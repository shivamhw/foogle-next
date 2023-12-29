
import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HomePage() {
    const sess = await auth()
    if(!sess?.user){
        redirect("/api/auth/signin")
    }
    return (
        <>
        <h1>Welcome {sess.user.name}</h1>
            <Link href="/movie">Movie Search</Link> <br />
            <Link href="/series">Series Search</Link> <br />
            <Link href="/api/auth/signout">Signout</Link>
        </>
    )
}

