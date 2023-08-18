import "./styles.css";
import Heder from "../src/component/Heder";
import Img1 from "../src/component/imges/main-footer-gallery-item-1.jpg";
import Img2 from "../src/component/imges/main-footer-gallery-item-2.jpg";
import Img3 from "../src/component/imges/main-footer-gallery-item-3.jpg";
import Img4 from "../src/component/imges/main-footer-gallery-item-4.jpg";
import Img5 from "../src/component/imges/download (11).png";
import Img6 from "../src/component/imges/download (12).png";
import Img7 from "../src/component/imges/download (13).png";
import Img8 from "../src/component/imges/download (14).png";
import Img9 from "../src/component/imges/download (15).png";
import Img10 from "../src/component/imges/download (16).png";
import Img11 from "../src/component/imges/download (17).png";
import Img12 from "../src/component/imges/download (18).png";
import Img13 from "../src/component/imges/download (19).png";
import Img14 from "../src/component/imges/download (20).png";
import Img15 from "../src/component/imges/download (1).png";
import Humburger from "../src/component/imges/hamburger (1).png";
import Intropreslogn from "../src/component/imges/intro-pre-slogan.png";
import Close from "../src/component/imges/close.png";

export default function App() {
  return (
    <>
      <div className="App">
        <div>
          <div class="main-header">
            <div class="main-nav">
              <a class="logo-title" href="#">
                <img
                  class="index-logo"
                  src="https://raw.githubusercontent.com/lendmid/bluerex/58f3a887cae075f55f56a3caa55cc65cb6ca65c6/img/logo.png"
                  width="69"
                  height="62"
                  alt="Logo"
                />
                BlueRex
              </a>

              <ul class="site-nav">
                <li>
                  <a class="site-nav-link current" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="site-nav-link" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a class="site-nav-link" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a class="site-nav-link" href="#">
                    Product
                  </a>
                </li>
                <li>
                  <a class="site-nav-link" href="#">
                    Reviews
                  </a>
                </li>
                <li>
                  <a class="site-nav-link" href="#">
                    Faq
                  </a>
                </li>
                <li>
                  <a class="site-nav-link" href="#">
                    Contact
                  </a>
                </li>

                <li class="site-nav-list-menu">
                  <a class="link-menu" href="#">
                    <img
                      class="icon-menu"
                      src={Humburger}
                      width="30"
                      height="24"
                      alt="Menu"
                    />
                    <img
                      class="icon-xmark"
                      src={Close}
                      width="28"
                      height="28"
                      alt="Close"
                    />
                  </a>

                  <div class="menu-wrapper">
                    <ul class="menu-list">
                      <li>
                        <a class="menu-list-link" href="#">
                          Login
                        </a>
                      </li>
                      <li>
                        <a class="menu-list-link" href="#">
                          Sign Up
                        </a>
                      </li>
                      <li>
                        <a class="menu-list-link" href="#">
                          Support
                        </a>
                      </li>
                      <li>
                        <a class="menu-list-link" href="#">
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div class="intro container">
              <img
                class="intro-pre-slogan"
                src={Intropreslogn}
                width="542"
                height="43"
                alt="We are best and creative agency"
              />
              <h1 class="intro-slogan">
                We turn creative ideas <br />
                into your business
              </h1>
              <p>
                Lorem ipsum dolor sit amet consec tetur adipi sicing elit.
                Sequi,
                <br />
                modi tenetur mollitia nam totam obcaecati.
              </p>

              <button class="btn btn-round btn-intro-pink">Our Story</button>
              <button class="btn btn-round btn-intro-purple">Read More</button>
            </div>
          </div>
        </div>

        <main>
          <section class="company">
            <h2 class="visually-hidden">Company</h2>

            <div class="company-wrapper container">
              <div class="company-left-col">
                <img
                  class="company-pre-slogan"
                  src="img/company-pre-slogan.png"
                  width="389"
                  height="33"
                  alt="Dream Big Inspire the World"
                />
                <h2 class="company-slogan">
                  We turn creative ideas <br />
                  into your business.
                </h2>
                <ul class="company-list">
                  <li>
                    <a class="company-list-link" href="#">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a class="company-list-link" href="#">
                      Mobile App
                    </a>
                  </li>
                  <li>
                    <a class="company-list-link current" href="#">
                      Desktop App
                    </a>
                  </li>
                  <li>
                    <a class="company-list-link" href="#">
                      Branding
                    </a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt vitae quidem quia laboriosam tenetur molestiae earum
                  voluptas sit eaque error quam eum quo esse minus illo, saepe
                  harum similique fuga.
                </p>
                <button class="btn company-btn">Read More</button>
              </div>

              <img
                class="company-right-col-img"
                src={Img15}
                width="450"
                height="609"
                alt="Watch"
              />
            </div>
          </section>

          <section class="achievement">
            <h2 class="visually-hidden">Achievement</h2>

            <div class="achievement-wrapper container">
              <div class="achievement-col">
                <p class="achievement-total">500+</p>
                <h3 class="achievement-slogan">
                  Successfully <br />
                  completed projects
                </h3>
                <p class="achievement-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus magni ab quaerat, dolor et velit nemo assumenda
                </p>
              </div>

              <div class="achievement-col col-center">
                <p class="achievement-total">254+</p>
                <h3 class="achievement-slogan">
                  Highly specialized <br />
                  employees
                </h3>
                <p class="achievement-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus magni ab quaerat, dolor et velit nemo assumenda
                </p>
              </div>

              <div class="achievement-col">
                <p class="achievement-total">45+</p>
                <h3 class="achievement-slogan">
                  Awards <br />
                  around the world
                </h3>
                <p class="achievement-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus magni ab quaerat, dolor et velit nemo assumenda
                </p>
              </div>
            </div>
          </section>

          <section class="story">
            <div class="story-wrapper container">
              <img
                class="story-pre-slogan"
                src="img/story-pre-slogan.png"
                width="402"
                height="48"
                alt="Let`s Grow Together"
              />
              <h2 class="story-slogan">
                We turn creative ideas into your business.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                nostrum eligendi corporis beatae, officia voluptatibus id ad
                doloremque doloribus perferendis facere tenetur ab illo
                recusandae ratione.
              </p>
              <button class="btn story-btn">Read More</button>
            </div>
          </section>

          <section class="services">
            <div class="services-wrapper container">
              <div class="services-col">
                <img
                  class="services-pre-slogan"
                  src="img/services-pre-slogan.png"
                  width="420"
                  height="33"
                  alt="We are best and creative agency"
                />
                <h2 class="services-slogan">
                  We turn creative ideas into your business.
                </h2>
                <p class="services-main-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero nostrum eligendi corporis beatae, officia voluptatibus
                  id ad doloremque doloribus perferendis facere tenetur ab illo
                  recusandae ratione consectetur.
                </p>

                <div class="services-mini-col-wrapper">
                  <div class="services-mini-col">
                    <h3 class="services-h3-left-col">Graphic Design</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Enim, quos? Impedit distinctio labore accusamus excepturi.
                    </p>
                    <button class="btn">Read More</button>
                  </div>

                  <div class="services-mini-col">
                    <h3 class="services-h3-right-col">Graphic Design</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Enim, quos? Impedit distinctio labore accusamus excepturi.
                    </p>
                    <button class="btn">Read More</button>
                  </div>
                </div>
              </div>

              <div class="services-col">
                <video
                  src="#"
                  width="557"
                  autoplay
                  poster="img/services-autoplay-poster.jpg"
                >
                  Services Video
                </video>
                <img
                  class="services-icon-play"
                  src={Img1}
                  width="96"
                  height="96"
                  alt="Play"
                />
              </div>
            </div>
          </section>

          <section class="works">
            <div class="container">
              <h2 class="works-heading">Our Recent Works</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti id magnam, esse mollitia aperiam sit rem incidunt,
                dignissimos voluptates amet! Cupiditate voluptatibus, impedit
                aut eius illum dignissimos illo corrupti dolor sit amet.
              </p>
              <ul class="works-list">
                <li>
                  <a class="works-list-link" href="#">
                    Web Design
                  </a>
                </li>
                <li>
                  <a class="works-list-link current" href="#">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a class="works-list-link" href="#">
                    Desktop
                  </a>
                </li>
                <li>
                  <a class="works-list-link" href="#">
                    Branding
                  </a>
                </li>
              </ul>

              <div class="works-gallery">
                <div class="works-gallery-photobox">
                  <a class="works-gallery-link" href="#">
                    <img
                      class="works-gallery-item"
                      src={Img14}
                      width="378"
                      height="316"
                      alt="Bottle"
                    />
                    <span class="works-gallery-label">Some Text</span>
                  </a>
                </div>

                <div class="works-gallery-photobox">
                  <a class="works-gallery-link" href="#">
                    <img
                      class="works-gallery-item"
                      src={Img13}
                      width="378"
                      height="316"
                      alt="Cup"
                    />
                    <span class="works-gallery-label">Some Text</span>
                  </a>
                </div>

                <div class="works-gallery-photobox">
                  <a class="works-gallery-link" href="#">
                    <img
                      class="works-gallery-item"
                      src={Img12}
                      width="378"
                      height="316"
                      alt="Book"
                    />
                    <span class="works-gallery-label">Some Text</span>
                  </a>
                </div>

                <div class="works-gallery-photobox">
                  <a class="works-gallery-link" href="#">
                    <img
                      class="works-gallery-item"
                      src={Img11}
                      width="378"
                      height="316"
                      alt="T-shirt"
                    />
                    <span class="works-gallery-label">Some Text</span>
                  </a>
                </div>

                <div class="works-gallery-photobox">
                  <a class="works-gallery-link" href="#">
                    <img
                      class="works-gallery-item"
                      src={Img7}
                      width="378"
                      height="316"
                      alt="Box"
                    />
                    <span class="works-gallery-label">Some Text</span>
                  </a>
                </div>

                <div class="works-gallery-photobox">
                  <a class="works-gallery-link" href="#">
                    <img
                      class="works-gallery-item"
                      src={Img8}
                      width="378"
                      height="316"
                      alt="Bottles"
                    />
                    <span class="works-gallery-label">Some Text</span>
                  </a>
                </div>

                <div class="works-gallery-photobox">
                  <a class="works-gallery-link" href="#">
                    <img
                      class="works-gallery-item"
                      src={Img9}
                      width="378"
                      height="316"
                      alt="Tag"
                    />
                    <span class="works-gallery-label">Some Text</span>
                  </a>
                </div>

                <div class="works-gallery-photobox">
                  <a class="works-gallery-link" href="#">
                    <img
                      class="works-gallery-item"
                      src={Img10}
                      width="378"
                      height="316"
                      alt="Bag"
                    />
                    <span class="works-gallery-label">Some Text</span>
                  </a>
                </div>

                <div class="works-gallery-photobox">
                  <a class="works-gallery-link" href="#">
                    <img
                      class="works-gallery-item"
                      src={Img10}
                      width="378"
                      height="316"
                      alt="Bottles2"
                    />
                    <span class="works-gallery-label">Some Text</span>
                  </a>
                </div>
              </div>

              <button class="btn works-btn">Read More</button>
            </div>
          </section>

          <section class="testimonials">
            <div class="testimonials-wrapper container">
              <div class="testimonials-col">
                <img
                  class="testimonials-pre-slogan"
                  src={Img6}
                  width="301"
                  height="41"
                  alt="Our Happy Client"
                />
                <h2 class="testimonials-slogan">Testimonials</h2>
                <blockquote class="testimonials-blockquote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis accusantium magnam hic dolorem adipisci numquam amet
                  nostrum perspiciatis.
                </blockquote>
                <p class="testimonials-blockquote-author">Mr.John Doe</p>
              </div>

              <img
                class="testimonials-client"
                src={Img5}
                width="365"
                height="573"
                alt="Client"
              />
            </div>
          </section>

          <section class="help">
            <div class="help-wrapper container">
              <h2 class="help-slogan">Need Help?</h2>

              <h3 class="help-slogan-after">Don't Forget to Contact With Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eaque perspiciatis nostrum quod veritatis eaque, dolor ab
                blanditiis consectetur doloremque illo quas nemo modi eius
                debitis.
              </p>

              <form class="help-form" action="#" method="post">
                <label for="help-form-name" aria-label="name">
                  <input
                    type="text"
                    name="name"
                    id="help-form-name"
                    placeholder="Name"
                    required
                  />
                </label>

                <label for="help-form-email" aria-label="email">
                  <input
                    type="email"
                    name="email"
                    id="help-form-email"
                    placeholder="Email"
                    required
                  />
                </label>

                <button class="btn help-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </section>

          <section class="social">
            <h2 class="visually-hidden">Social Media Links</h2>

            <div class="social-wrapper container">
              <ul class="social-list">
                <li>
                  <a class="social-list-link" href="#">
                    facebook
                  </a>
                </li>
                <li>
                  <a class="social-list-link" href="#">
                    twitter
                  </a>
                </li>
                <li>
                  <a class="social-list-link" href="#">
                    linkedin
                  </a>
                </li>
                <li>
                  <a class="social-list-link" href="#">
                    instagram
                  </a>
                </li>
                <li>
                  <a class="social-list-link-last" href="#">
                    behance
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>

        <div class="main-footer">
          <div class="main-footer-wrapper container">
            <section class="main-footer-links">
              <h2 class="visually-hidden">Quick Links</h2>

              <div class="main-footer-col">
                <h3 class="main-footer-heading">Company</h3>
                <ul class="main-footer-list">
                  <li>
                    <a class="main-footer-list-link" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Approach
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div class="main-footer-col">
                <h3 class="main-footer-heading">Company</h3>
                <ul class="main-footer-list">
                  <li>
                    <a class="main-footer-list-link" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Approach
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div class="main-footer-col">
                <h3 class="main-footer-heading">Company</h3>
                <ul class="main-footer-list">
                  <li>
                    <a class="main-footer-list-link" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Approach
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div class="main-footer-col">
                <h3 class="main-footer-heading">Company</h3>
                <ul class="main-footer-list">
                  <li>
                    <a class="main-footer-list-link" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Approach
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a class="main-footer-list-link" href="#">
                      News
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <figure class="main-footer-gallery">
              <img
                src={Img1}
                width="281"
                height="213"
                alt="The working process - 1"
              />
              <img
                src={Img2}
                width="281"
                height="213"
                alt="The working process - 2"
              />
              <img
                src={Img3}
                width="281"
                height="213"
                alt="The working process - 3"
              />
              <img
                src={Img4}
                width="281"
                height="213"
                alt="The working process - 4"
              />
            </figure>
          </div>

          <div class="main-footer-copyright">
            <p class="main-footer-p container">
              <span class="main-footer-p-text">
                Theme by
                <a
                  class="main-footer-copyright-link"
                  href="http://psdfreebies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PSDfreebies
                </a>
              </span>
              <span class="main-footer-p-text-last">
                Developed by
                <a
                  class="main-footer-copyright-link"
                  href="http://github.com/Filgeary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Filgeary
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
