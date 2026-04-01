import { BrandHeader } from "@/components/BrandHeader";
import { LinkList } from "@/components/LinkList";
import { PageRuntimeLogger } from "@/components/PageRuntimeLogger";
import { linkPageData } from "@/data/link-page";
import { buildPublicLinkItems } from "@/lib/link-safety";
import { devError, devWarn } from "@/lib/logger";
import styles from "@/styles/page.module.css";

export default function HomePage() {
  const { profile, links } = linkPageData;
  const sanitizedLinks = buildPublicLinkItems(links);

  if (sanitizedLinks.errors.length > 0) {
    devError("link-data.invalid", {
      issues: sanitizedLinks.errors,
    });
  }

  if (sanitizedLinks.items.length === 0) {
    devWarn("link-data.empty", {
      reason: "No valid links available after sanitization.",
    });
  }

  return (
    <main className={styles.page}>
      <PageRuntimeLogger
        pageId="home"
        linkCount={sanitizedLinks.items.length}
        dataErrors={sanitizedLinks.errors}
      />
      <div className={styles.shell}>
        <BrandHeader
          logoSrc={profile.logoSrc}
          brandName={profile.brandName}
          brandAccent={profile.brandAccent}
          description={profile.description}
        />
        <LinkList items={sanitizedLinks.items} />
      </div>
    </main>
  );
}
