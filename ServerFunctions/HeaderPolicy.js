const HeaderPolicy = () => ({
  "Cache-Control": "public, max-age=3600",
  "X-Content-Type-Options": "nosniff",
  "X-Powered-By": "Sasser Development LLC",
  "X-Frame-Options": "SAMEORIGIN",
  "X-XSS-Protection": "1; mode=block",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Referrer-Policy": "no-referrer-when-downgrade",
 "Content-Security-Policy": "default-src 'self'; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; frame-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; manifest-src 'self'; worker-src 'self'; upgrade-insecure-requests; block-all-mixed-content; report-uri /csp-report-endpoint/; script-src 'self' https://cdn.jsdelivr.net https://unpkg.com;",
  "Expect-CT": "max-age=86400, enforce, report-uri='https://citypackz.com/csp-report-endpoint/'",
  "Report-To": "{ \"group\": \"csp-endpoint\", \"max_age\": 10886400, \"endpoints\": [{ \"url\": \"https://citypackz.com/csp-report-endpoint/\" }] }",
  "NEL": "{ \"report_to\": \"csp-endpoint\", \"max_age\": 10886400, \"include_subdomains\": true }",
});

export {HeaderPolicy};

