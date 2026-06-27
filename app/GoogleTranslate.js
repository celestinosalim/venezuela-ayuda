"use client";

import { useEffect } from "react";

// "More languages" control. Injects Google's website-translate widget.
// useEffect (not next/script): the script URL hard-codes the callback name and
// calls it the instant it evaluates, so the global must exist BEFORE injection.
export default function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById("__gt-script")) return; // inject once

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: "es,en,pt,fr,it,de,zh-CN,ar",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const s = document.createElement("script");
    s.id = "__gt-script";
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <span className="gt-wrap">
      <span aria-hidden="true">🌐</span>
      <div id="google_translate_element" suppressHydrationWarning />
    </span>
  );
}
