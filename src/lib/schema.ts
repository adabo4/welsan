const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",

  name: "Angličtina WELSAN",

  url: "https://anglictinawelsan.sk",

  logo: "https://anglictinawelsan.sk/logo.png",

  email: "infowelsan@gmail.com",

  telephone: "+421948592508",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Trnava",
    addressCountry: "SK",
  },
};

export default organizationSchema;
