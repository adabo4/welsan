import styles from "./corporate.module.css";
import CorporatePackageCard from "./CorporatePackageCard";
import type { CorporatePackagesProps } from "./types";

export default function CorporatePackages({
  title,
  packages,
}: CorporatePackagesProps) {
  return (
    <div className={styles.packagesSection}>
      <h3 className={styles.packagesTitle}>{title}</h3>

      <div className={styles.packagesGrid}>
        {packages.map((packageItem) => (
          <CorporatePackageCard key={packageItem.name} {...packageItem} />
        ))}
      </div>
    </div>
  );
}
