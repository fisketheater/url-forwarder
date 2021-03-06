# Fiske URL Forwarder

Wrriten by Collin Sinclair

## Intent

When a user scans a QR code pointing to [https://fisketheater.github.io/url-forwarder](https://fisketheater.github.io/url-forwarder) (or simply visits that site by typing the URL in, etc.), they will be forwarded to a random URL in the list of URLs in the [JavaScript file](https://github.com/fisketheater/url-forwarder/blob/main/script.js). The (original) purpose is to be able to collect survey information from large groups at one time (e.g., Fiske can create several Google Forms and send audience members to them randomly so they don't saturate). GitHub Pages sites should be able to handle 100 GB of traffic every month, which is way more than this tool should ever encounter, so I don't expect it to crash ever.

## Customization

1. Go to [this file](https://github.com/fisketheater/url-forwarder/blob/main/script.js)
2. Click the pencil icon in the upper-right region of the code box (when you hover over it, it will say "Edit this file")
3. Change the links in the list that starts on line 5 to be whatever you want to forward people to randomly. Make sure that each URL is in single quotations (e.g., `'https://example.com'`) and that the URLs are separated by commas (which go outside of the quotes: `'https://example.com', 'https://example2.com'`, etc.). Putting URLs on multiple lines is fine:
```javascript
urls = [
'https://example.com',
'https://example2.com',
'https://example3.com'
]
```
4. Click the green "Commit changes" button at the bottom of the page. That's it! It will take ~3 minutes for the public-facing website to update with your changes once you commit them.

I've uploaded a sample QR code for demonstration purposes, but it won't be high enough quality to show in the theater. It looks like [this site](https://www.qr-code-generator.com/) has lots of options available for free with an account - I'll let you decide how you want it to look!
