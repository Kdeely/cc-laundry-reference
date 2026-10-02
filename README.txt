Chevy Chase Club Laundry Reference – hosted bundle
====================================================

Upload every file in this folder to the root of a static web host. The site
must be served over https (all of the hosts below do this by default), or
the offline cache will not install.

Files
  index.html            the reference (all pages, pool laundry included)
  sw.js                 service worker: caches the page and fonts for offline use
  manifest.webmanifest  lets phones and laptops "install" it as an app
  icon.svg, icon-192.png, icon-512.png

Hosting options, simplest first
  1. Netlify Drop (app.netlify.com/drop): drag this folder onto the page.
     You get a https address in seconds. Re-drag the folder to update.
  2. Cloudflare Pages: Create project > Direct upload > drop the folder.
  3. GitHub Pages: put the files in a repository, enable Pages on the main
     branch, root folder.
  Any of these can sit behind a custom address later (laundry.supersourcedc.com).

How offline works
  Open the address once while online. The page and fonts are cached on that
  device; from then on it opens at the same address with no connection and
  the header says "Available offline on this device." On a phone or tablet
  use "Add to Home Screen" and it opens full-screen like an app.

Where your edits live
  Dose changes, test results, standard edits and tags save in that browser
  on that device (localStorage). They are not shared between devices and
  they are not on the server. "Export review pack" downloads them as a JSON
  file: send it to Claude for review, or import it on another device to
  carry the data across.

Updating the reference
  When the standard changes, a new bundle replaces these files on the host.
  The next time a device opens the address online it picks up the new page;
  its saved edits and test results are untouched.

Still works from the file
  index.html also opens directly from a laptop (double-click) with no host
  at all; the only thing missing is the "install" and the fonts.
