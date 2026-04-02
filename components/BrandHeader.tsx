"use client";

import Image from "next/image";
import { useState } from "react";
import { devError } from "@/lib/logger";
import styles from "@/styles/brand-header.module.css";

type BrandHeaderProps = {
  logoSrc: string;
  brandName: string;
  brandAccent: string;
  description?: string;
};

export function BrandHeader({
  logoSrc,
  brandName,
  brandAccent,
  description,
}: BrandHeaderProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <header className={styles.header}>
      {!imageFailed ? (
        <Image
          alt={`${brandName} logo`}
          className={styles.logo}
          height={188}
          priority
          src={logoSrc}
          width={188}
          onError={() => {
            setImageFailed(true);
            devError("asset.logo.load_failed", { logoSrc });
          }}
        />
      ) : (
        <div aria-hidden="true" className={styles.logoFallback}>
          KB
        </div>
      )}

      <div className={styles.wordmark}>
        <h1 className={styles.title}>
          <span className={styles.titlePrimary}>{brandName}</span>
          <span className={styles.titleSpacer} aria-hidden="true" />
          <span className={styles.titleAccent}>{brandAccent}</span>
        </h1>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
    </header>
  );
}
