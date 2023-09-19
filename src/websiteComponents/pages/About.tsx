import AboutImage from "../../assets/Images/about.jpg";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-10 col-lg-10 mx-auto mt-3">
          <img
            src={AboutImage}
            alt="about image"
            className="img-fluid mx-auto"
          />
        </div>
        <div className="col-sm-12 col-md-10 col-lg-10 mx-auto mt-5">
          <p>
            In addition to creative web design and e-commerce web site design
            and development, MA web design company Interactive Palette offers an
            extensive roster of services including web hosting, search engine
            optimization, custom applications and maintenance and support for
            clients in a variety of industries including Apparel, Automotive,
            Consulting, Education & Training, Engineering, Environmental,
            Financial Services, Food and Beverage, Healthcare, Home and Garden,
            Hospitality, Insurance, Legal, Manufacturing, Not-for-profit,
            Printing, Professional Services, Real Estate, Restaurant,
            Retail/E-Commerce, Sports, Technology, Travel & Transportation, and
            Utility Companies.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;