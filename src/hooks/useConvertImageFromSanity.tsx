import imageUrlBuilder from "@sanity/image-url"
import { clientConfig } from "../services/sanityClientConfig"

interface imageConverter {
  source: string
}

export function useConvertImageFromSanity() {
  const builder = imageUrlBuilder(clientConfig)

  function urlFor(source: string) {
    return builder.image(source).format("webp").url()
  }

  return {
    urlFor,
  }
}
