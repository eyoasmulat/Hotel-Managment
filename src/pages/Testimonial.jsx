import Newsletter from "../components/Newsletter";
import BookingBar from "../components/BookingBar";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    profession: "Business Traveler",
    image: "/assets/img/testimonial-1.jpg",
    rating: 5,
    comment:
      "The hotel exceeded my expectations. The rooms were clean, the staff was friendly, and the customer service was exceptional.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    profession: "Tourist",
    image: "/assets/img/testimonial-2.jpg",
    rating: 5,
    comment:
      "I had a wonderful stay with my family. The rooms were spacious, and the facilities were excellent. Highly recommended!",
  },
  {
    id: 3,
    name: "Michael Brown",
    profession: "Software Engineer",
    image: "/assets/img/testimonial-3.jpg",
    rating: 4,
    comment:
      "Great location and comfortable rooms. The online booking system was simple and convenient.",
  },
  {
    id: 4,
    name: "Emily Davis",
    profession: "Photographer",
    image: "/assets/img/testimonial-1.jpg",
    rating: 5,
    comment:
      "Beautiful atmosphere with modern facilities. The staff made us feel welcome throughout our stay.",
  },
  {
    id: 5,
    name: "David Wilson",
    profession: "Entrepreneur",
    image: "/assets/img/testimonial-2.jpg",
    rating: 5,
    comment:
      "Excellent service, delicious food, and clean rooms. I will definitely come back again.",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    profession: "Teacher",
    image: "/assets/img/testimonial-3.jpg",
    rating: 4,
    comment:
      "A relaxing experience with professional staff. The hotel provides great value for money.",
  },
];

export default function Testimonial() {
  return (
    <>
      {/* Page Header */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{
          backgroundImage: "url(/assets/img/carousel-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Testimonials
            </h1>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/testimonial">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Testimonials
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <BookingBar />

      {/* Testimonial Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">
              Testimonials
            </h6>
            <h1 className="mb-5">
              What Our <span className="text-primary text-uppercase">Guests</span> Say
            </h1>
          </div>

          <div className="row g-4">
            {testimonials.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="card border-0 shadow h-100">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      {[...Array(item.rating)].map((_, index) => (
                        <i
                          key={index}
                          className="fa fa-star text-warning me-1"
                        ></i>
                      ))}
                    </div>

                    <p className="text-muted fst-italic">
                      "{item.comment}"
                    </p>

                    <hr />

                    <div className="d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-circle"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />

                      <div className="ms-3">
                        <h5 className="mb-0">{item.name}</h5>
                        <small className="text-primary">
                          {item.profession}
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer bg-primary text-white text-center">
                    <i className="fa fa-quote-right fa-lg"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
}