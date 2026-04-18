"use client";
import { useState } from "react";
import styles from "@/styles/faq-section.module.css";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section aria-label="Perguntas frequentes" className={styles.section}>
      <h2 className={styles.heading}>Perguntas frequentes</h2>
      <ul className={styles.list}>
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <li key={item.id} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
              <button
                aria-expanded={isOpen}
                className={styles.question}
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span aria-hidden="true" className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>›</span>
              </button>
              {isOpen && (
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

