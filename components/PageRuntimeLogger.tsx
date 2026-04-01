"use client";

import { useEffect } from "react";
import { devLog, devWarn } from "@/lib/logger";

type PageRuntimeLoggerProps = {
  pageId: string;
  linkCount: number;
  dataErrors: string[];
};

export function PageRuntimeLogger({
  pageId,
  linkCount,
  dataErrors,
}: PageRuntimeLoggerProps) {
  useEffect(() => {
    devLog("page.load", { pageId, linkCount });

    if (dataErrors.length > 0) {
      devWarn("page.data_warnings", { pageId, dataErrors });
    }
  }, [dataErrors, linkCount, pageId]);

  return null;
}
