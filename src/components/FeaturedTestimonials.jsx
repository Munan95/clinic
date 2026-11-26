import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Marcus Chen",
    handle: "@marcuschen",
    image: "/assets/img/person/person-m-9.webp",
    rating: 5,
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    handle: "@sarahmitch",
    image: "/assets/img/person/person-f-5.webp",
    rating: 5,
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    id: 3,
    name: "James Wilson",
    handle: "@jwilson",
    image: "/assets/img/person/person-f-12.webp",
    rating: 5,
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore.",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    handle: "@emmarod",
    image: "/assets/img/person/person-m-12.webp",
    rating: 5,
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa.",
  },
  {
    id: 5,
    name: "David Kumar",
    handle: "@davidkumar",
    image: "/assets/img/person/person-m-13.webp",
    rating: 5,
    text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    id: 6,
    name: "Sophia Lee",
    handle: "@sophialee",
    image: "/assets/img/person/person-f-13.webp",
    rating: 5,
    text: "Texit tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
];

const SWIPER_BREAKPOINTS = {
  320: { slidesPerView: 1, spaceBetween: 40 },
  1200: { slidesPerView: 3, spaceBetween: 20 },
};

const FeaturedTestimonials = () => {
  return (
    <section
      id="featured-testimonials"
      className="featured-testimonials section"
    >
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <Swiper
          className="testimonials-14"
          modules={[Autoplay, Pagination]}
          loop
          speed={600}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={40}
          breakpoints={SWIPER_BREAKPOINTS}
          pagination={{ clickable: true }}
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-item">
                <div
                  className="stars"
                  role="img"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }, (_, index) => (
                    <i key={index} className="bi bi-star-fill" />
                  ))}
                </div>

                <p>{item.text}</p>

                <div className="profile">
                  <img
                    src={item.image}
                    className="testimonial-img"
                    alt={item.name}
                    loading="lazy"
                  />
                  <div className="info">
                    <h4>
                      {item.name} <i className="bi bi-patch-check-fill" />
                    </h4>
                    <span>{item.handle}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;