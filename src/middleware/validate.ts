import type { MiddlewareHandler } from "astro";
import { defineMiddleware } from "astro/middleware";
import { PrettyConsole } from "../../ServerFunctions/prettyConsole.js";
const prettyConsole = new PrettyConsole();
prettyConsole.clear();
prettyConsole.closeByNewLine = true;
prettyConsole.useIcons = true;
export const validate: MiddlewareHandler =
   defineMiddleware((context, next) => {
      prettyConsole.print(
         "white",
         "magenta",
         `🚀 Validation Middleware`
      );
      return next();
   });
