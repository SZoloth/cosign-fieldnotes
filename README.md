# Cosign Fieldnotes

An independent, source-linked study of design, product, and growth practice. It turns a peer-nominated list of practitioners into a working collection of public sources, consequential decisions, communication techniques, and original exercises.

**A research starting point, not a ranking or a claim of exhaustive study.** The project is not affiliated with Cosign or endorsed by the people featured. A nomination is not an award won. Individual, team, interviewer, and publisher contributions remain distinct.

## Read the research

Start with the [study library](studies/README.md), which provides a readable page for each practitioner, explicit coverage counts, a discovery-only queue, and cross-study comparisons. Source JSON remains available for reuse and inspection.

## Use it

- Browse practitioner studies by discipline or search people, ideas, and source works.
- Read the original sources and their access / attribution notes.
- Write a prediction before revealing a decision and its tradeoff.
- Try an exercise, record a reflection, and mark it practiced.
- Save a reading queue and export your notebook as JSON.
- Follow cross-disciplinary study paths with a concrete output.

Notebook data is stored in `localStorage` on the current browser and origin. It is not synced, sent to a backend, or included in this repository. Export before clearing browser data or changing devices. There is no analytics or account system in the application. Hosted access control, if present, is separate from the application.

## Run locally

Requires Node.js 20+ for checks and Python 3 for the convenience server. The app is plain HTML, CSS, and JavaScript with no npm dependencies or build step.

```sh
npm test
npm run check
npm run serve
```

Then open `http://localhost:8080`. Use HTTP rather than opening `index.html` as a file, because the app loads the collection with `fetch`.

## Content structure

- `studies/`: Readable, source-linked Markdown studies, coverage index, comparisons, and discovery queue.
- `research/*.json`: Public-safe source research with full provenance and limitations.
- `scripts/build-collection.mjs`: Converts research records into the normalized UI collection.
- `dist/data/collection.json`: Portable normalized people, works, decisions, writing observations, exercises, and study paths.
- `dist/`: Deployable static application.
- `tests/`: Dependency-free unit tests for search, safe rendering, links, and notebook normalization.
- `scripts/validate-data.mjs`: Content integrity checks.

To update research, edit the relevant public data file, then run:

```sh
node scripts/build-collection.mjs
node scripts/build-study-notes.mjs
npm run check
npm test
```

## Evidence standard

Every consequential decision links to evidence. Each source distinguishes authorship, date when known, source type, and actual access. Full articles, partial excerpts, original transcripts, publisher summaries, and public repository documentation are not treated as interchangeable evidence. Author testimony is not proof of causal impact. Exercises, inferred tradeoffs, and communication observations are editorial synthesis and are labeled accordingly.

Preserve caveats when adapting the data. Do not turn team achievements into sole-person claims, infer current employment from old sources, call a summary a full interview review, or promote an observed pattern into a universal rule.

## Contributing research

Useful additions include an original public source, an exact source URL, the decision or claim it supports, its attribution, an alternative or tradeoff, a boundary condition, and a testable exercise. Prefer a few close readings over a large unsourced bibliography. Never add private messages, company documents, personal notes, or access credentials.

The source works remain owned by their respective authors and publishers. This repository contains original short paraphrases and commentary, not full copies. No project-wide license has been assigned; public visibility alone does not assign one.

## Deployment

Serve `dist/` using any static host. Hash-based routing works under a subdirectory, including GitHub Pages. No database or runtime secret is required. Font styling uses Google Fonts with local serif/sans-serif fallbacks; replace the CSS import for fully self-contained hosting.

## Accessibility and verification

Responsive layouts, semantic navigation, keyboard-operable controls, native dialog focus management, reduced-motion support, visible focus states, and text alternatives are included. Validation checks the collection's source/decision/exercise structure. Browser QA covers filtering, opening a study, decision reveal, saving, notes, completion, and notebook rendering. This is not a substitute for assistive-technology or comprehensive device testing.
