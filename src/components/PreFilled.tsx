// import 'bootstrap/dist/css/bootstrap.min.css';



const PreFilled = (props: any) => {
    const handleClick = (event: any) => {
        console.log("It clicked")
    };

    return (
        // source is https://getbootstrap.com/docs/5.2/examples/features/ 
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 border-bottom">Ready-to-go sessions</h2>
      
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

            <div onClick={handleClick} className="col">
              <div className="card card-cover h-75 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ color: 'blue', lineHeight : 10, padding: 20 }}>
                <div className="d-flex flex-column h-75 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Fall asleep</h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                      {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                      <small>4-7-8-0</small>
                    </li>
                    <li className="d-flex align-items-center">
                      {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg> */}
                      <small> 5 mins </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      
            <div className="col">
              <div className="card card-cover h-75 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ color: 'blue', lineHeight : 10, padding: 20 }}>
                <div className="d-flex flex-column h-75 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Fall asleep</h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                      {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                      <small>4-7-8-0</small>
                    </li>
                    <li className="d-flex align-items-center">
                      {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg> */}
                      <small> 5 mins </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      
            <div className="col">
              <div className="card card-cover h-75 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ color: 'blue', lineHeight : 10, padding: 20 }}>
                <div className="d-flex flex-column h-75 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Calm down</h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                      {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                      <small>Resonant</small>
                    </li>
                    <li className="d-flex align-items-center">
                      {/* <svg className="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg> */}
                      <small>2 mins</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
    };

export default PreFilled;