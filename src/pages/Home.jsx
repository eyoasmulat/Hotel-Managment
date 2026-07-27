import { Link } from 'react-router-dom'
import BookingBar from '../components/BookingBar'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/assets/img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 700 }}>
                  <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                  <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
                  <Link to="/room" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</Link>
                  <Link to="/booking" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/assets/img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 700 }}>
                  <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                  <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
                  <Link to="/room" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</Link>
                  <Link to="/booking" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</Link>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <BookingBar />

      <div id="about-section" className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
              <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">AZEWA</span></h1>
              <p className="mb-4">Azewa Hotel አዝዋ ሆቴል is a charming establishment nestled in the heart of town, making it an ideal spot for both locals and travelers. Its proximity to the Bahirdar International Stadium adds to its appeal, providing easy access to various events. Guests rave about the delicious local cuisine served at the hotel, particularly their famous tegabino dish.</p>
              <div className="row g-3 pb-4">
                {['Rooms', 'Staffs', 'Clients'].map((item, index) => (
                  <div key={item} className="col-sm-4 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className={`fa ${index === 0 ? 'fa-hotel' : index === 1 ? 'fa-users-cog' : 'fa-users'} fa-2x text-primary mb-2`}></i>
                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                        <p className="mb-0">{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary py-3 px-5 mt-2">Explore More</Link>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="/assets/img/about-1.jpg" style={{ marginTop: '25%' }} alt="About 1" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/assets/img/about-2.jpg" alt="About 2" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/assets/img/about-3.jpg" alt="About 3" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/assets/img/about-4.jpg" alt="About 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="rooms-section" className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
          </div>
          <div className="row g-4">
            {[
              { title: 'Junior Suite', image: '/assets/img/room-1.jpg' },
              { title: 'Executive Suite', image: '/assets/img/room-2.jpg' },
              { title: 'Super Deluxe', image: '/assets/img/room-3.jpg' },
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
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <small key={starIndex} className="fa fa-star text-primary"></small>
                        ))}
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                      <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                      <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                    </div>
                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    <div className="d-flex justify-content-between">
                      <Link className="btn btn-sm btn-primary rounded py-2 px-4" to="/room">View Detail</Link>
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

      <div id="services-section" className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-hotel', title: 'Rooms & Appartment' },
              { icon: 'fa-utensils', title: 'Food & Restaurant' },
              { icon: 'fa-spa', title: 'Spa & Fitness' },
              { icon: 'fa-swimmer', title: 'Sports & Gaming' },
              { icon: 'fa-glass-cheers', title: 'Event & Party' },
              { icon: 'fa-dumbbell', title: 'GYM & Yoga' },
            ].map((service, index) => (
              <div key={service.title} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <a className="service-item rounded" href="#">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className={`fa ${service.icon} fa-2x text-primary`}></i>
                    </div>
                  </div>
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="testimonial-section" className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="owl-carousel testimonial-carousel py-5">
            {[1, 2, 3].map((item) => (
              <div key={item} className="testimonial-item position-relative bg-white rounded overflow-hidden">
                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src={`/assets/img/testimonial-${item}.jpg`} style={{ width: 45, height: 45 }} alt="testimonial" />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="team-section" className="container-xxl py-5">
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
                      <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
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
