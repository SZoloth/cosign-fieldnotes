# jhey

[All studies](../README.md) · design · Reviewed 2026-11-05

Design practitioner · 4 public works

## Study lens

Turn a striking effect into a small set of understandable inputs, expose how those inputs work, and keep the result adaptable to devices and user preferences.

**Focus:** Creative coding, parametric CSS, and teaching through inspectable experiments

## What was actually reviewed

Four bylined primary artifacts reviewed, including an author-published syndication, a credited team retrospective, a compact tutorial, and a tool-building account; five decisions and three communication techniques are included.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. Parallax Powered by CSS Custom Properties

- Original work: https://dev.to/jh3y/parallax-powered-by-css-custom-properties-3p83
- Source ID: `jhey-source-1`
- Published: 2022-01-10
- Type: Author-published syndication of a first-person implementation tutorial
- Author/speaker credit: Jhey Tompkins
- Review coverage: high
- Confidence note: high

Separates pointer input from per-object visual coefficients in a parallax scene, with configurable motion reduction and non-hover behavior.

### 2. Building Chrometober!

- Original work: https://web.dev/articles/building-chrometober
- Source ID: `jhey-source-2`
- Published: 2022-10-31
- Type: Bylined team-project retrospective; date is the displayed last-updated date
- Author/speaker credit: Jhey Tompkins
- Review coverage: high
- Confidence note: high

Documents a scrolling-book project, its responsive concept change, component architecture, accessibility review, and experimental API feedback. Team responsibilities are explicitly credited.

### 3. Speedy CSS Tip! Animated Loader

- Original work: https://web.dev/articles/speedy-css-tip-animated-loader
- Source ID: `jhey-source-3`
- Published: 2022-09-22
- Type: Bylined compact CSS tutorial; date is the displayed last-updated date
- Author/speaker credit: Jhey Tompkins
- Review coverage: high
- Confidence note: high

Builds a radial loader from count and index custom properties, calculated geometry and opacity, and a matching stepped rotation.

### 4. The Path To Awesome CSS Easing With The linear() Function

- Original work: https://www.smashingmagazine.com/2023/09/path-css-easing-linear-function/
- Source ID: `jhey-source-4`
- Published: 2023-09-22
- Type: Bylined technical tutorial and tool-building account
- Author/speaker credit: Jhey Tompkins
- Review coverage: high
- Confidence note: high

Explains custom easing through visual examples and recounts simplifying a GSAP-to-CSS conversion tool with Jake Archibald's help.

## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Pass two normalized pointer values into scoped CSS properties; configure each object's response separately.

Documented implementation; alternative and maintenance tradeoff are editorial analysis

**Alternative:** Calculate every object's visual transform in the pointer handler.

**Tradeoff:** Input logic stays reusable, while CSS coefficient relationships require careful naming and tuning.

Evidence: [Source 1](https://dev.to/jh3y/parallax-powered-by-css-custom-properties-3p83)

Decision ID: `jhey-decision-1`

### 2. Replace the initial sideways scene-navigation concept with a scrolling 3D book.

Jhey's documented concept decision; remaining complexity is editorial analysis

**Alternative:** Continue developing rotating and scaling scenes along a horizontal route.

**Tradeoff:** The book better matched the team's responsive ambitions, while retaining substantial page-turning and accessibility complexity.

Evidence: [Source 1](https://web.dev/articles/building-chrometober)

Decision ID: `jhey-decision-2`

### 3. Derive radial loader geometry, opacity, and stepped rotation from shared count and index values.

Documented tutorial implementation; alternative and synchronization caution are editorial analysis

**Alternative:** Hand-author separate placement and timing values for every spoke.

**Tradeoff:** One parameter system supports variation, but generated markup and the declared count must stay synchronized.

Evidence: [Source 1](https://web.dev/articles/speedy-css-tip-animated-loader)

Decision ID: `jhey-decision-3`

### 4. Convert GSAP easing functions directly instead of extracting and rescaling SVG paths from its visualizer.

Documented simplification prompted by Jake Archibald; fidelity tradeoff is editorial analysis

**Alternative:** Continue using an intermediate geometric representation of the easing curve.

**Tradeoff:** Direct function input removes conversion work; generated point simplification still trades output size against approximation fidelity.

Evidence: [Source 1](https://www.smashingmagazine.com/2023/09/path-css-easing-linear-function/)

Decision ID: `jhey-decision-4`

### 5. Multiply decorative parallax transforms by a shared motion coefficient and set it to zero when hovering is unavailable.

Documented implementation; accessibility boundary is editorial analysis

**Alternative:** Keep the full pointer-driven effect for every user and device.

**Tradeoff:** Central control simplifies adaptation; reducing motion amplitude alone does not establish accessibility.

Evidence: [Source 1](https://dev.to/jh3y/parallax-powered-by-css-custom-properties-3p83)

Decision ID: `jhey-decision-5`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Build one visible mechanism at a time.

The loader tutorial moves from markup to placement, opacity, and stepped rotation, so each code addition has an observable purpose.

[Linked example](https://web.dev/articles/speedy-css-tip-animated-loader)

### 2. Include the detour that explains why the simpler solution is better.

The easing account preserves the unsuccessful SVG route and credits Archibald's question before showing direct function conversion.

[Linked example](https://www.smashingmagazine.com/2023/09/path-css-easing-linear-function/)

### 3. Make a polished result legible as a series of decisions made by a team.

Chrometober names contributors, shows the abandoned concept, and records device-testing and accessibility work rather than presenting the final effect as inevitable.

[Linked example](https://web.dev/articles/building-chrometober)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Practice the judgment

Create an original five-shape decorative scene with two shared input values and per-shape coefficients. Make normal, reduced, and static variants. Keep adjacent content usable without the decoration. Write a short tutorial that reveals input mapping, one shape, and the full composition in three stages; include one rejected approach.

**Deliverable:** A small original experiment, a parameter map, screenshots at narrow and wide widths, a motion-preference test record, and a 300-word explanation with credit for borrowed techniques.

**Evaluate:** Can a reader predict what changing one coefficient will do? Does the static version preserve all information and actions? Are pointer, non-hover, keyboard, and motion-preference cases considered? Does the explanation distinguish the author's contribution from libraries, specifications, and collaborators?

## Limits and counterexamples

- jhey is the public name used here; the articles are bylined Jhey Tompkins.
- Chrometober credits Jhey as architectural and creative lead, Tyler Reed for illustration and design, Una Kravets as project lead, and other contributors. It is not a solo project.
- Chrometober uses a 2022 experimental API and polyfill. Its syntax and browser-support statements must not be copied as current implementation guidance.
- The parallax tutorial's example motion-reduction coefficient is not a universal safe value. Its personal-site original was unavailable through the research tool; the author's DEV syndication was reviewed.
- The linear() article credits Jake Archibald's specification and generator work. Jhey's contribution discussed here is the explanation and conversion workflow, not invention of the underlying API.
- The compact loader tutorial is not a complete accessible loading-state component. Status semantics, announcements, and motion preferences need separate design.
- Demos were read, not executed. Dates for the web.dev articles identify their displayed update dates, not independently verified original publication dates.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
