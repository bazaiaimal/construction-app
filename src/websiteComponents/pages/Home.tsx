import {
  Box,
  Heading,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Image,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { HomePageSlider } from "../pageSliders/HomePageSlider";
import HireForServices from "../hireForServices/HireForService";
import hireCivil from "../../assets/Images/civil profile.jpg";
import hireElectrical from "../../assets/Images/electrical profile.jpg";
import hireTechnical from "../../assets/Images/technical profile.jpg";
import hireArchitectural from "../../assets/Images/architectural profile.jpg";

interface Props {
  id: number;
  type: string;
  description: string;
  // proImages: HireForServicesProps;
}

const HomePage = ({}: Props) => {
  const civilServices = [
    {
      id: 1,
      type: "Affordable Prices",
      description:
        "We offer services at an affordable price, helping you save a lot of designing, drafting, and turnaround costs.",
    },
    {
      id: 2,
      type: "100% Information Security",
      description:
        "We are accredited with ISO / IEC 27001: 2013 certification. This shows our commitment towards protecting the business data from unexpected downtime, malicious activities, or unwanted intrusions.",
    },
    {
      id: 3,
      type: "Modern Infrastructure",
      description:
        "Our team uses quad-core processors and uses cloud storage and high-security data protection solutions, which is rated as among the industry's best infrastructure.",
    },
  ];

  const electricalServices = [
    {
      id: 1,
      type: "PCB Design and Layout Services",
      description:
        "We offer design and layout services for clients looking for assistance with their printed circuit boards. Our PCB design layouts are undertaken by engineers who have all the necessary certifications and experience. Schematic capture, PCB Design, PCB Layout, Component Footprint, and Capture Prototype Procurement are some of the PCB Solutions we offer.",
    },
    {
      id: 2,
      type: "Electrical Design and Layout Services",
      description:
        "When planning your electrical layout, it's important to confirm accurateness, otherwise, the foundation will be faulty and there will be several problems in the future. If you outsource electrical design services to us, you can leverage the expertise of our experienced team to meet your needs and receive the right output. Our electrical design and layout services accommodate low, medium, and high voltage services.",
    },
    {
      id: 3,
      type: "Energy Modeling Services",
      description:
        "Our advanced energy modeling capabilities allow clients to achieve commercial and technical differentiation. Our specialized modeling services are provided by leveraging some of the best building modeling software in the market. We can work on design projects that accommodate and complement energy efficiency features and sustainable designs. We also comply with various standards like ASHRAE and LEED.",
    },
    {
      id: 4,
      type: "Electrical Instrumentation Services",
      description:
        "Our industrial instrumentation services / electrical instrumentation services undergo rigorous quality and load checks and are acclaimed for their precision and accuracy. Outsourcing electrical instrumentation services may seem a daunting task for several organizations, but a fresh third-party perspective of your requirements/problems might just make things much easier.",
    },
  ];

  const architecturalServices = [
    {
      id: 1,
      type: "Domestic Regulatory Environment",
      description:
        "In the United States, the architecture and engineering services industries offer certifications that are regulated at the state level, while the various certifications available for construction professionals (e.g. construction management, green building, safety certifications, etc.) are typically at regulated at the national level. For architects and professional engineers, certifications typically require at least a 4-year college degree and 3 to 4 years under the guidance of certified professionals, as well as passing an initial registration examination and continuing educational requirements.  ",
    },
    {
      id: 2,
      type: "International Environment",
      description:
        "Similar to other professional services sectors, the barriers facing AEC service providers in foreign markets are typically regulatory in nature. In many instances, foreign countries have professional licensing/certification requirements for AEC professionals working on projects in the foreign market, which may require at least one professional (e.g. architect, professional engineer, or construction professional) to be certified in that country. In order to address this requirement, U.S. firms choose to hire/contract with a local professional, but if this is not an option, other arrangements might be made on a case-by-case basis. Reciprocity at the national level is often difficult if not impossible, particularly as U.S. architecture and engineering certification organizations operate at the state level. ",
    },
  ];

  const techniciansServices = [
    {
      id: 1,
      type: "Electronics Engineering Technician",
      description:
        "Electronics engineering technicians assist electrical and electronics engineers in designing and developing electronic equipment, including computers, communication equipment, monitoring devices, and navigational equipment.An electronics technician will often find work in manufacturing settings, research laboratories, engineering services, or the federal government. According to the BLS, electronics engineering technicians enjoy an annual median salary of $65,260. ",
    },
    {
      id: 2,
      type: "CAD Technician",
      description:
        "CAD technicians use computer-aided software to convert designers produced by engineers and architects into technical drawings. These individuals may work across a variety of industries, including architecture, construction, manufacturing, and animation. Cad technicians may also be expected to input design specifications into CAD software, make adjustments to existing CAD models, and complete job reports. According to the BLS, CAD technicians enjoy a median salary of $56,830 per year.",
    },
  ];

  const profileImages = [
    {
      id: 1,
      Image: hireCivil,
      title: "Shah Faisal",
      description:
        "Most civil engineers work full time, and some work more than 40 hours per week. Engineers who direct projects sometimes work extra hours to ensure that designs meet requirements and that projects are on track to meet deadlines.",
    },
    {
      id: 2,
      Image: hireElectrical,
      title: "Aleena Nazir",
      description:
        "Electrical engineers design, develop, test and manage the manufacturing of electrical equipment, from electric motors and navigation systems to power generation equipment and the electrical components of vehicles and personal devices.",
    },
    {
      id: 3,
      Image: hireTechnical,
      title: "Shanza Hayat",
      description:
        "A technical engineer assists an engineer in maintaining equipment and systems in perfect condition and overseeing the quality of a company's products and services. Technical engineers work in many industries and perform duties related to civil, mechanical, electronic and telecommunication engineering.",
    },
    {
      id: 4,
      Image: hireArchitectural,
      title: "Aimal Khan Bazai",
      description:
        "Architectural engineers apply practical and theoretical knowledge to the engineering design of buildings and building systems. The goal is to engineer high-performance buildings that are sustainable, resilient, economically viable, that ensure the safety, health, comfort, and productivity of occupants.",
    },
  ];

  const [selectedService, setSelectedService] = useState<Props>();
  const [selectedElectricalService, setSelectedElectricalService] =
    useState<Props>();
  const [selectArchitectureService, setSelectArchitectureService] =
    useState<Props>();
  const [selectTechnicalService, setSelectTechnicalService] = useState<Props>();

  const onSelectCivil = (event: any, service: Props) => {
    const filterdCivil = civilServices.find((item) => item.id === service.id);
    setSelectedService(filterdCivil);
  };

  const onSelectElectrical = (event: any, service: Props) => {
    const filterdElectrical = electricalServices.find(
      (item) => item.id === service.id
    );
    setSelectedElectricalService(filterdElectrical);
  };

  const onSelectArchitectural = (event: any, service: Props) => {
    const filtredArchitectural = architecturalServices.find(
      (item) => item.id === service.id
    );
    setSelectArchitectureService(filtredArchitectural);
  };

  const onSelectTechnical = (event: any, service: Props) => {
    const filtredTechnical = techniciansServices.find(
      (item) => item.id === service.id
    );
    setSelectTechnicalService(filtredTechnical);
  };

  return (
    <>
      <HomePageSlider />
      <Box
        minHeight="30vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        my="5"
        padding={8}
      >
        <Heading as="h1" size="2xl" mb="4" color="gold">
          Welcome to Our Construction Company
        </Heading>
        <Text fontSize="xl" mb="8">
          We build your dreams into reality.
        </Text>
        <Container maxW="container.lg">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 mb-4">
              <Menu>
                <MenuButton
                  bg="#161F30"
                  color="white"
                  size="lg"
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Civil Engineering Service: <br /> {selectedService?.type}
                </MenuButton>
                <MenuList bg="gray">
                  {civilServices.map((service) => (
                    <MenuItem
                      onClick={(e) => onSelectCivil(e, service)}
                      key={service.id}
                    >
                      {service.type}
                    </MenuItem>
                  ))}
                </MenuList>
                <Text padding={3} textAlign="justify">
                  {selectedService
                    ? selectedService.description
                    : civilServices.length > 0
                    ? civilServices[0].description
                    : "No Civil Services Available"}
                </Text>
              </Menu>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 mb-4">
              <Menu>
                <MenuButton
                  bg="#161F30"
                  color="white"
                  size="lg"
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Electrical Engineering Services: <br />
                  {selectedElectricalService?.type}
                </MenuButton>
                <MenuList bg="gray">
                  {electricalServices.map((service) => (
                    <MenuItem
                      onClick={(e) => onSelectElectrical(e, service)}
                      key={service.id}
                    >
                      {service.type}
                    </MenuItem>
                  ))}
                </MenuList>
                <Text padding={3} textAlign="justify">
                  {selectedElectricalService
                    ? selectedElectricalService.description
                    : electricalServices.length > 0
                    ? electricalServices[0].description
                    : "No Electrical Services Available."}
                </Text>
              </Menu>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 mb-4">
              <Menu>
                <MenuButton
                  bg="#161F30"
                  color="white"
                  size="lg"
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Architectural Service: <br />{" "}
                  {selectArchitectureService?.type}
                </MenuButton>
                <MenuList bg="gray">
                  {architecturalServices.map((service) => (
                    <MenuItem
                      onClick={(e) => onSelectArchitectural(e, service)}
                      key={service.id}
                    >
                      {service.type}
                    </MenuItem>
                  ))}
                </MenuList>
                <Text padding={3} textAlign="justify">
                  {selectArchitectureService
                    ? selectArchitectureService.description
                    : architecturalServices.length > 0
                    ? architecturalServices[0].description
                    : "No Architectural Services Available"}
                </Text>
              </Menu>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 mb-4">
              <Menu>
                <MenuButton
                  bg="#161F30"
                  color="white"
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Technical Engineering Services: <br />{" "}
                  {selectTechnicalService?.type}
                </MenuButton>
                <MenuList bg="gray">
                  {techniciansServices.map((service) => (
                    <MenuItem
                      onClick={(e) => onSelectTechnical(e, service)}
                      key={service.id}
                    >
                      {service.type}
                    </MenuItem>
                  ))}
                </MenuList>
                <Text padding={3} textAlign="justify">
                  {selectTechnicalService
                    ? selectTechnicalService.description
                    : techniciansServices.length > 0
                    ? techniciansServices[0].description
                    : "No Technical Services Available"}
                </Text>
              </Menu>
            </div>
          </div>
        </Container>
        <HStack>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            padding="10px"
          >
            {profileImages.map((profile) => (
              <HireForServices
                imageUrl={profile.Image}
                title={profile.title}
                description={profile.description}
              />
            ))}
          </SimpleGrid>
        </HStack>
      </Box>
    </>
  );
};

export default HomePage;
