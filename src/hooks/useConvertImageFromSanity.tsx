import imageUrlBuilder from "@sanity/image-url";
import { clientConfig } from "../services/sanityClientConfig";

interface imageConverter {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export function useConvertImageFromSanity() {
  const builder = imageUrlBuilder(clientConfig);

  const imageConverter = (source: imageConverter) => {
    return builder.image(source);
  };

  return {
    imageConverter,
  };
}
