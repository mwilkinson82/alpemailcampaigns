export function getEnv(name: string) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : undefined;
}

export function requireEnv(name: string) {
  const value = getEnv(name);
  if (!value) {
    throw new Error(`${name} is not configured`);
  }
  return value;
}

export function getSiteUrl() {
  return getEnv("NEXT_PUBLIC_SITE_URL") ?? "http://localhost:3000";
}

