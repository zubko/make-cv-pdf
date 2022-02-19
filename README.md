## Generating CV PDF using React (react-pdf)

Instead of drawing the CV in Sketch or Canva or making it with some word processor like Google Docs or MS Word, why not to use our React skills and generate the CV from code!

### Some pros:

- More fun :)

- It's relatively easy to experiment with the structure, considering that going from 2 to 1 columns is as quick as tuning some flexbox CSS and moving components between parents.

- Once everything is setup it's quite magical to change some consts like the font size in one place or paddings, colors etc and observe the result.

- Generating PDF from code can be useful for some other projects where users can download some generated content, receipts, itineraries etc.

- No need for some specific hacks when the editor doesn't support some feature. For example I was struggling making URLs in Canva, I ended up putting empty overlays with the link. It worked OK, but any change to the structure required a lot of drag'n'drop of invisible elements which wasn't fun and was also error prone.

- Git based edit history.

- Automation compatible out of the box. The updated document can be automatically built and delivered to the place where it's used.

### Some cons:

- Making initial version will take more time because of all the setup needed and sometimes dragging the texts and rects with the mouse is just faster than doing that from code.

- It won't be easy to implement the design which is outside of flexbox or react-pdf capabilities, like putting the text inside the circle or drawing non rectangular shapes. (Although for rendering PDF from HTML these capabilities will be broader).

- An additional maintenance of the JS / React tooling will be needed from time to time.

### Using react-pdf vs. any of HTML-to-PDF solution

<ul style="list-style:none;">

👍 Rendering happens without using extra apps / servers (no need for headless Chrome etc).

👎 Less flexible/powerful formatting and styling compared to HTML/CSS.

👎 Harder style debugging while working on a document. It's not possible to inspect an element in the browser since it's a pdf document. It has some simple its own debug tools.

👍 More predictable styling and rendering.

👍 Client side rendering is possible.

</ul>

### Document components

There is a small interface to make it possible to render different documents:

- Each document should have a file or folder in the `documents` folder. If it's a folder there should a JS file matching the folder name.

- Each document should have a document component exported with the same name as the document file or folder. This component should render React PDF `Document` with some children.

- A document can export `fileName` string if the file name should be different from the component name.

- A document can define a `{Component}.stories.js/jsx` with `isDocumentStory: true` parameter to be rendered in Storybook without an extra `Document` decorator which is used for components.

### Setup

You can use this project as a starting point or a reference to save some configuration time.

Build a document with:

```sh
yarn build --document=Name
```

The `Name` should match one of the exported components in `/src/documents` folder (case-sensitive) as mentioned in the previous section.

[Storybook](https://storybook.js.org) is used to iterate on the document and its components during development. Run it with:

```sh
yarn start

-- or --

yarn develop
```

Keep the browser side-by-side to the code and enjoy the live-reload while editing.

The images and fonts can be found in the `public` folder.

The idea to keep the PDF generation separate from the website where this document is used is to not mix 2 different React apps / environments under the same root. Although with the modern improved tooling for monorepo I think it would be better to have the Web app and the PDF generation in the same repository now.

Happy hacking!

## CRA

The Web preview of the project is based on Create React App with a TypeScript template. There was an issue with Webpack v5 and Node.js polyfills, so [Craco](https://github.com/gsoft-inc/craco) was used to modify the Webpack config of CRA. Then Storybook was added on top of that. It's still possible to run CRA with `yarn start:cra` if some tooling debug of checking the document directly in the browser without Storybook is needed. CRA part also can be useful to add unit tests for example.

## Node.js

With [TS Node](https://github.com/TypeStrong/ts-node) running the PDF generation from TypeScript files was very straightforward. Just one change in `tsconfig.json` was needed to enable conversion from ES Modules syntax to CommonJS.

## TypeScript

The project started with minimal usage of Flow. TypeScript was adopted at the later stage. Using TypeScript to the max and flipping `strict: true` is the next step in this migration.
