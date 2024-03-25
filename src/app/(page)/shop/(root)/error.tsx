'use client'

import NotFound from "./component/notFoundData"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div>
            <NotFound error={error}/>
        </div>
    )
}