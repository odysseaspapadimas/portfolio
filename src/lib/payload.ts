import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

export const payload = await getPayloadHMR({
  config: configPromise,
});
