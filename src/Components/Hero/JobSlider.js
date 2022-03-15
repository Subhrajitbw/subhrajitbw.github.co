import axios from 'axios'
import React, { useEffect, useState } from 'react'

function JobSlider() {
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("https://arbeitnow.com/api/job-board-api", {

                headers: {
                    // "Content-Type": "application/json",
                    // "Transfer-Encoding": "chunked",
                    // "Connection": "keep-alive",
                    // "vary": "Accept-Encoding",
                    // "cache-control": "no-cache, private",
                    // "x-ratelimit-limit": 3,
                    // "x-ratelimit-remaining": 2,
                    // "access-control-allow-origin": "*",
                    // "x-frame-options": "SAMEORIGIN",
                    // "x-xss-protection": "1; mode=block",
                    // "x-content-type-options": "nosniff",
                    // "CF-Cache-Status": "DYNAMIC",
                    // "Expect-CT": 'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
                    // "Report-To": { "endpoints": [{ "url": "https:\/\/a.nel.cloudflare.com\/report\/v3?s=GF8xKlF%2F7VDk82CcpveiNL8EhxcJubSYyRWrmljWa5FEW8SdPWINu%2FzV6UhWFTY6UAogrxbTYdEw7Wbo%2FdIs3VIUTDQkmn%2BNCnoRlBEZdtmhfOuR8CIR7957tVjhs6TD" }], "group": "cf-nel", "max_age": 604800 },
                    // "NEL": { "success_fraction": 0, "report_to": "cf-nel", "max_age": 604800 },
                    // "Server": "cloudflare",
                    // "CF-RAY": "6b4a856939a76983-FRA",
                    // "Content-Encoding": "br",
                    // "alt-svc": 'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400'
                },
            },
            )
            console.log(response);
        }
        fetch();
    }, [])
    return (
        <div>

        </div>
    )
}

export default JobSlider