---
title: "Rendering Markdown in SwiftUI's Text View"
date: "2026-04-01"
slug: "swiftui-markdown"
---

SwiftUI's `Text` view has supported inline markdown since iOS 15 — no packages, no custom parsers. Here's what that looks like and how far you can take it.

---

## String literals

Drop markdown directly into any `Text` string literal and SwiftUI renders it automatically:

```swift
Text("This is text.")
Text("It can be **bold**, *italic*, or even ***bold italic***.")
Text("It could be ~~strikethrough example~~")
Text("`Or as code (monospaced)`")
Text("Even a [link](https://google.com)")

```

That last line renders as a tappable link with no `Link` view or `.onTapGesture` needed. The link color inherits your app's `.tint()` modifier.

You can also store these as named constants using `LocalizedStringKey`, which is the type SwiftUI uses under the hood for string literals:

```swift
let message: LocalizedStringKey = "Transfer **confirmed** — funds arrive *within 2 days*"
let link: LocalizedStringKey = "Visit our [web site](https://spencerjones.studio)"

Text(message)
Text(link)
```

Both render with full markdown support, just like inline literals.

---

## Dynamic strings from an API

I’ve found this most useful as an option for API driven content. You can use `AttributedString` to interpret markdown-formatted strings from a network response at runtime.

```swift
let message = apiResponse.message
var attributed: AttributedString? {
    try? AttributedString(markdown: message)
}

var body: some View {
    VStack(alignment: .leading) {
        Text(attributed ?? AttributedString(message))
    }
}
```

The `try?` with a plain fallback means malformed markdown degrades gracefully — the raw string renders as-is rather than crashing.

This opens up a useful pattern: instead of sending a raw URL and leaving the label decision to the client, your backend can send `"View your [transaction receipt](https://...)"` and the app renders it tappable with one line of code. Light inline styling works the same way — the backend can express **bold**, *italic*, and ~~strikethrough~~ and the client renders it without needing to know anything about the content ahead of time.

