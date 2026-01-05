import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "j1332tlc",   // same as CMS
  dataset: "production",    // same dataset
  apiVersion: "2026-01-01",
  useCdn: true,
});
