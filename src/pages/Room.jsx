import { Link } from 'react-router-dom'
import BookingBar from '../components/BookingBar'
import Newsletter from '../components/Newsletter'

export default function Room() {
  return (
    <>
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(/assets/img/carousel-1.jpg)' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Rooms</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Rooms</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <BookingBar />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
          </div>
          <div className="row g-4">
            {[
              { title: 'Single Bedroom', image: '/assets/img/room-1.jpg' },
              { title: 'Two-Bedroom', image: '/assets/img/room-2.jpg' },
              { title: 'Hall Room (Living Room)', image: '/assets/img/room-3.jpg' },
            ].map((room, index) => (
              <div key={room.title} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={room.image} alt={room.title} />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{room.title}</h5>
                      <div className="ps-2">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <small key={idx} className="fa fa-star text-primary"></small>
                        ))}
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                      <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                      <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                    </div>
                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    <div className="d-flex justify-content-between">
                      <Link className="btn btn-sm btn-primary rounded py-2 px-4" to="/booking">View Detail</Link>
                      <Link className="btn btn-sm btn-dark rounded py-2 px-4" to="/booking">Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
        <div className="row g-0">
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5">
              <h6 className="section-title text-start text-white text-uppercase mb-3">Luxury Living</h6>
              <h1 className="text-white mb-4">Discover A Brand Luxurious Hotel</h1>
              <p className="text-white mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.</p>
              <Link className="btn btn-primary py-md-3 px-md-5 me-3" to="/room">Our Rooms</Link>
              <Link className="btn btn-light py-md-3 px-md-5" to="/booking">Book A Room</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="video">
              <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  )
}
