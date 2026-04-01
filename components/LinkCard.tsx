import { BunnyIcon, ExternalLinkIcon, LeafIcon, WhatsAppIcon } from "@/components/icons";
import type { PublicLinkItem } from "@/lib/link-safety";
import styles from "@/styles/link-card.module.css";

type LinkCardProps = {
  item: PublicLinkItem;
};

function getIcon(icon: PublicLinkItem["icon"]) {
  switch (icon) {
    case "whatsapp":
      return <WhatsAppIcon className={styles.icon} />;
    case "leaf":
      return <LeafIcon className={styles.icon} />;
    case "bunny":
      return <BunnyIcon className={styles.icon} />;
    default:
      return <ExternalLinkIcon className={styles.icon} />;
  }
}

export function LinkCard({ item }: LinkCardProps) {
  return (
    <a
      className={`${styles.card} ${item.featured ? styles.cardFeatured : ""}`}
      href={item.url}
      rel={item.isExternal ? "noopener noreferrer external nofollow" : undefined}
      target="_blank"
    >
      <span className={styles.content}>
        <span className={styles.textBlock}>
          <span className={styles.title}>{item.title}</span>
          {item.subtitle ? <span className={styles.subtitle}>{item.subtitle}</span> : null}
        </span>
        {item.icon ? <span className={styles.iconWrap}>{getIcon(item.icon)}</span> : null}
      </span>
    </a>
  );
}
