import Newsletter from '../components/Newsletter'
import BookingBar from '../components/BookingBar'

export default function Testimonial() {
  return (
    <>
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(/assets/img/carousel-1.jpg)' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <BookingBar />

      <div className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="owl-carousel testimonial-carousel py-5">
            {[1, 2, 3].map((item) => (
              <div key={item} className="testimonial-item position-relative bg-white rounded overflow-hidden">
                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src={`/assets/img/testimonial-${item}.jpg`} style={{ width: 45, height: 45 }} alt={`Testimonial ${item}`} />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  )
}
