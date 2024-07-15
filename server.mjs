import express from "express";
import session from "express-session";
//import MongoStore from 'connect-mongo';
session;
import { handler as ssrHandler } from "./dist/server/entry.mjs";
import "dotenv/config";
import { HeaderPolicy } from ".//ServerFunctions/HeaderPolicy.js";
import { DateTime } from "./ServerFunctions/DateTime.js";
import { ExpressStarted } from "./ServerFunctions/ExpressStarted.js";
import { Logger } from "./ServerFunctions/Logger.js";
const port = process.env.PORT;
const app = express();
const getCurrentDateTime = DateTime();
ExpressStarted(getCurrentDateTime, port);
app.use(
   session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      touchAfter: 24 * 3600,
      cookie: {
         sameSite: "strict",
         secure: "auto",

      },
   })
);
const base = "/";
app.use(base, express.static("dist/client/"));
app.use((req, res, next) => {
   const headers = HeaderPolicy();
   Object.entries(headers).forEach(
      ([key, value]) => {
         res.setHeader(key, value);
      }
   );
   Logger(
      req,
      "REQUEST",
      "TRAFFIC"
   );
   next();
});
app.use((req, res, next) => {
   req.session.currentTime = getCurrentDateTime;
   const locals = {
      title: process.env.SITENAME,
      tagline: process.env.TAGLINE,
      sessionStore: req.session,
   };
   ssrHandler(req, res, next, locals);
});


app.get('/:page', (req, res, next) => {
   console.log(res.locals.sessionStore)
 
   if (req.params.page === 'logout' || req.params.page === 'favicon.ico') {
     next()
   } else if (req.params.page === '404') {
     if (req.headers.referer != undefined && req.headers.referer.includes(req.headers.host)) {
       res.send(`
         <div id="error" style="width:100%;font-size:32px;font-weight:700;text-align:center;border:solid black;border-left:1px;border-right:1px;">
           <h1>404 <br /> Page not found</h1>
         </div> 
         `)
     } else {
       res.redirect('/')
     }
   } else if (req.params.page === 'logIn' && req.session.user != undefined) {
     res.redirect('/');
   } else {
     res.redirect('/?page=' + req.params.page)
   }
 });
app.listen(port);
