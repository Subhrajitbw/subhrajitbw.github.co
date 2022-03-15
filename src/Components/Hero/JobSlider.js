import axios from 'axios'
import React, { useEffect, useState } from 'react'

function JobSlider() {
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("https://arbeitnow.com/api/job-board-api", {

                headers: {
                    'Access-Control-Allow-Origin': '*',
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