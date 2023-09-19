import civilImage from "../../assets/Images/civilService image.jpg";
import electricalImage from "../../assets/Images/electrical Service image.jpg";
import architecturalImage from "../../assets/Images/architectural service image.png";
import technicalImage from "../../assets/Images/technical service image.jpg";
import { Box, Image } from "@chakra-ui/react";
import { ServicePageSlider } from "../pageSliders/ServicesSlider";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <>
      <ServicePageSlider />
      <div className="container">
        <Box textAlign="center">
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </Box>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
            <Image
              src={civilImage}
              alt="civil image"
              className="img-fluid mx-auto"
              boxSize="80%"
            />
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
            <p>
              Show all Civil Engineering Services Providers Civil
              engineeringCivil engineering services design and build public and
              private-sector structures such as bridges, roads, dams, and
              highways. They can also provide engineering support for city
              planning and structural design activities. Most civil engineering
              services are staffed by professional engineers with graduate or
              postgraduate degrees in civil engineering.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
            <Image
              src={electricalImage}
              alt="electrical image"
              className="img-fluid mx-auto"
              boxSize="80%"
            />
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
            <p>
              What is the service of electrical engineer? Electrical engineers
              typically do the following: Design new ways to use electrical
              power to develop or improve products. Perform detailed
              calculations to develop manufacturing, construction, and
              installation standards and specifications.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
            <Image
              src={architecturalImage}
              alt="architectural image"
              className="img-fluid mx-auto"
              boxSize="80%"
            />
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
            <p>
              Architectural and engineering services or "professional services"
              means professional services rendered by any person, other than as
              an employee of the agency, contracting to perform activities
              within the scope of the general definition of professional
              practice in chapters 18.08, 18.43, or 18.96 RCW.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
            <Image
              src={technicalImage}
              alt="architectural image"
              className="img-fluid mx-auto"
              boxSize="80%"
            />
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
            <p>
              AKB company providing the Engineering, Construction and
              Commissioning, Consultant, Operation & Maintenance (O&M) Service
              and Supply Spare parts for power plants focusing mainly on the
              Independent Power Producer (IPP), Small Power Producer (SPP) and
              Very Small Power Producer (VSPP, Biomass, PV) markets in Thailand
              and Asia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
