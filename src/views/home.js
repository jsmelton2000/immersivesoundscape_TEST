import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Potable Ornate Newt</title>
        <meta property="og:title" content="Potable Ornate Newt" />
      </Helmet>
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="home-navbar-interactive navbarContainer"
        >
          <span className="home-logo">IMMERSIVE Sound</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <Link to="/" className="home-nav12 bodySmall">
                Home
              </Link>
              <Link to="/services" className="home-nav2 bodySmall">
                About
              </Link>
              <Link to="/services" className="home-nav3 bodySmall">
                Services
              </Link>
              <Link to="/portfolio" className="home-nav4 bodySmall">
                Portfolio
              </Link>
              <Link to="/contact" className="home-nav5 bodySmall">
                Contact
              </Link>
            </nav>
            <div className="home-buttons"></div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">IMMERSIVE</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span>Home</span>
                <span className="home-nav21 bodySmall">About</span>
                <span className="home-nav31 bodySmall">Services</span>
                <span className="home-nav41 bodySmall">Portfolio</span>
                <span className="home-nav51 bodySmall">Contact</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1 heroContainer">
          <div className="home-container01">
            <h1 className="home-hero-heading">Immersive Soundscape</h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Designing and Installing Sound Systems for Your Home
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <Link to="/contact" className="home-hero-button1 buttonFilled">
                Get Started
              </Link>
              <Link to="/about" className="home-hero-button2 buttonFlat">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading">
                Enhance Your Audio Experience With Multitrack Theme Park Quality
                Surround Sound
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover the features that make our sound systems stand
                      out
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Customized Sound Design"
                subHeading="Tailored sound systems designed to fit your home or outdoor space"
              ></FeatureCard>
              <FeatureCard
                heading="Immersive Audio Experience"
                subHeading="Enjoy a captivating audio experience with our state-of-the-art, multi-point sound source systems"
              ></FeatureCard>
              <FeatureCard
                heading="Professional Installation"
                subHeading="Expert installation services to ensure optimal performance and aesthetics"
              ></FeatureCard>
              <FeatureCard
                heading="Seamless Immersion"
                subHeading="Individual track diversity to all corners of your indoor or outdoor space"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1 pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span>Systems</span>
              <br></br>
            </span>
            <h2 className="heading2">Example Setups</h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>Find the perfect sound system package for your home</span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="home-pricing-card basicPricingCard">
              <div className="home-container06">
                <span className="home-text36 heading3">BASIC</span>
                <span>
                  Wow your guests with immersive sounds from around the world at
                  the touch of a button.
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text37">starts at $</span>
                <span className="home-basic-plan-pricing">5000</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text38">✔</span>
                  <span className="home-text39">
                    4 speakers, 1 sub, 1 amp, 1 DSP
                  </span>
                </div>
                <div className="home-container10">
                  <span className="home-text40">✔</span>
                  <span className="home-free-plan-features">
                    6 themes of sounds each with 4 separate tracks of audio
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text41">✔</span>
                  <span>
                    app controlled interface for your iphone or computer.
                    upgrade to add music streaming
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text42">✔</span>
                  <span className="bodySmall">
                    custom install and system tuning
                  </span>
                </div>
              </div>
              <Link
                to="/services"
                className="home-navlink buttonFilledSecondary"
              >
                Learn More
              </Link>
            </div>
            <div className="freePricingCard home-pricing-card1">
              <div className="home-container13">
                <span className="home-text43">
                  <span className="heading3">TOP-</span>
                  <span>NOTCH</span>
                </span>
                <span>
                  Transport the listener through time and space.  Immersive
                  sounds and music to fill your creative space. 
                </span>
              </div>
              <div className="home-container14">
                <span className="home-text46">starts at $</span>
                <span className="home-free-plan-price">7000</span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <span className="home-text47">✔</span>
                  <span className="bodySmall">
                    6 speakers, 1 sub, 2 amps, 1 DSP
                  </span>
                </div>
                <div className="home-container17">
                  <span className="home-text48">✔</span>
                  <span>
                    10 themes of sounds each with 6 separate tracks of audio
                  </span>
                </div>
                <div className="home-container18">
                  <span className="home-text49">✔</span>
                  <span>
                    app controlled interface for your iphone or computer as well
                    as integrated music streaming
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-text50">✔</span>
                  <span>
                    custom install and system tuning with additional advanced
                    controls
                  </span>
                </div>
              </div>
              <Link
                to="/services"
                className="home-navlink1 buttonFilledSecondary"
              >
                Learn More
              </Link>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container20">
                <span className="home-text51 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span>
                  Are we really there? close your eyes and you wont know the
                  difference. This is total Sound Immersion.
                </span>
              </div>
              <div className="home-container21">
                <span className="home-text54">starts at $</span>
                <span className="home-pro-plan-pricing">9000</span>
              </div>
              <div className="home-container22">
                <div className="home-container23">
                  <span className="home-text55">✔</span>
                  <span>8 speakers, 2 sub, 3 amps, 1 DSP</span>
                </div>
                <div className="home-container24">
                  <span className="home-text57">✔</span>
                  <span className="bodySmall">
                    You tell us what you want to hear, we will make it.
                  </span>
                </div>
                <div className="home-container25">
                  <span className="home-text58">✔</span>
                  <span>
                    app controlled interface for your iphone or computer or
                    touch panel. Integration into your home&apos;s smart sound
                    sytem.
                  </span>
                </div>
                <div className="home-container26">
                  <span className="home-text59">✔</span>
                  <span>
                    concert level system tuning with custom interfaces built for
                    you
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text60">✔</span>
                  <span>bragging rights</span>
                </div>
              </div>
              <Link
                to="/services"
                className="home-navlink2 buttonFilledSecondary"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Transform Your Living Space with A High-Quality Theme Park
            Multi-Point Sound System
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Immersive Soundscape specializes in creating customized sound
                  solutions for residential homes and backyards. With our
                  expertise in sound design and installation, we can enhance
                  your living space with a truly immersive audio experience.
                  Whether you&apos;re looking to upgrade your home theater,
                  create a multi-room audio system, or install outdoor speakers
                  for your backyard, we have the knowledge and skills to bring
                  your vision to life.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <Link to="/portfolio" className="home-banner-button buttonFilled">
            Learn More
          </Link>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container28">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text78 heading2">Common questions</h2>
              <span className="home-text79 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container29">
              <Question1
                answer="No, this is commercial grade, theme park quality surround sound, with completely diverse multitrack sounds coming from different point source speakers creating the most immersive sound experience possible."
                question="Is this similar to surround sound systems like my TV or home theater?"
              ></Question1>
              <Question1
                answer="We design and install a wide range of sound systems for residential homes and backyards, including indoor speakers, outdoor speakers, amplification and processing systems, and DSP controlled multitrack audio systems."
                question="What types of sound systems do you design and install?"
              ></Question1>
              <Question1
                answer="Absolutely! We understand that every home and customer has unique requirements. Our team will work closely with you to design a customized sound system that meets your specific needs and preferences."
                question="Can you customize the sound system to fit my specific needs?"
              ></Question1>
              <Question1
                answer="The duration of the installation process depends on various factors such as the size of your home, the complexity of the sound system, and any additional customization requirements. Our team will provide you with an estimated timeline during the initial consultation."
                question="How long does the installation process usually take?"
              ></Question1>
              <Question1
                answer="We pride ourselves on our expertise, attention to detail, and commitment to customer satisfaction. Our team of professionals has years of experience in designing and installing high-quality sound systems. We prioritize delivering exceptional results that exceed our customers' expectations."
                question="What sets your company apart from other sound system providers?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1 footerContainer">
          <div className="home-container30">
            <span className="home-logo2">IMMERSIVE Sound</span>
            <nav className="home-nav1 bodySmall home-nav1">
              <a
                href="https://www.immersivesoundscape.com/"
                className="home-nav11 bodySmall"
              >
                Home
              </a>
              <Link to="/about" className="home-nav22 bodySmall">
                About
              </Link>
              <Link to="/services" className="home-nav32 bodySmall">
                Services
              </Link>
              <Link to="/portfolio" className="home-nav42 bodySmall">
                Portfolio
              </Link>
              <Link to="/contact" className="home-nav52 bodySmall">
                Contact
              </Link>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container31">
            <span className="bodySmall home-text82">
              © 2024 ImmersiveSoundscape, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
