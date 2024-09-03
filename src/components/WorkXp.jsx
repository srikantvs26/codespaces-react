function WorkXp() {
  return (
    <>
      <p className="text-dark fs-3 fw-normal">Work Experience</p>
      <div className="timeline border-start border-2">
        {/* <div className="card-group mb-5"> */}
        <div className="card ms-5 mb-5 border-left shadow-sm bg-body-tertiary rounded linker">
          <div className="card-body m-3">
            <h4 className="card-title">
              Senior Software Engineer
              <span className="text-muted"> at BGSW</span>
            </h4>
            <h6 className="card-subtitle mb-2 text-body-secondary mb-3">
              July 2022 - Present
            </h6>
            {/* <div className="card-text">
              <ul>
                <li>
                  Integrating Various Lenders which brought business of more
                  than 200cr.
                </li>
                <li>
                  Leading team of software engineers and designing solutions
                  with them .
                </li>
                <li>
                  Architected and refactored the existing Bureau Integration
                  like CIBIL , EquiFax , Experian and brought down latency
                  drastically ..
                </li>
                <li>
                  Brought in Cassandra Database and integrated with multiple
                  services to bring down the load on main services..
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="card ms-5 mb-5 border-left shadow-sm bg-body-tertiary rounded linker">
          <div className="card-body m-3">
            <h4 className="card-title">
              Project Engineer
              <span className="text-muted"> at Wipro</span>
            </h4>
            <h6 className="card-subtitle mb-2 text-body-secondary mb-3">
              Oct-2018 - July-2022
            </h6>
            {/* <div className="card-text">
              <ul>
                <li>
                  Worked in multiple projects across domains with client like Ericsson, Samsung, Samsung SDS and Huawei.
                </li>
                <li>
                  Leading team of software engineers and designing solutions
                  with them.
                </li>
                <li>
                  Did code reviews for Team members.
                </li>
                <li>
                  Brought in Cassandra Database and integrated with multiple
                  services to bring down the load on main services..
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default WorkXp;
