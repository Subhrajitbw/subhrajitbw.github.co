import axios from 'axios'
import React, { useEffect, useState } from 'react'

function JoblistReed() {
  let [num, setNum] = useState(1);
  const [data, setData] = useState([]);
  const data2 = [];
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("https://edujob.herokuapp.com/promise", {
        headers: {
          "Access-Control-Allow-Origin": '*',
        }
      })
      console.log(response.data);
      setData(response.data);
    }
    fetch();

  }, [])

  const handleNext = () =>{
    setNum(num+1);
  }
  const handlePrev = () =>{
    setNum(num-1);
  }

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
              <h5 className="mb-3">{i.jobTitle}</h5>
              <span className="text-truncate me-3">
                <i className="fa fa-map-marker-alt text-primary me-2" />{i.locationName}
              </span>
              {/* <span className="text-truncate me-3">
                <i className="far fa-clock text-primary me-2" />Full
                Time
              </span> */}
              <span className="text-truncate me-0">
                <i className="far fa-money-bill-alt text-primary me-2" />{i.minimumSalary} {i.currency}
                - {i.maximumSalary} {i.currency}
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
            <div className="d-flex mb-3">

              <a className="btn btn-primary" href={i.jobUrl}>
                Apply Now
              </a>
            </div>
            <small className="text-truncate">
              <i className="far fa-calendar-alt text-primary me-2" />Date: {i.date}
            </small>
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