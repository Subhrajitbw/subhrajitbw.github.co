import axios from 'axios'
import React, { useEffect, useState } from 'react'

function JoblistReed() {
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
        }
        fetch();
    }, [])

 

  const useItems = data.map((i) => {
    return (
      <div className="job-item p-4 mb-4">
        <div className="row g-4">
          <div className="col-sm-12 col-md-8 d-flex align-items-center">
            <img alt=""
              className="flex-shrink-0 img-fluid border rounded"
              src={require("../img/job.png")}

              style={{ width: "80px", height: "80px" }}
            />
            <div className="text-start ps-4">
              <h5 className="mb-3">{i.title}</h5>
              <span className="text-truncate me-3">
                <i className="fa fa-map-marker-alt text-primary me-2" />{i.location}
              </span>
              {/* <span className="text-truncate me-3">
                <i className="far fa-clock text-primary me-2" />Full
                Time
              </span> */}
              {/* {!(i.currency) && (
              <span className="text-truncate me-0">
                <i className="far fa-money-bill-alt text-primary me-2" />{i.minimumSalary} {i.currency}
                - {i.maximumSalary} {i.currency}
              </span>
              )} */}
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
            <div className="d-flex mb-3">

              <a className="btn btn-primary" href={i.url}>
                Apply Now
              </a>
            </div>
            {/* {!i.date && (
            <small className="text-truncate">
              <i className="far fa-calendar-alt text-primary me-2" />Date: {i.date}
            </small>
            )} */}
          </div>
        </div>
      </div>
    )
  })
  return (
    <div class="container py-4">
      {data && useItems}
      
    </div>
  )
}

export default JoblistReed;