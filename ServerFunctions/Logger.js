import { DateTime } from "./DateTime.js";
import { PrettyConsole } from "./prettyConsole.js";
import fs from "fs";
const prettyConsole = new PrettyConsole();
prettyConsole.clear();
prettyConsole.closeByNewLine = true;
prettyConsole.useIcons = true;
const Logger = (
   req,
   message,
   logType
) => {
   if (req != 0) {
      const requester = req.rawHeaders[21]
         ? !req.rawHeaders[21].includes("?")
         : null;
      if (requester != false) {
         var referer =
            req.rawHeaders[21] ||
            "Unknown Referer";
      }
      const forwardedIp = 
         req.rawHeaders[3] || "Unknown IP";
      var logMessage = `🚀 ${message}   ${req.method} ${req.url}    ${referer}    ${DateTime()}    ${forwardedIp}`;
   } else {
      var logMessage = `🚀 ${message} @ ${DateTime()}`;
   }
   prettyConsole.print(
      "white",
      "magenta",
      logMessage
   );
   const logFile =
      logType == "ERROR"
         ? "./log/error.log"
         : "./log/traffic.log";
   fs.appendFile(
      logFile,
      `${logMessage}\r`,
      (err) => {
         if (err) {
            console.error(
               "Error writing to log file:",
               err
            );
         }
      }
   );
};

export { Logger };
