import React, { Children } from 'react'

export default function  Layout({Children}) {

    return (
        <>
        {/* sidebar */}
        {/* navbar */}
        {/* content */}
        <div>{Children}</div>
        {/* end content */}

        {/* footer */}
        </>
    )
}
