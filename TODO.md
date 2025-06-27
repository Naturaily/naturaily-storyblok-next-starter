# Project TODO List

- [x] Fix ESLint workspace and test it by importing an unused import.
- [x] Fix the tailwind-prettier-plugin.
- [x] Fix missing Tailwind CSS styles.
- [x] Bump Tailwind CSS to the latest version.
- [x] Remove tailwind.config.js and fix Tailwind CSS Intellisense.
- [x] Check Storyblok redirects.
- [x] Remove all unnecessary index.ts files.
- [x] Fix T3.env TS process.
- [x] Dynamic imports for all conditional renders (Only `SBImage` and `SBTable` have conditionals, and it doesn't seem necessary to use next/dynamic there).
- [x] Remove all unused packages from each package.json.
- [x] Check the sitemap and robots file.
- [x] Update shadcn/ui components for Tailwind V4.
- [x] Test live preview in Storyblok.
- [x] Update Storyblok related packages.
- [x] nanoid out -> radash in
- [x] Add conditional prose rendering to richtext.
- [ ] Test revalidateHandler - locally
- [ ] Add form-builder from capitalise (copy package) - cgabge x-www-form to json and out pardot form
- [ ] Fix the bundle analyzer in next.config.ts.
- [ ] Bump docs and Storyblok + index.ts from Storybook.
- [ ] Bump all packages.
- [ ] Update docs.

<!-- TypeError: controller[kState].transformAlgorithm is not a function] -->
 <!-- [Error: {"message":"This record could not be found","status":404,"response":{"data":["This record could not be found"],"headers":{"cache-control":"no-cache","connection":"keep-alive","content-length":"34","content-type":"application/json; charset=utf-8","date":"Fri, 27 Jun 2025 10:34:12 GMT","referrer-policy":"strict-origin-when-cross-origin","sb-be-version":"5.1.2","server":"nginx/1.25.4","vary":"Origin","via":"1.1 4f9674ecfa7356676414cbab65f49e64.cloudfront.net (CloudFront)","x-amz-cf-id":"xtkjitDVUzRUKwf-JB5-oLejhHnsZoaA4hGVdF2tV4OaZYoxua6fUQ==","x-amz-cf-pop":"WAW51-P2","x-cache":"Error from cloudfront","x-content-type-options":"nosniff","x-frame-options":"SAMEORIGIN","x-permitted-cross-domain-policies":"none","x-request-id":"1ea0c376-4f69-461b-a7e3-298d3a505eba","x-runtime":"0.014082" -->
