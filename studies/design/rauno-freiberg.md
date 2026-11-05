# Rauno Freiberg

[All studies](../README.md) · design · Reviewed 2026-11-05

Design practitioner · 3 public works

## Study lens

Interaction reasoning, restrained motion, and visual implementation

**Focus:** Interaction reasoning, restrained motion, and visual implementation

## What was actually reviewed

Three primary works read; publication months visible. High confidence in documented decisions and attribution. No source repository audit or hands-on demo testing.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. Invisible Details of Interaction Design

- Original work: https://rauno.me/craft/interaction-design
- Source ID: `rauno-freiberg-source-1`
- Published: 2023-07
- Type: Primary essay with personal prototypes and analysis of others' products
- Author/speaker credit: Rauno Freiberg
- Review coverage: High for his reported experiments; observational for explanations of Apple behavior
- Confidence note: High for his reported experiments; observational for explanations of Apple behavior

Studies gesture commitment, interruption, spatial consistency, and repetition. His bookmarking-tool example shows that removing motion can improve perceived speed.

### 2. Crafting the Next.js Website

- Original work: https://rauno.me/craft/nextjs
- Source ID: `rauno-freiberg-source-2`
- Published: 2023-04
- Type: Primary implementation case study with code
- Author/speaker credit: Rauno Freiberg; website collaboration with Glenn (@glennui) and @almonk, with the design credited to Glenn
- Review coverage: High; authorship boundaries are explicit in the introduction
- Confidence note: High; authorship boundaries are explicit in the introduction

Explains how a team shipped the static improvement first, then refined animation, focus states, and rendering details.

### 3. Designing Depth

- Original work: https://rauno.me/craft/depth
- Source ID: `rauno-freiberg-source-3`
- Published: 2024-07
- Type: Primary visual essay and Vercel marketing iteration
- Author/speaker credit: Rauno Freiberg
- Review coverage: High for his described iteration; Apple's intentions are explicitly hypothesized
- Confidence note: High for his described iteration; Apple's intentions are explicitly hypothesized

Connects layered photographic composition to software hierarchy, then decomposes interface motion into ordered states.

## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Remove animation from the bookmarking tool's frequently repeated keyboard operations.

Personal implementation decision reported by Rauno

**Alternative:** Keep the animated active indicator and list mutations, merely shortening their timing.

**Tradeoff:** The documented result is greater perceived speed. Our interpretation: sacrifice an attractive demonstration to reduce friction during sustained use.

Evidence: [Source 1](https://rauno.me/craft/interaction-design)

Decision ID: `rauno-freiberg-decision-1`

### 2. Animate the opacity of pre-styled shadow layers in the Next.js switchboard.

Rauno's implementation within a credited team project

**Alternative:** Animate box-shadow itself.

**Tradeoff:** Avoids repeated painting described in the case study. Our interpretation: extra pseudo-element structure purchases more predictable motion on weaker devices.

Evidence: [Source 1](https://rauno.me/craft/nextjs)

Decision ID: `rauno-freiberg-decision-2`

### 3. Ship the improved static Next.js site before all animation refinements.

Team decision described by Rauno, not sole authorship

**Alternative:** Hold the entire redesign in an increasingly large pull request.

**Tradeoff:** The team delivered a useful intermediate state. Our interpretation: staged quality requires follow-through, but avoids making polish a prerequisite for any improvement.

Evidence: [Source 1](https://rauno.me/craft/nextjs)

Decision ID: `rauno-freiberg-decision-3`

### 4. Build depth in the Preview Deployments visual using blurred background, softened boundaries, and additional browser frames.

Rauno's described iteration on a Vercel marketing visual

**Alternative:** Keep flat overlapping panels or add unrelated decorative objects.

**Tradeoff:** The added layers communicate the product's abundance of deployments. Our interpretation: visual richness earns its place when it reinforces the subject rather than competing with it.

Evidence: [Source 1](https://rauno.me/craft/depth)

Decision ID: `rauno-freiberg-decision-4`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Turn an impression into a discriminating question

The swipe section asks when an action should commit, then contrasts reversible exploration with destructive dismissal. The explanation depends on intent, not a blanket rule about fluidity.

[Linked example](https://rauno.me/craft/interaction-design)

### 2. Expose the intermediate versions

The depth essay shows a weak composition and successive revisions before discussing choreography. Readers can connect a particular edit to a particular improvement.

[Linked example](https://rauno.me/craft/depth)

### 3. Disclose inference rather than impersonating the original designer

The choreography discussion marks the suggested reason for delaying the keyboard as an assumption. Observable sequencing and proposed intent remain separate.

[Linked example](https://rauno.me/craft/depth)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Practice the judgment

Choose one keyboard-heavy flow and one direct-manipulation flow. Prototype each with and without motion, then use each repeatedly rather than judging a single playback.

**Deliverable:** Four short recordings and a decision note stating what motion communicates, where interruption works, and what was removed.

**Evaluate:** Can you recover from a mistaken action immediately? Does motion explain a relationship? Does the fiftieth repetition still help?

## Limits and counterexamples

- These are three works, not a comprehensive assessment of his output.
- Apple examples are analysis, not evidence that Rauno designed those interactions.
- Browser-specific implementation advice from 2023 needs current compatibility testing.
- The essays report craft judgments rather than controlled usability measurements.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
