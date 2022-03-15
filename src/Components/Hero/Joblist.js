import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Joblist() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("https://www.reed.co.uk/api/1.0/search", {
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Basic ZmQ0MzQxN2ItZmRlNi00MDJhLTg0ZmYtYzQ1NmE3ZjMyNWM2Og=='
        }
      })
      setData(response.data.results)
    }
    fetch();
  }, [])

   const useItems = data.map
  return (
    <div
      className="tab-class text-center wow fadeInUp"
      data-wow-delay="0.3s"
    >
      <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
        <li className="nav-item">
          <a
            className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
            data-bs-toggle="pill"
            href="#tab-1"
          >
            <h6 className="mt-n1 mb-0">Featured</h6>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex align-items-center text-start mx-3 pb-3"
            data-bs-toggle="pill"
            href="#tab-2"
          >
            <h6 className="mt-n1 mb-0">Full Time</h6>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex align-items-center text-start mx-3 me-0 pb-3"
            data-bs-toggle="pill"
            href="#tab-3"
          >
            <h6 className="mt-n1 mb-0">Part Time</h6>
          </a>
        </li>
      </ul>
      </div>
      )
}

      export default Joblist