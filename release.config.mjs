import { getSemanticReleaseConfig, initCi } from "@ogs/ci";

export default initCi(
  getSemanticReleaseConfig()
);
