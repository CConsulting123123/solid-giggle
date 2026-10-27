import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

// Information Pages
import InformationSAM from "./routes/information/SAM";
import InformationCertification from "./routes/information/Certification";
import InformationBids from "./routes/information/Bids";
import InformationProposals from "./routes/information/Proposals";
import InformationVehicles from "./routes/information/Vehicles";
import SearchContracts from "./routes/information/SearchContracts";

// Services Pages
import ServicesIndex from "./routes/services/Services";
import ServicesGSA from "./routes/services/GSA";
import ServicesPrograms from "./routes/services/Programs";
import ServicesCertifications from "./routes/services/Certifications";
import ServicesCapture from "./routes/services/CaptureManagement";
import ServicesCompliance from "./routes/services/Compliance";
import ServicesProposalWriting from "./routes/services/ProposalWriting";
import FedStart from "./routes/services/FedStart";
import Growth from "./routes/services/Growth";
import Prime from "./routes/services/Prime";
import ProposalGenerator from "./routes/services/ProposalGenerator";

// About Pages
import About from "./routes/About";
import AboutMethodology from "./routes/about/Methodology";

// Blog & Tools
import Blog from "./routes/Blog";
import BlogPost from "./routes/BlogPost";
import Tools from "./routes/Tools";

// Contact
import Contact from "./routes/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* Information Routes */}
        <Route path="/information" element={<InformationSAM />} />
        <Route path="/information/sam-dsbs-fema" element={<InformationSAM />} />
        <Route path="/information/certification-data" element={<InformationCertification />} />
        <Route path="/information/finding-bids" element={<InformationBids />} />
        <Route path="/information/writing-proposals" element={<InformationProposals />} />
        <Route path="/information/contract-vehicles" element={<InformationVehicles />} />
        <Route path="/information/search-contracts" element={<SearchContracts />} />

        {/* Services Routes */}
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/certifications" element={<ServicesCertifications />} />
        <Route path="/services/gsa-schedules" element={<ServicesGSA />} />
        <Route path="/services/gsa-contractors" element={<ServicesGSA />} />
        <Route path="/services/proposal-writing" element={<ServicesProposalWriting />} />
        <Route path="/services/capture-management" element={<ServicesCapture />} />
        <Route path="/services/compliance-capture" element={<ServicesCompliance />} />
        <Route path="/services/programs" element={<ServicesPrograms />} />
        <Route path="/services/programs/fedstart" element={<FedStart />} />
        <Route path="/services/programs/growth" element={<Growth />} />
        <Route path="/services/programs/prime" element={<Prime />} />
        <Route path="/services/proposal-generator" element={<ProposalGenerator />} />

        {/* Blog & Tools */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/tools" element={<Tools />} />

        {/* About Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/about/methodology" element={<AboutMethodology />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
