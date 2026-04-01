"use client";

import { useEffect } from "react";
import type { PublicLinkItem } from "@/lib/link-safety";
import { devLog } from "@/lib/logger";
import styles from "@/styles/link-list.module.css";
import { LinkCard } from "./LinkCard";

type LinkListProps = {
  items: PublicLinkItem[];
};

export function LinkList({ items }: LinkListProps) {
  useEffect(() => {
    devLog("links.render", {
      count: items.length,
      ids: items.map((item) => item.id),
    });
  }, [items]);

  return (
    <section aria-label="Links principais" className={styles.list}>
      {items.map((item) => (
        <LinkCard key={item.id} item={item} />
      ))}
    </section>
  );
}
