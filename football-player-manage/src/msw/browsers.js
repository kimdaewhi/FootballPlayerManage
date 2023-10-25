import { setupWorker } from "msw";
import { handlers} from "./handlers/handler.ts";

const worker = setupWorker(...handlers);

export { worker };