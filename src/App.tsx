import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollToTop from "./components/ui/ScrollToTop";
import RouteTransition from "./components/ui/RouteTransition";
import FloatingMenu from "./components/ui/FloatingMenu";

// Lazy load all pages
const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const WorkPage = lazy(() => import("./pages/Work/WorkPage"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));

// Lazy load all project pages
const AkamaiProject = lazy(() => import("./pages/Projects/Akamai/Akamai"));
const BooketProject = lazy(() => import("./pages/Projects/Booket/Booket"));
const BSFProject = lazy(() => import("./pages/Projects/BSF/BSF"));
const CanaraProject = lazy(() => import("./pages/Projects/Canara/Canara"));
const DecathlonProject = lazy(
  () => import("./pages/Projects/Decathlon/Decathlon")
);
const DhoolProject = lazy(() => import("./pages/Projects/Dhool/Dhool"));
const DilsenamanProject = lazy(
  () => import("./pages/Projects/Dilsenaman/Dilsenaman")
);
const DocmydocProject = lazy(
  () => import("./pages/Projects/DocMyDoc/Docmydoc")
);
const DRLReportProject = lazy(
  () => import("./pages/Projects/DRLReport/DRLReport")
);
const FMRProject = lazy(() => import("./pages/Projects/FMR/FMR"));
const GenesProject = lazy(() => import("./pages/Projects/Genes/Genes"));
const KachumbarProject = lazy(
  () => import("./pages/Projects/Kachumbar/Kachumbar")
);
const KarnatakaProject = lazy(
  () => import("./pages/Projects/Karnataka/Karnataka")
);
const KdemProject = lazy(() => import("./pages/Projects/Kdem/Kdem"));
const KheemasutraProject = lazy(
  () => import("./pages/Projects/Kheemasutra/Kheemasutra")
);
const KosiProject = lazy(() => import("./pages/Projects/Kosi/Kosi"));
const KyooriusProject = lazy(
  () => import("./pages/Projects/Kyoorius/Kyoorius")
);
const LamProject = lazy(() => import("./pages/Projects/Lam/Lam"));
const LendersmarkProject = lazy(
  () => import("./pages/Projects/LendersMark/Lendersmark")
);
const LevisProject = lazy(() => import("./pages/Projects/Levis/Levis"));
const LevisxappealProject = lazy(
  () => import("./pages/Projects/Levisxappeal/Levisxappeal")
);
const MTRProject = lazy(() => import("./pages/Projects/MTR/MTR"));
const MunchatantraProject = lazy(
  () => import("./pages/Projects/Munchatantra/Munchatantra")
);
const NandoosProject = lazy(() => import("./pages/Projects/Nandoos/Nandoos"));
const NauvataProject = lazy(() => import("./pages/Projects/Nauvata/Nauvata"));
const PepsicoProject = lazy(() => import("./pages/Projects/Pepsico/Pepsico"));
const PepsicoKosiProject = lazy(
  () => import("./pages/Projects/PepsicoKosi/PepsicoKosi")
);
const PractoProject = lazy(() => import("./pages/Projects/Practo/Practo"));
const Project1Project = lazy(
  () => import("./pages/Projects/Project1/Project1")
);
const Project5Project = lazy(
  () => import("./pages/Projects/Project5/Project5")
);
const Project6Project = lazy(
  () => import("./pages/Projects/Project6/Project6")
);
const Project7Project = lazy(
  () => import("./pages/Projects/Project7/Project7")
);
const Project9Project = lazy(
  () => import("./pages/Projects/Project9/Project9")
);
const Project10Project = lazy(
  () => import("./pages/Projects/Project10/Project10")
);
const Project11Project = lazy(
  () => import("./pages/Projects/Project11/Project11")
);
const Project12Project = lazy(
  () => import("./pages/Projects/Project12/Project12")
);
const Project15Project = lazy(
  () => import("./pages/Projects/Project15/Project15")
);
const Project16Project = lazy(
  () => import("./pages/Projects/Project16/Project16")
);
const Project17Project = lazy(
  () => import("./pages/Projects/Project17/Project17")
);
const QuakerProject = lazy(() => import("./pages/Projects/Quaker/Quaker"));
const RevolutionariProject = lazy(
  () => import("./pages/Projects/Revolutionari/Revolutionari")
);
const RevolutionariAwardsProject = lazy(
  () => import("./pages/Projects/RevolutionariAwards/RevolutionariAwards")
);
const SAPProject = lazy(() => import("./pages/Projects/SAP/SAP"));
const SAPGCAProject = lazy(() => import("./pages/Projects/SAPGCA/SAPGCA"));
const SeafundProject = lazy(() => import("./pages/Projects/Seafund/Seafund"));
const ShoppersStopProject = lazy(
  () => import("./pages/Projects/ShoppersStop/ShopperStop")
);
const SKFProject = lazy(() => import("./pages/Projects/SKF/SKF"));
const SNProject = lazy(() => import("./pages/Projects/SN/SN"));
const SwiggyProject = lazy(() => import("./pages/Projects/Swiggy/Swiggy"));
const TerraliteProject = lazy(
  () => import("./pages/Projects/Terralite/Terralite")
);
const VBLProject = lazy(() => import("./pages/Projects/VBL/VBL"));
const VeevilleExperiencesProject = lazy(
  () => import("./pages/Projects/VeevilleExperiences/VeevilleExperience")
);
const VMwareProject = lazy(() => import("./pages/Projects/VMware/VMware"));

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <FloatingMenu />
      <RouteTransition>
        <Suspense>
          <Routes location={location}>
            <Route path="/" element={<Welcome />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Project Routes */}
            <Route path="/projects/akamai" element={<AkamaiProject />} />
            <Route path="/projects/booket" element={<BooketProject />} />
            <Route path="/projects/bsf" element={<BSFProject />} />
            <Route path="/projects/canara" element={<CanaraProject />} />
            <Route path="/projects/decathlon" element={<DecathlonProject />} />
            <Route path="/projects/dhool" element={<DhoolProject />} />
            <Route
              path="/projects/dilsenaman"
              element={<DilsenamanProject />}
            />
            <Route path="/projects/docmydoc" element={<DocmydocProject />} />
            <Route path="/projects/drlreport" element={<DRLReportProject />} />
            <Route path="/projects/fmr" element={<FMRProject />} />
            <Route path="/projects/genes" element={<GenesProject />} />
            <Route path="/projects/kachumbar" element={<KachumbarProject />} />
            <Route path="/projects/karnataka" element={<KarnatakaProject />} />
            <Route path="/projects/kdem" element={<KdemProject />} />
            <Route
              path="/projects/kheemasutra"
              element={<KheemasutraProject />}
            />
            <Route path="/projects/kosi" element={<KosiProject />} />
            <Route path="/projects/kyoorius" element={<KyooriusProject />} />
            <Route path="/projects/lam" element={<LamProject />} />
            <Route
              path="/projects/lendersmark"
              element={<LendersmarkProject />}
            />
            <Route path="/projects/levis" element={<LevisProject />} />
            <Route
              path="/projects/levisxappeal"
              element={<LevisxappealProject />}
            />
            <Route path="/projects/mtr" element={<MTRProject />} />
            <Route
              path="/projects/munchatantra"
              element={<MunchatantraProject />}
            />
            <Route path="/projects/nandoos" element={<NandoosProject />} />
            <Route path="/projects/nauvata" element={<NauvataProject />} />
            <Route path="/projects/pepsico" element={<PepsicoProject />} />
            <Route
              path="/projects/pepsico-kosi"
              element={<PepsicoKosiProject />}
            />
            <Route path="/projects/practo" element={<PractoProject />} />
            <Route path="/projects/project1" element={<Project1Project />} />
            <Route path="/projects/project5" element={<Project5Project />} />
            <Route path="/projects/project6" element={<Project6Project />} />
            <Route path="/projects/project7" element={<Project7Project />} />
            <Route path="/projects/project9" element={<Project9Project />} />
            <Route path="/projects/project10" element={<Project10Project />} />
            <Route path="/projects/project11" element={<Project11Project />} />
            <Route path="/projects/project12" element={<Project12Project />} />
            <Route path="/projects/project15" element={<Project15Project />} />
            <Route path="/projects/project16" element={<Project16Project />} />
            <Route path="/projects/project17" element={<Project17Project />} />
            <Route path="/projects/quaker" element={<QuakerProject />} />
            <Route
              path="/projects/revolutionari"
              element={<RevolutionariProject />}
            />
            <Route
              path="/projects/revolutionari-awards"
              element={<RevolutionariAwardsProject />}
            />
            <Route path="/projects/sap" element={<SAPProject />} />
            <Route path="/projects/sapgca" element={<SAPGCAProject />} />
            <Route path="/projects/seafund" element={<SeafundProject />} />
            <Route
              path="/projects/shoppers-stop"
              element={<ShoppersStopProject />}
            />
            <Route path="/projects/skf" element={<SKFProject />} />
            <Route path="/projects/sn" element={<SNProject />} />
            <Route path="/projects/swiggy" element={<SwiggyProject />} />
            <Route path="/projects/terralite" element={<TerraliteProject />} />
            <Route path="/projects/vbl" element={<VBLProject />} />
            <Route
              path="/projects/veeville-experiences"
              element={<VeevilleExperiencesProject />}
            />
            <Route path="/projects/vmware" element={<VMwareProject />} />
          </Routes>
        </Suspense>
      </RouteTransition>
    </>
  );
}
