# Steve Ruiz

[All studies](../README.md) · design · Reviewed 2026-11-05

Design practitioner · 4 public works

## Study lens

Make invisible interaction behavior observable, then encode intentional tolerances and stable rules.

**Focus:** Canvas interaction engineering, measurable details, and shared human-AI surfaces

## What was actually reviewed

Four primary artifacts reviewed, combining interaction research, two technical case studies, and an AI work-surface demonstration.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. Text is not enough

- Original work: https://tldraw.dev/blog/text-is-not-enough
- Source ID: `steve-ruiz-source-1`
- Published: 2026-03-30
- Type: First-person product demonstration
- Author/speaker credit: Steve Ruiz
- Review coverage: high
- Confidence note: high

Shows where an editable canvas can supplement chat for visual and abstract reasoning; explicitly acknowledges that chat works well for many tasks.

### 2. An exhaustive review of design tool hover areas

- Original work: https://tldraw.dev/blog/a-review-of-design-tool-hover-areas
- Source ID: `steve-ruiz-source-2`
- Published: 2026-04-07
- Type: First-person comparative investigation
- Author/speaker credit: Steve Ruiz
- Review coverage: high
- Confidence note: high

Maps cursor behavior across a grid to expose hidden resize and rotation hit areas in design tools, making conventions measurable rather than assumed.

### 3. Debugging a physical race condition with modifier keys

- Original work: https://tldraw.dev/blog/adding-delays-to-modifier-keys
- Source ID: `steve-ruiz-source-3`
- Published: 2026-02-06
- Type: Coauthored implementation case study
- Author/speaker credit: Steve Ruiz and Ani Krishnan
- Review coverage: high
- Confidence note: high

Explains why nominally simultaneous keyboard and mouse releases can cancel a drag modifier and describes a short release tolerance.

### 4. Engineering imperfection with draw shapes

- Original work: https://tldraw.dev/blog/engineering-imperfection-with-draw-shapes
- Source ID: `steve-ruiz-source-4`
- Published: 2026-02-06
- Type: Implementation essay with examples
- Author/speaker credit: Steve Ruiz
- Review coverage: high
- Confidence note: high

Uses seeded pseudorandomness and geometry-aware constraints to give shapes a hand-drawn character without unstable render-to-render jitter.

## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Visualize interaction hit areas with a systematic sampling tool.

Documented investigation method

**Alternative:** Infer conventions by cautiously moving a pointer and relying on memory.

**Tradeoff:** Instrumentation makes discrepancies visible but captures only the sampled platform, state, and time.

Evidence: [Source 1](https://tldraw.dev/blog/a-review-of-design-tool-hover-areas)

Decision ID: `steve-ruiz-decision-1`

### 2. Delay modifier release by 150 ms in the described drag interaction.

Coauthored documented implementation decision

**Alternative:** Immediately apply every key-up event regardless of user intent.

**Tradeoff:** Tolerance avoids accidental last-moment cancellation; too much delay would feel sticky.

Evidence: [Source 1](https://tldraw.dev/blog/adding-delays-to-modifier-keys)

Decision ID: `steve-ruiz-decision-2`

### 3. Seed imperfections from stable shape IDs.

Documented implementation decision

**Alternative:** Generate new random offsets on every render.

**Tradeoff:** Stable variation preserves identity through edits; it requires deterministic handling of geometry and seeds.

Evidence: [Source 1](https://tldraw.dev/blog/engineering-imperfection-with-draw-shapes)

Decision ID: `steve-ruiz-decision-3`

### 4. Make visual explanations editable by both human and agent.

Documented product capability; tradeoff is analysis

**Alternative:** Exchange screenshots or textual descriptions without a shared model.

**Tradeoff:** Direct reference improves steering for visual work; an extra canvas can be unnecessary for simple exchanges.

Evidence: [Source 1](https://tldraw.dev/blog/text-is-not-enough)

Decision ID: `steve-ruiz-decision-4`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Begin with a tiny observable failure and trace its mechanism.

The modifier article starts with an effect disappearing at release, explains event ordering, and only then presents the timeout.

[Linked example](https://tldraw.dev/blog/adding-delays-to-modifier-keys)

### 2. Use the naive implementation as a foil.

The imperfection essay shows why fresh random values fail before introducing stable seeded variation.

[Linked example](https://tldraw.dev/blog/engineering-imperfection-with-draw-shapes)

### 3. Make a comparison reproducible in concept.

The hover investigation states its grid-sampling method before presenting tool-by-tool observations.

[Linked example](https://tldraw.dev/blog/a-review-of-design-tool-hover-areas)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Practice the judgment

Find an interaction that fails under rapid or imprecise input. Instrument it, collect an event trace, and compare immediate response with a small intent-preserving tolerance.

**Deliverable:** A reproducible failing case, an event timeline, and two working variants with a justified threshold.

**Evaluate:** Does the change fix the failure without blocking intentional reversal? Can the failure be reproduced rather than merely described? Have keyboard and pointer paths both been tested?

## Limits and counterexamples

- The modifier article is coauthored with Ani Krishnan.
- The reported 150 ms value is specific to the described interaction, not a universal timing rule.
- The hover survey is a snapshot of sampled tools, not evidence about all versions or platforms.
- No claim is made that canvases should replace chat everywhere.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
