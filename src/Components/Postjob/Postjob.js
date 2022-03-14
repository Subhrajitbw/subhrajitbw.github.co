import React from 'react'

function Postjob() {
  return (
    <div className="container-xxl py-5 text-center">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-8">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Description</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Responsibility</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Qualifications</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}} defaultValue={""} />
                        <label htmlFor="message">Job Summary</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}} defaultValue={""} />
                        <label htmlFor="message">Company Details</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}} defaultValue={""} />
                        <label htmlFor="message">Job Poster Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}} defaultValue={""} />
                        <label htmlFor="message">Email Address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" placeholder="Leave a message here" id="message" defaultValue={""} />
                        <label htmlFor="message">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Post</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Postjob