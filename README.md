# Minimum Repro Demonstration of libs assets

This demonstrates the fact that Nest silently ignores assets properties specified in libraries that are included in a final app's binary.

This is a mostly unmodified result of `nest new`. To get here I:

1. Removed test files
2. Added a library with `nest g library` and named it `assets`
3. Moved the `getHello` function from `app.service` to `assets.service`
4. Added a JPG image to the `assets` library's src directory and included it in the `nest-cli.json` compiler options for that library.

Now, if you run `nest build` you will notice that:

1. The app builds
2. The resulting source code in `dist/main.js` includes the code from `assets.service.ts`, meaning the library was included.
3. The `dist` directory contains no `.jpg` images, meaning the assets specifications of the libraries was ignored.

If you run `nest build assets` then you will build only the assets library. Now, you can see that:

1. The library builds
2. The results in `dist/libs/assets` contains both the source code and the `.jpg` image.
3. However, there is no convenient way to tell the app to use this copy of the library rather than its local copy.
