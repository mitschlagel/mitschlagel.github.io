---
title: "Dark Web View"
date: "2026-02-12"
slug: "dark-web-view"
---

When embedding web content in iOS apps, maintaining a consistent user experience can be challenging—especially when it comes to respecting system appearance modes and matching your app's design language. Recently, I needed to display terms and conditions in a web view within a bottom sheet, and I wanted it to feel like a natural part of the app, not a jarring web page.

## The Challenge

The terms and conditions page was simple HTML with plain text hosted in a CMS, and it had two major issues:
- It didn't respect dark mode, staying bright white even when the app was in dark mode
- The typography didn't match the app's design, making it obvious this was embedded web content

## The Solution: WKUserScript

`WKUserScript` provides a simple--and slightly more secure--way to inject custom JavaScript and CSS into web views before the page loads. Here's how I used it to solve both problems:

```swift
import WebKit

let cssString = """
:root {
    color-scheme: light dark;
}

body {
    background-color: var(--background-color) !important;
    color: var(--text-color) !important;
    font-family: system-ui, sans-serif !important;
    font-size: 15px !important;
}

@media (prefers-color-scheme: dark) {
    :root {
        --background-color: #1c1c1e;
        --text-color: #ffffff;
    }
}

@media (prefers-color-scheme: light) {
    :root {
        --background-color: #ffffff;
        --text-color: #000000;
    }
}
"""

let jsString = "var style = document.createElement('style'); style.innerHTML = '\(cssString)'; document.head.appendChild(style);"

let userScript = WKUserScript(source: jsString, injectionTime: .atDocumentEnd, forMainFrameOnly: true)

let userContentController = WKUserContentController()
userContentController.addUserScript(userScript)

let configuration = WKWebViewConfiguration()
configuration.userContentController = userContentController

let webView = WKWebView(frame: .zero, configuration: configuration)
```

## Key Techniques

**1. Dark Mode Support**: Using `prefers-color-scheme` media queries and CSS custom properties allows the web view to automatically adapt to the system appearance.

**2. Native Typography**: By using `system-ui` font stack, the text matches iOS's native San Francisco font family, making it feel right at home.

**3. Injection Timing**: Setting `injectionTime` to `.atDocumentEnd` ensures styles apply after the DOM is ready but before the user sees the content.

## The Result

The terms and conditions now seamlessly integrate with the app's design. Users in dark mode see dark backgrounds with appropriate text colors, and the typography matches the rest of the app. What was once clearly a web view now feels like native content—exactly what we wanted for a polished, professional user experience.
