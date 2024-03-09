import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useRef } from 'react';
import GlobalContext from '../common/GlobalContext';
import {
  faArrowRight,
  faChild,
  faFileCode,
  faGamepad,
  faGraduationCap,
  faSchool
} from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faHtml5, faJsSquare, faUnity } from '@fortawesome/free-brands-svg-icons';

const MoreAboutMe = () => {
  const { setDevelopRef } = useContext(GlobalContext);
  const developRef = useRef();

  useEffect(() => {
    setDevelopRef(developRef);
  }, []);

  return (
    <div ref={developRef} className="d-flex flex-column py-3 py-md-5 container">
      <div className="my-5 text-center">
        <h4 className="ff-press-start ">MY JOURNEY</h4>
      </div>
      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <FontAwesomeIcon icon={faChild} className="about-me-icon" />
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">1995-2013</p>

            <p>
              Anyone who has known me, for any amount of time, knows that I have always surrounded myself with
              technology. I've had a fascination of technology, and how it worked, for as long as I can remember. This
              has manifested in many ways including enjoying video games, building computers, developing web
              applications, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <FontAwesomeIcon icon={faSchool} className="about-me-skill-icon" />
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">2013</p>
            <p>
              In 2013 I started my college career at the{' '}
              <a href="https://usm.maine.edu/" target="_blank">
                University Of Southern Maine
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">2016</p>
            <p>
              In 2016 I designed, developed and published my first professional website for Precision Collision &
              Repair. As I was just starting to learn about web development this website was created using{' '}
              <span className="code">HTML5</span>, <span className="code">CSS3</span>,{' '}
              <span className="code">Javascript</span>, and <span className="code">Bootstrap</span>.
            </p>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3 d-flex align-items-center flex-wrap">
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">HTML</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">JS</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">CSS</span>
          </div>
        </div>
      </div>
      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">2016</p>
            <p>
              In 2016 I also was part of a lab known as the Ci2 lab, at the{' '}
              <a href="https://usm.maine.edu/" target="_blank">
                University Of Southern Maine
              </a>
              . During my time working in the lab I built many video games using{' '}
              <a href="https://unity.com/" target="_blank">
                Unity
              </a>
              , a <span className="code">C#</span> based game engine, and met many extremely talented artists,
              musicians, developers and more.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3 d-flex align-items-center flex-wrap">
            <FontAwesomeIcon icon={faUnity} className="about-me-skill-icon p-3" />
            <FontAwesomeIcon icon={faArrowRight} className="about-me-skill-icon-arrow p-3" />
            <FontAwesomeIcon icon={faGamepad} className="about-me-skill-icon p-3" />
          </div>
        </div>
      </div>

      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">2017</p>
            <p className="code ff-press-start">Software Development Intern</p>
            <p>
              In 2017 I joined{' '}
              <a href="https://www.tylertech.com/" className="text-decoration-underline">
                Tyler Technologies
              </a>{' '}
              as a Software Development Intern. During that first year, I designed and developed multiple web
              applications that helped to improve the daily workload of Tyler's Hosting Services team.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="px-3 d-flex align-items-center flex-wrap">
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">C#</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">CSHTML</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">ASP.NET</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">jQuery</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Bootstrap</span>
          </div>
        </div>
      </div>
      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <FontAwesomeIcon icon={faGraduationCap} className="about-me-icon" />
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">2018</p>
            <p>
              In 2018 I graduated from the{' '}
              <a href="https://usm.maine.edu/" target="_blank">
                University Of Southern Maine
              </a>{' '}
              with a <span className="code">Bachelors Degree</span> in <span className="code">Computer Science</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">2018</p>
            <p className="code ff-press-start">DevOps Engineer</p>
            <p>
              In 2018 I was officially hired and transitioned into my next role as a DevOps Engineer. This position
              still mainly focused on web development in C# and ASP.NET but now included expanding my knowledge of other
              commonly used frameworks and technologies. During my years as a DevOps Engineer I spent my time focused on
              learning and growing my knowledge of front-end technologies and became the primary developer for all user
              experience related development. I designed, developed, and supported multiple production level
              applications, while also building the backend-infrastructure that made them possible. I designed
              relational database structures, the corresponding API layers needed, and then integrated the full stack of
              technology to produce the end product.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="px-3 d-flex align-items-center justify-content-center flex-wrap">
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">C#</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">CSHTML</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">.NET CORE</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">jQuery</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">RabbitMq</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">GraphQL</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Kubernetes</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Elastic Search</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">MSSQL</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Entity Framework</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Bootstrap</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Azure DevOps</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">SignalR</span>
          </div>
        </div>
      </div>
      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">2021</p>
            <p className="code ff-press-start">Senior DevOps Engineer</p>
            <p>
              In 2021, after 3 years as a DevOps Engineer, I was promoted to Senior DevOps Engineer. This was a goal I
              started working towards in 2019 and was able to achieve by taking on extra responsibilities such as:
            </p>
            <ul>
              <li>
                Presenting any and all progress from each 2 week sprint to stakeholders and other interested parties.
              </li>
              <li>Leading development and planning on multiple major applications.</li>
              <li>Helping to guide newer members on our team through any problems or challenges that came up.</li>
            </ul>
            <p>
              Since being promoted, the majority of my day to day has continued to be full-stack development with a
              focus on solving user stories with dynamic user experiences.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="px-3 d-flex align-items-center justify-content-center flex-wrap">
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">C#</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">CSHTML</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">.NET 6.0</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">jQuery</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">RabbitMq</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">GraphQL</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Kubernetes</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">PostgreSQL</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Bootstrap</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">AWS</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Terraform</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">SCSS</span>{' '}
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Azure DevOps</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">SignalR</span>
          </div>
        </div>
      </div>
      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">2022</p>
            <p className="code ff-press-start">Current Personal Progression</p>
            <p>
              In 2022, I have continued expanding my knowledge of full-stack technology and have become enthralled with
              web development in React and subsequently Next.JS. The transition from imperative development with jQuery
              to declarative development with React was a welcome one. I found that in my professional development, a
              lot of the most valuable functionality was trying to mimic the component structure and state management
              that react provides. I now have begun to develop all personal web applications in react and Next.JS and
              plan to for the foreseeable future.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="px-3 d-flex align-items-center justify-content-center flex-wrap">
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">React</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">TSX</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">NEXT.JS</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">JavaScript</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">TypeScript</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">SCSS</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Bootstrap</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">AWS</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">PostgreSQL</span>
          </div>
        </div>
      </div>
      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">2022</p>
            <p className="code ff-press-start">Senior Software Engineer</p>
            <p>
              In June 2022, after 5 years at Tyler Technologies I have decided to transition to a Senior Software
              Engineer position at Blue Rabbit Veterinary. I am extremely excited about this opportunity, and I look
              forward to building an amazing product that will enable Veterinary clinics and the Pharmacies that support
              them, while expanding my professional tech stack.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="px-3 d-flex align-items-center justify-content-center flex-wrap">
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">React</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Node</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">TypeScript</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Apollo GraphQL</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">TailwindCSS</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">PostgreSQL</span>
          </div>
        </div>
      </div>
      <div className="row about-me-life-moment">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-3">
            <p className="code ff-press-start">2022</p>
            <p className="code ff-press-start">Tech Lead</p>
            <p>
              In October 2022, after 5 months at Blue Rabbit Veterinary I have moved into the role of Tech Lead. It had
              been my goal from the beginning of joining Blue Rabbit to lead the development of our Practice Portal and
              I am very excited to continue on that journey! We have a great team and I can't wait to see what next year
              holds regarding the exciting features and products we can provide veterinarians all over the US.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="px-3 d-flex align-items-center justify-content-center flex-wrap">
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">React</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Node</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">TypeScript</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Apollo GraphQL</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">TailwindCSS</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">PostgreSQL</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">MongoDB</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">Kafka</span>
            <span className="about-me-skill-icon-text p-3 me-3 mb-3">AWS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
