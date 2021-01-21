import { serverInstance } from "bdsx/";
import { wrappedFunc } from "./exe_exports";

export function setMotd(motd: string) {
    wrappedFunc["ServerNetworkHandler::allowIncomingConnections"](serverInstance.minecraft.something.shandler, motd, true);
}