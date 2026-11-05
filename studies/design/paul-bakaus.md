# Paul Bakaus

[All studies](../README.md) · design · Reviewed 2026-11-05

Design practitioner · 4 public works

## Study lens

A useful creative tool should make judgment easier to exercise, not merely produce more plausible output.

**Focus:** Human–AI iteration · Design vocabulary · Tool packaging

## What was actually reviewed

Three full bylined essays and the project README read. The displayed article dates are used rather than one-day-offset crawler timestamps. Repository claims are reported as documented behavior, with a specific operational caution.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. Impeccable by Design

- Original work: https://www.paulbakaus.com/impeccable-by-design/
- Source ID: `paul-bakaus-source-1`
- Published: 2026-07-02
- Type: Founder’s first-person thesis essay
- Author/speaker credit: Paul Bakaus
- Review coverage: high for authorship and stated strategy
- Confidence note: high for authorship and stated strategy

Argues for human-directed iteration inside the working product, distinguishing removal of repetitive patterns from the development of taste.

### 2. Carving Shaders Out of Claude Code

- Original work: https://www.paulbakaus.com/carving-shaders-out-of-claude-code/
- Source ID: `paul-bakaus-source-2`
- Published: 2026-03-26
- Type: First-person project and process account
- Author/speaker credit: Paul Bakaus
- Review coverage: high for reported choices; outcomes self-reported
- Confidence note: high for reported choices; outcomes self-reported

Documents dependency-free shader packaging, reference-driven exploration, repeated visual correction, and a separate performance pass.

### 3. The Curse of 'Cursor for X'

- Original work: https://www.paulbakaus.com/the-curse-of-cursor-for-x/
- Source ID: `paul-bakaus-source-3`
- Published: 2025-11-27
- Type: Opinion essay about creative-tool design
- Author/speaker credit: Paul Bakaus
- Review coverage: high for authorship; broad claims are arguments
- Confidence note: high for authorship; broad claims are arguments

Proposes that creative software should expose the vocabulary and structure of a medium, helping users improve judgment rather than only generate output.

### 4. Impeccable repository and README

- Original work: https://github.com/pbakaus/impeccable
- Source ID: `paul-bakaus-source-4`
- Published: Date not established in this review
- Type: First-party project documentation
- Author/speaker credit: Paul Bakaus and project contributors
- Review coverage: high for inspected documentation; untested implementation
- Confidence note: high for inspected documentation; untested implementation

Documents targeted design commands, persistent project context, deterministic checks, and browser iteration. Its operation and security boundaries require separate review.

## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Package shaders as standalone, dependency-free HTML files.

Documented packaging decision; maintenance tradeoff analysis

**Alternative:** Require a specific frontend framework or a multi-package integration.

**Tradeoff:** Embedding and agent inspection become simpler, while duplicated source and local customization can complicate updates.

Evidence: [Source 1](https://www.paulbakaus.com/carving-shaders-out-of-claude-code/)

Decision ID: `paul-bakaus-decision-1`

### 2. Separate visual exploration, correction, and performance optimization into distinct passes.

Documented personal process; cost analysis

**Alternative:** Treat the first compelling rendering as finished.

**Tradeoff:** Specialized passes expose different failures, but increase iteration cost and can require reworking visually successful effects.

Evidence: [Source 1](https://www.paulbakaus.com/carving-shaders-out-of-claude-code/)

Decision ID: `paul-bakaus-decision-2`

### 3. Keep human intent in a live iteration loop rather than optimizing only for one-shot generation.

Documented product thesis, not independently validated superiority

**Alternative:** Automate toward a generic quality benchmark and minimize human steering.

**Tradeoff:** Contextual judgment can preserve a point of view, but requires attention and does not scale like an unattended batch.

Evidence: [Source 1](https://www.paulbakaus.com/impeccable-by-design/)

Decision ID: `paul-bakaus-decision-3`

### 4. Use deterministic checks for inspectable patterns alongside judgment-based critique.

Documented project architecture; limitations are analysis

**Alternative:** Make every quality judgment an opaque model score.

**Tradeoff:** Reproducible checks aid diagnosis but may punish intentional exceptions or miss the composition as a whole. Passing rules does not establish good design.

Evidence: [Source 1](https://github.com/pbakaus/impeccable)

Decision ID: `paul-bakaus-decision-4`

### 5. Design tools to expose professional concepts as users work.

Proposed design principle, not a measured product result

**Alternative:** Hide all structure behind an output-only prompt.

**Tradeoff:** Learning can build durable agency, but explanation can slow expert work or distract someone who only needs a result.

Evidence: [Source 1](https://www.paulbakaus.com/the-curse-of-cursor-for-x/)

Decision ID: `paul-bakaus-decision-5`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Distinguish the easy first result from the difficult finishing work.

The shader account contrasts simple early effects with a demanding example, then decomposes the iteration process.

[Linked example](https://www.paulbakaus.com/carving-shaders-out-of-claude-code/)

### 2. Separate an attractive proxy from the real objective.

Impeccable by Design distinguishes eliminating recognizable clichés from amplifying a person’s intent.

[Linked example](https://www.paulbakaus.com/impeccable-by-design/)

### 3. Use a novice/expert contrast to reveal missing vocabulary.

The Cursor-for-X essay contrasts vague creative requests with more specific direction, making its educational claim concrete.

[Linked example](https://www.paulbakaus.com/the-curse-of-cursor-for-x/)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Practice the judgment

Choose an interface you own and write a small vocabulary of precise design moves. Compare broad feedback with targeted feedback, then review the result using both three explicit checks and a human task walkthrough. Add a short explanation that teaches one concept without blocking the task.

**Deliverable:** Two iteration logs, a minimal review rubric, one justified exception to a rule, and a before/after record.

**Evaluate:** Does each design term correspond to an observable change? Can a second reviewer reproduce the explicit checks? What useful result would a rigid rule reject? Did the learner gain a concept they can reuse? Separate time saved on generation from time spent judging and repairing.

## Limits and counterexamples

- The essays are a founder’s advocacy and personal project reports, not independent comparative evaluations.
- Claims about artistic quality, model vision, and adoption are contextual or time-sensitive.
- The current README documents an optional live-edit fallback that can launch an agent with approval and sandbox protections disabled. A reading recommendation is not an endorsement of that configuration; review execution and data-sharing behavior before any use.
- The project has multiple contributors, and the documentation is a mutable snapshot rather than a pinned release audit.
- No commands, hooks, shaders, or generated pages were run for this research.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
