const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",

  name: "Angličtina WELSAN",

  url: "https://anglictinawelsan.com",

  logo: "https://anglictinawelsan.com/logo.png",

  email: "infowelsan@gmail.com",

  telephone: "+421948592508",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Trnava",
    addressCountry: "SK",
  },
};

export default organizationSchema;
