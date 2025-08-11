import React from "react";
import HeroSection from "./components/HeroSection";
import SegmentCards from "./components/SegmentCards";
import {
  segments,
  continuousServices,
  ignitionServices,
  operationalSteps,
  testimonials,
  faqs,
  why1RSK,
  incidentServices,
  strategicServices,
  businessLifecycleSection,
  differentiatorsFull,
  globalReachData,
  insightsArticles,
} from "./utils/data";
import ServiceCategory from "./components/ServiceCategory";
import StepsTimeline from "./components/StepsTimeline";
import TestimonialSlider from "./components/TestimonialSlider";
import FAQAccordion from "./components/FAQAccordion";
import DetailedValueSection from "./components/DetailedValueSection";
import IconBulletSection from "./components/IconBulletSection";
import GlobalReachSection from "./components/GlobalReachSection";
import InsightsGrid from "./components/InsightsGrid";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <HeroSection
        title="1RSK: The System for Every Business. Every Ambition."
        subtitle="From Startup to Enterprise — regulatory compliance made seamless, proactive, and scalable."
        primaryCta={{ text: "Get Started", href: "#" }}
        secondaryCta={{ text: "Learn More", href: "#" }}
      />
      <SegmentCards segments={segments} />
      <DetailedValueSection {...why1RSK} />
      <ServiceCategory
        heading="Ignition Protocols: Foundational Setup & Strategic Market Entry"
        description="From your first company registration to critical licenses for market access, we lay the foundation for compliant, scalable growth."
        services={ignitionServices}
      />

      <ServiceCategory
        heading="Continuous Operation & Maintenance: Sustained Compliance & Growth Governance"
        description="Our proactive compliance engine ensures your business stays audit-ready and governance-strong at all times."
        services={continuousServices}
      />

      <ServiceCategory
        heading="Incident Response & Optimization: Audit Defense & Strategic Regulatory Engagement"
        description="When regulatory challenges arise, we act fast, defend fiercely, and optimize for the future."
        services={incidentServices}
      />

      <ServiceCategory
        heading="Strategic Functionalities: Niche Licenses, Global Certifications & Emerging Tech Approvals"
        description="Expand capabilities, secure trust, and leverage emerging technologies — all within compliant boundaries."
        services={strategicServices}
      />
      <DetailedValueSection {...businessLifecycleSection} />

      <StepsTimeline
        title="The 1RSK Operational Flow"
        subtitle="Seamless. Intelligent. Uncompromising."
        steps={operationalSteps}
      />
      <IconBulletSection
        title="The 1RSK OS Differentiators"
        subtitle="Why we're the unquestionable leader in global regulatory compliance."
        bullets={differentiatorsFull}
      />
      <GlobalReachSection
        title="Global Reach, Local Command"
        subtitle="Precision execution across India and UAE, adapted to every jurisdictional nuance."
        regions={globalReachData}
      />

      <TestimonialSlider
        title="The Voice of 1RSK Powered Businesses"
        subtitle="Real success stories from founders, executives, and global leaders."
        testimonials={testimonials}
      />
      <InsightsGrid
        title="Insights from the 1RSK Command Center"
        subtitle="Expert perspectives and actionable intelligence on regulatory trends."
        articles={insightsArticles}
      />
      <FAQAccordion
        title="Frequently Asked Questions"
        subtitle="Your strategic inquiries, answered by our compliance experts."
        faqs={faqs}
      />
      <Footer />
    </>
  );
};

export default App;
