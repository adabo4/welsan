export type CorporatePackage = {
  name: string;
  star: string;
  who: string;
  type: string;
  duration: string;
  price: string;
  note: string;
  highlight?: boolean;
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

export type CorporatePackagesProps = {
  title: string;
  packages: CorporatePackage[];
};

export type CorporateCtaProps = {
  title: string;
  body: string;
  buttonText: string;
};
