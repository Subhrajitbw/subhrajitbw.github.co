import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

function JobSlider() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [data, setData] = useState([]);
    let data2=[];
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api", {
                headers: {
                    'content-type': 'application/json',
                    'x-rapidapi-host': 'arbeitnow-free-job-board.p.rapidapi.com',
                    'x-rapidapi-key': '0fd3ea20e1msh1040593ff0cbae8p11f723jsncf745116a077'
                }
            }
            )
            setData(response.data.data)
            data2=data.splice(0,4);
            console.log(data2)
        }
        fetch();
    }, [])

    const useItems = data.map((i) => {
            return (
                <div class="container">
                    <div className='detail container mb-3'><h3>{i.title}</h3>
                    {/* <div dangerouslySetInnerHTML={{ __html: i.description }}></div> */}
                    <h1>{i.company_name}</h1></div>
                    <div className='container mt-5 apply-div'><a className="apply" href={i.url}>Apply Now</a></div>
                </div>
            )

    })
    return (
        <div class="container">
            <Slider {...settings}>
                {data && useItems}
            </Slider>
        </div>
    )
}

export default JobSlider