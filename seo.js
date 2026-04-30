// seo.js — shared schema markup injected per page

function injectSchema(obj) {
  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(obj);
  document.head.appendChild(s);
}

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["MedicalOrganization", "MedicalBusiness"],
  "@id": "https://www.montereybaypsychiatry.com/#organization",
  "name": "Monterey Bay Psychiatry",
  "alternateName": "Monterey Bay Psychiatry PMHNP",
  "url": "https://www.montereybaypsychiatry.com",
  "logo": "https://www.montereybaypsychiatry.com/images/logo.png",
  "telephone": "+18312003758",
  "email": "office@montereybaypsychiatry.com",
  "description": "Monterey Bay Psychiatry is a hybrid telehealth and in-person psychiatric practice serving children, teens, and adults ages 5–85 in Carmel Valley, CA and throughout California. Specializing in ADHD evaluation and treatment, anxiety, depression, trauma, and perinatal mental health.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "126 Clocktower Place, Suite 104",
    "addressLocality": "Carmel Valley",
    "addressRegion": "CA",
    "postalCode": "93923",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Carmel Valley" },
    { "@type": "City", "name": "Monterey" },
    { "@type": "City", "name": "Salinas" },
    { "@type": "City", "name": "Pacific Grove" },
    { "@type": "City", "name": "Carmel" },
    { "@type": "City", "name": "Seaside" },
    { "@type": "State", "name": "California" }
  ],
  "medicalSpecialty": ["Psychiatry", "PediatricCare", "MentalHealth"],
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Psychiatric Evaluation", "description": "Comprehensive initial psychiatric assessment for new patients ages 5–85" },
    { "@type": "MedicalProcedure", "name": "ADHD Evaluation", "description": "Comprehensive ADHD evaluation including clinical interview, validated rating scales, and diagnostic assessment" },
    { "@type": "MedicalProcedure", "name": "Medication Management", "description": "Ongoing psychiatric medication management and follow-up care" },
    { "@type": "MedicalProcedure", "name": "Perinatal Psychiatry", "description": "Psychiatric care for pregnancy and postpartum mood and anxiety disorders" },
    { "@type": "MedicalProcedure", "name": "Child and Adolescent Psychiatry", "description": "Specialized psychiatric care for children and adolescents ages 5–17" }
  ],
  "hasMap": "https://maps.google.com/?q=126+Clocktower+Place+Carmel+Valley+CA",
  "priceRange": "$175–$1,000",
  "paymentAccepted": "Cash, Credit Card",
  "currenciesAccepted": "USD"
};

const PHYSICIAN_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://www.montereybaypsychiatry.com/#physician",
  "name": "Halleh Entekhabi, DNP, PMHNP-PC, CPNP-PC",
  "jobTitle": "Psychiatric-Mental Health Nurse Practitioner",
  "description": "Doctor of Nursing Practice and dual-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP-PC) and Certified Pediatric Nurse Practitioner (CPNP-PC) providing psychiatric care for children, teens, and adults in Carmel Valley, CA and throughout California via telehealth.",
  "medicalSpecialty": ["Psychiatry", "PediatricCare"],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "Board Certification", "name": "PMHNP-PC — Psychiatric-Mental Health Nurse Practitioner, Board Certified" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "Board Certification", "name": "CPNP-PC — Certified Pediatric Nurse Practitioner" }
  ],
  "worksFor": { "@id": "https://www.montereybaypsychiatry.com/#organization" },
  "workLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "126 Clocktower Place, Suite 104",
      "addressLocality": "Carmel Valley",
      "addressRegion": "CA",
      "postalCode": "93923"
    }
  }
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.montereybaypsychiatry.com/#website",
  "url": "https://www.montereybaypsychiatry.com",
  "name": "Monterey Bay Psychiatry",
  "description": "Child, Teen & Adult Psychiatry — Carmel Valley, CA and Telehealth throughout California",
  "publisher": { "@id": "https://www.montereybaypsychiatry.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://www.montereybaypsychiatry.com/blog.html?q={search_term_string}" },
    "query-input": "required name=search_term_string"
  }
};

window.initPageSchema = function(pageSchemas) {
  injectSchema(ORG_SCHEMA);
  injectSchema(PHYSICIAN_SCHEMA);
  injectSchema(WEBSITE_SCHEMA);
  if (pageSchemas) {
    pageSchemas.forEach(s => injectSchema(s));
  }
};
