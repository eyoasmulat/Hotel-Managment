export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
      <div className="container pb-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <div className="bg-primary rounded p-4">
              <a href="/">
                <h1 className="text-white text-uppercase mb-3">Hotelier</h1>
              </a>
              <p className="text-white mb-0">
                Download <a className="text-dark fw-medium" href="https://htmlcodex.com/hotel-html-template-pro" target="_blank" rel="noreferrer">Hotelier – Premium Version</a>, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="row gy-5 g-4">
              <div className="col-md-6">
                <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                <a className="btn btn-link" href="/about">About Us</a>
                <a className="btn btn-link" href="/contact">Contact Us</a>
                <a className="btn btn-link" href="#">Privacy Policy</a>
                <a className="btn btn-link" href="#">Terms & Condition</a>
                <a className="btn btn-link" href="#">Support</a>
              </div>
              <div className="col-md-6">
                <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                <a className="btn btn-link" href="/service">Food & Restaurant</a>
                <a className="btn btn-link" href="/service">Spa & Fitness</a>
                <a className="btn btn-link" href="/service">Sports & Gaming</a>
                <a className="btn btn-link" href="/service">Event & Party</a>
                <a className="btn btn-link" href="/service">GYM & Yoga</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
              <br />Designed By <a className="border-bottom" href="https://htmlcodex.com" target="_blank" rel="noreferrer">HTML Codex</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
