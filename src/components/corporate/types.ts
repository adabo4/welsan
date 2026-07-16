export type CorporatePackage = {
  name: string;
  star: string;
  employee: string;
  classes: string;
  time: string;
  price: string;
  description: string;
  featured?: boolean;
};

export type CorporatePackagesProps = {
  title: string;
  packages: CorporatePackage[];
};

export type CorporateHeaderProps = {
  label: string;
  title: string;
  titleAccent: string;
  sub: string;
  body: string;
};

export type CorporateBenefitsProps = {
  checklist: string[];
  includesTitle: string;
  includes: string[];
};

export type CorporateCtaProps = {
  title: string;
  body: string;
  buttonText: string;
};
