const isDevelopment = process.env.NODE_ENV !== "production";

type LogPayload = Record<string, unknown>;

function writeLog(level: "log" | "warn" | "error", event: string, payload?: LogPayload) {
  if (!isDevelopment) {
    return;
  }

  console[level](`[dev:${event}]`, payload ?? {});
}

export function devLog(event: string, payload?: LogPayload) {
  writeLog("log", event, payload);
}

export function devWarn(event: string, payload?: LogPayload) {
  writeLog("warn", event, payload);
}

export function devError(event: string, payload?: LogPayload) {
  writeLog("error", event, payload);
}
