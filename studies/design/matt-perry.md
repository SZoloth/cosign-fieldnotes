# Matt Perry

[All studies](../README.md) · design · Reviewed 2026-11-05

Design practitioner · 4 public works

## Study lens

Choose animation machinery for the interaction it must preserve, then explain the rendering costs and failure cases rather than treating smoothness as magic.

**Focus:** Animation architecture, responsive interaction, and explicit performance tradeoffs

## What was actually reviewed

Four bylined primary artifacts reviewed, with five concrete decisions, three communication techniques, and an original interruption-testing exercise.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. Crashing cars and improving hover detection

- Original work: https://motion.dev/magazine/collision-detection-in-hover-detection
- Source ID: `matt-perry-source-1`
- Published: 2026-06-04
- Type: Bylined implementation essay with comparative demos
- Author/speaker credit: Matt Perry
- Review coverage: high
- Confidence note: high

Explains skipped hover targets through discrete pointer sampling, then applies line-segment collision testing and grouped geometry reads to a showcase grid.

### 2. Building the ultimate ticker

- Original work: https://motion.dev/magazine/building-the-ultimate-ticker
- Source ID: `matt-perry-source-2`
- Published: 2025-06-05
- Type: Bylined component design rationale and commercial announcement
- Author/speaker credit: Matt Perry
- Review coverage: high
- Confidence note: high

Describes Motion+ Ticker's item recycling, velocity-based animation, visibility controls, reduced-motion behavior, and an explicitly provisional keyboard-navigation approach.

### 3. The Web Animation Performance Tier List

- Original work: https://motion.dev/magazine/web-animation-performance-tier-list
- Source ID: `matt-perry-source-3`
- Published: 2025-11-05
- Type: Bylined technical explainer
- Author/speaker credit: Matt Perry
- Review coverage: high
- Confidence note: high

Organizes animation approaches by rendering work and execution thread, while discussing layer memory, layout reads, and exceptions to simple performance rankings.

### 4. Do you still need Framer Motion?

- Original work: https://motion.dev/magazine/do-you-still-need-framer-motion
- Source ID: `matt-perry-source-4`
- Published: 2024-05-29
- Type: Bylined historical comparison of native CSS and a JavaScript animation library
- Author/speaker credit: Matt Perry
- Review coverage: high
- Confidence note: high

Compares native animation capabilities with library behavior, including the difference between a sampled spring-like curve and velocity-aware, interruptible spring motion.

## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Test the segment between previous and current pointer positions against target rectangles.

Documented demo implementation and comparison

**Alternative:** React only when a sampled pointer position lands inside a target.

**Tradeoff:** Fast swipes reach otherwise skipped targets, but geometry measurement and intersection checks add work.

Evidence: [Source 1](https://motion.dev/magazine/collision-detection-in-hover-detection)

Decision ID: `matt-perry-decision-1`

### 2. Recycle ticker items across the visible boundary and create only the clones required by the measured viewport.

Documented component design; complexity tradeoff is editorial analysis

**Alternative:** Duplicate a fixed item set or provision for the widest possible viewport.

**Tradeoff:** Less duplicated content reduces overhead, at the cost of measurement and item-positioning logic.

Evidence: [Source 1](https://motion.dev/magazine/building-the-ultimate-ticker)

Decision ID: `matt-perry-decision-2`

### 3. Expose ticker velocity in pixels per second and drive its offset on the main thread.

Documented component choice; contention consequence is editorial analysis

**Alternative:** Use a fixed-duration CSS loop whose speed changes with content length.

**Tradeoff:** Speed stays intelligible and supports gesture composition, but scheduling becomes vulnerable to main-thread contention.

Evidence: [Source 1](https://motion.dev/magazine/building-the-ultimate-ticker)

Decision ID: `matt-perry-decision-3`

### 4. Apply layer-promotion hints deliberately rather than adding will-change to every animated element.

Author's stated recommendation and Motion implementation rationale

**Alternative:** Treat blanket layer promotion as a universal performance fix.

**Tradeoff:** Promotion can avoid paint for suitable updates, but excessive or oversized layers consume GPU memory.

Evidence: [Source 1](https://motion.dev/magazine/web-animation-performance-tier-list)

Decision ID: `matt-perry-decision-4`

### 5. Preserve incoming velocity when a spring animation follows a gesture or interrupted animation.

Documented library behavior and author's comparison, not a universal selection rule

**Alternative:** Replay a predefined spring-shaped easing curve from a new starting point.

**Tradeoff:** Velocity-aware behavior supports continuity; a fixed curve can be a simpler, lightweight choice for self-contained motion.

Evidence: [Source 1](https://motion.dev/magazine/do-you-still-need-framer-motion)

Decision ID: `matt-perry-decision-5`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Let readers experience the defect before naming the algorithm.

Two hover grids establish a perceptual difference before the essay connects pointer sampling to tunnelling in game physics.

[Linked example](https://motion.dev/magazine/collision-detection-in-hover-detection)

### 2. Use the same problem categories to structure the critique and proposed solution.

The ticker article revisits responsiveness, accessibility, and animation in the same order, making the component's claimed remedies easy to audit.

[Linked example](https://motion.dev/magazine/building-the-ultimate-ticker)

### 3. Teach the mechanism before offering a memorable classification.

The performance article introduces rendering stages and threads before assigning tiers, then adds caveats that prevent the ranking from replacing judgment.

[Linked example](https://motion.dev/magazine/web-animation-performance-tier-list)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Practice the judgment

Prototype one reversible panel transition using a fixed easing curve and a velocity-aware spring. Keep distance and visual styling equal. Reverse each at early, middle, and late points; record the response with and without a controlled main-thread workload. Add a reduced-motion version and write when you would choose each implementation.

**Deliverable:** Two original prototypes, a six-case interruption matrix, browser and device details, and a 250-word decision note separating measured results from perceived continuity.

**Evaluate:** Does reversal preserve a convincing trajectory without delaying the requested state change? Are claims backed by repeatable traces or recordings rather than a tier label alone? Can the interface remain understandable with motion disabled?

## Limits and counterexamples

- Perry authors the articles and created Motion; this does not establish sole authorship of every component or dependency.
- The ticker article is also marketing. Its keyboard approach is explicitly described as work in progress, not a proven accessibility standard.
- The hover demonstration approximates movement as straight segments between samples and checks rectangles; it does not reconstruct the true continuous path.
- Performance depends on browser, device, layer size, and workload. No demos, paid components, or benchmark claims were independently executed here.
- The CSS comparison dates from 2024 and contains historical support and implementation statements. Recheck current documentation before implementation.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
