import { auth } from "./auth"
export default auth((req) => {
    if (!req.auth) {
        console.log("user not logged in ")
        return Response.redirect(new URL("/api/auth/signin", req.nextUrl))
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
