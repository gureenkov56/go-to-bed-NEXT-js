import { useRouter } from "next/router"

function post() {
    const {query} = useRouter();

    return (
        <>
            <h1>Post {query.id}</h1>
        </>
    )
}

export default post