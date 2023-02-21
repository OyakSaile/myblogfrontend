import { createClient } from "next-sanity"

export const clientConfig = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: !!process.env.NEXT_PUBLIC_SANITY_USE_CDN,
})
