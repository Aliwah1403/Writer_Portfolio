import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "4bs723xy",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
