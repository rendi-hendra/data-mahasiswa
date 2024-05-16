import { web } from "./app/web";
import { logger } from "./app/logging";

web.listen(8080, () => {
  logger.info("Listening on port 8080");
});
