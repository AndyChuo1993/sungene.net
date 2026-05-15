self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/management",
        "destination": "/management"
      },
      {
        "source": "/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/management/:path*",
        "destination": "/management/:path*"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()