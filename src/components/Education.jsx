function WorkXp() {
  return (
    <>
      <p className="text-dark fs-3 fw-normal">Education</p>
      <div className="timeline border-start border-2">
        {/* <div className="card-group mb-5"> */}
        <div className="card ms-5 mb-5 border-left shadow-sm bg-body-tertiary rounded linker">
          <div className="card-body m-3">
            <h4 className="card-title">
              Bachelor's in Computer Science
              <span className="text-muted fs-5">
                {' '}
                from Visvesvaraya Technological University{' '}
              </span>
            </h4>
            <h6 className="card-subtitle mb-2 text-body-secondary mb-3">
              2014 - 2018
            </h6>
            <div className="card-text">
              <p>
                Completed Bachelor's degree securing First Class with
                Distinction.
              </p>
            </div>
          </div>
        </div>

        <div className="card ms-5 mb-5 border-left shadow-sm bg-body-tertiary rounded linker">
          <div className="card-body m-3">
            <h4 className="card-title">
              10<sup>th</sup> and 12<sup>th</sup>
              <span className="text-muted fs-5"> from Army Public School</span>
            </h4>
            <h6 className="card-subtitle mb-2 text-body-secondary mb-3">
              2011 - 2014
            </h6>
            <div className="card-text">
              <p>
                Completed 10<sup>th</sup> with 93% and 12<sup>th</sup> with
                77.8%
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkXp;
