import Newsletter from '../components/Newsletter'
import BookingBar from '../components/BookingBar'

export default function Team() {
  return (
    <>
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(/assets/img/carousel-1.jpg)' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <BookingBar />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4].map((team, index) => (
              <div key={team} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={`/assets/img/team-${team}.jpg`} alt={`Team ${team}`} />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      {['facebook-f', 'twitter', 'instagram'].map((icon) => (
                        <a key={icon} className="btn btn-square btn-primary mx-1" href="#"><i className={`fab fa-${icon}`} /></a>
                      ))}
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  )
}
