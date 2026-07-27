import BookingBar from '../components/BookingBar'
import Newsletter from '../components/Newsletter'

export default function About() {
  return (
    <>
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(/assets/img/carousel-1.jpg)' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <BookingBar />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
              <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">AZEWA</span></h1>
              <p className="mb-4">Azewa Hotel አዝዋ ሆቴል is a lovely hotel located near the Bahirdar international stadium, offering comfort to both locals and tourists. Guests praise the delicious foods served at the hotel, particularly their tegabino dish. While some mention the lack of internet as a downside, overall, visitors appreciate the beautiful setting and friendly staff.</p>
              <div className="row g-3 pb-4">
                {[{ icon: 'fa-hotel', label: 'Rooms' }, { icon: 'fa-users-cog', label: 'Staffs' }, { icon: 'fa-users', label: 'Clients' }].map((item, index) => (
                  <div key={item.label} className="col-sm-4 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className={`fa ${item.icon} fa-2x text-primary mb-2`} />
                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                        <p className="mb-0">{item.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="#">Explore More</a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {['about-1.jpg', 'about-2.jpg', 'about-3.jpg', 'about-4.jpg'].map((src, index) => (
                  <div key={src} className={`col-6 ${index % 2 === 0 ? 'text-end' : 'text-start'}`}>
                    <img className={`img-fluid rounded ${index === 0 ? 'w-75' : index === 1 ? 'w-100' : index === 2 ? 'w-50' : 'w-75'} wow zoomIn`} data-wow-delay={`${0.1 + index * 0.2}s`} style={index === 0 ? { marginTop: '25%' } : undefined} src={`/assets/img/${src}`} alt={src} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={`/assets/img/team-${item}.jpg`} alt={`team-${item}`} />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      {['facebook', 'twitter', 'instagram'].map((icon) => (
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
