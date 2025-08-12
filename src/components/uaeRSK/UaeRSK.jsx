import React from "react";
import HeroSection from "../reusableComponents/HeroSection";
import SegmentCards from "../reusableComponents/SegmentCards";
import {
  segments,
  continuousServicesUae,
  ignitionServicesUae,
  operationalStepsUae,
  testimonialsUae,
  faqsUae,
  why1RSKUae,
  incidentServicesUae,
  strategicServicesUae,
  businessLifecycleSectionUae,
  differentiatorsFullUae,
  globalReachDataUae,
  insightsArticles,
} from "../../utils/data";
import ServiceCategory from "../reusableComponents/ServiceCategory";
import StepsTimeline from "../reusableComponents/StepsTimeline";
import TestimonialSlider from "../reusableComponents/TestimonialSlider";
import FAQAccordion from "../reusableComponents/FAQAccordion";
import DetailedValueSection from "../reusableComponents/DetailedValueSection";
import IconBulletSection from "../reusableComponents/IconBulletSection";
import GlobalReachSection from "../reusableComponents/GlobalReachSection";
import InsightsGrid from "../reusableComponents/InsightsGrid";
import Footer from "../reusableComponents/Footer";

const UaeRSK = () => {
  return (
    <>
      <HeroSection
        title="1RSK UAE: The Operating System for
Your Business in the Emirates. Scale
Without Limits."
        subtitle="From Startup to Enterprise — regulatory compliance made seamless, proactive, and scalable."
        primaryCta={{ text: "Get Started", href: "#" }}
        secondaryCta={{ text: "Learn More", href: "#" }}
      />
      <SegmentCards segments={segments} />
      <DetailedValueSection {...why1RSKUae} />
      <ServiceCategory
        heading="Ignition Protocols: Foundational Setup & Strategic Market Entry in the
UAE"
        description="From your first company registration to critical licenses for market access, we lay the foundation for compliant, scalable growth."
        services={ignitionServicesUae}
      />

      <ServiceCategory
        heading="Continuous Operation & Maintenance: Sustained Compliance &
Growth Governance in the UAE"
        description="Our proactive compliance engine ensures your business stays audit-ready and governance-strong at all times."
        services={continuousServicesUae}
      />

      <ServiceCategory
        heading="Incident Response & Optimization: Audit Defense & Strategic
Regulatory Engagement in the UAE"
        description="When regulatory challenges arise, we act fast, defend fiercely, and optimize for the future."
        services={incidentServicesUae}
      />

      <ServiceCategory
        heading="Strategic Functionalities: Niche Licenses, Global Certifications &
Emerging Tech Approvals in the UAE"
        description="Expand capabilities, secure trust, and leverage emerging technologies — all within compliant boundaries."
        services={strategicServicesUae}
      />
      <DetailedValueSection {...businessLifecycleSectionUae} />

      <StepsTimeline
        title="The 1RSK Operational Flow"
        subtitle="Seamless. Intelligent. Uncompromising."
        steps={operationalStepsUae}
      />
      <IconBulletSection
        title="The 1RSK OS Differentiators"
        subtitle="Why We're the
Unquestionable Leader in UAE Regulatory
Compliance"
        bullets={differentiatorsFullUae}
      />
      <GlobalReachSection
        title="Global Reach, Local Command"
        subtitle="Your Compliance
Across Continents"
        regions={globalReachDataUae}
      />

      <TestimonialSlider
        title="The Voice of 1RSK Powered Businesses"
        subtitle="Real success stories from founders, executives, and global leaders."
        testimonials={testimonialsUae}
      />
      {/* <InsightsGrid
        title="Insights from the 1RSK Command Center"
        subtitle="Expert perspectives and actionable intelligence on regulatory trends."
        articles={insightsArticles}
      /> */}
      <FAQAccordion
        title="Frequently Asked Questions"
        subtitle="Your strategic inquiries, answered by our compliance experts."
        faqs={faqsUae}
      />
      <Footer />
    </>
  );
};

export default UaeRSK;
