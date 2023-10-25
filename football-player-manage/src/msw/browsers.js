import { setupWorker } from "msw";
import { playerHandlers} from "./handlers/playerHandler.ts";

const worker = setupWorker(...playerHandlers);

export { worker };