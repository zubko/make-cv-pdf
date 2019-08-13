## Generating CV PDF using React (react-pdf)

Instead of drawing the CV in Sketch or Canva or making it with some word processor like Google Docs or MS Word, why not to use your React skills and generate the CV from code!

### Some pros:

- More fun :)

- It's relatively easy to experiment with the structure, considering that going from 2 to 1 columns is as quick as tuning some flexbox CSS and moving components between parents.

- Once everything is setup it's quite magical to change some consts like the font size in one place or paddings, colors etc and observe the result

- Generating PDF from code can be useful for some other projects where users can download some generated content, receipts, itineraries etc.

- No need for some specific hacks when the editor doesn't support some feature. For example I was struggling making URLs in Canva, I ended up putting empty overlays with the link. It worked OK, but any change to the structure required a lot of drag'n'drop of invisible elements which wasn't fun and was also error prone.

### Some cons:

- Making initial version will take more time because of all the setup needed and sometimes dragging the texts and rects with the mouse is just faster than doing that from code.

- It won't be easy to implement the design which is outside of flexbox or react-pdf capabilities, like putting the text inside the circle or drawing non rectangular shapes. (Although for rendering PDF from HTML these capabilities will be broader).

### Using react-pdf vs. any of HTML-to-PDF solution

<ul style="list-style:none;">

👍 Rendering happens without using extra apps / servers (no need for headless Chrome etc).

👎 Less flexible/powerful formatting and styling compared to HTML/CSS.

👎 Harder style debugging while working on a document. It's not possible to inspect an element in the browser since it's a pdf document. It has some simple its own debug tools.

👍 More predictable styling and rendering.

👍 Client side rendering is possible.

</ul>

### Multiple documents

There is a small interface to make it possible to render different documents:

- Each document should have a file or folder in the `documents` folder. If it's a folder it should have an `index.js` file.

- Each document should export a component as its `default` export. This component should render React PDF `Document` with some children.

- Each document should export `buildPath` string pointing to where the document should be saved after building.

### Setup

You can use this project as a starting point or a reference to save some configuration time.

Build it with:

```sh
yarn build --document=%%DOC_NAME%%
```

or predefined

```sh
yarn build:mobile
```

or everything

```sh
yarn build:all
```

This will render a PDF document using node.

And it is also possible (and important) to be able to preview the document while editing it. I've used `create-react-app` for that, so run as usual:

```sh
yarn start
```

or

```
yarn develop
```

Keep the browser side-by-side to the code and enjoy the live-reload while editing.

For the browser there is a React Router based solution to provide a rendering of different documents. It's possible to open different documents in different tabs and compare them side by side while they are edited. The root page will show a menu with the items found in the `documents` folder. And each document is accessible under its own path. For example `http://localhost:3000/web` is for Web Dev CV. List of available documents is collected at the build time thanks to [import-all.macro](https://github.com/kentcdodds/import-all.macro).

The images and fonts can be found in the `public` folder.

The idea to keep the PDF generation separate from the website is to not mix 2 different React apps / environments under the same root.

Happy hacking!
