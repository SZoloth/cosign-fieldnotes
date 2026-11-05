# Gavin Nelson

[All studies](../README.md) · design · Reviewed 2026-11-05

Design practitioner · 3 public works

## Study lens

Solve the task within today’s constraints, while recognizing when growth makes the underlying navigation model the real problem.

**Focus:** Mobile navigation · Interaction prototypes · Contextual collaboration

## What was actually reviewed

Three distinct first-person case studies read. Together they show a constrained navigation intervention, a broader navigation redesign, and a scoped collaboration workflow. Their tradeoffs should be compared rather than collapsed into one timeless recommendation.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. Linear Search

- Original work: https://www.gavin.social/work/linear-search
- Source ID: `gavin-nelson-source-1`
- Published: Date not established in this review
- Type: First-person portfolio case study
- Author/speaker credit: Gavin Nelson, describing collaboration with Linear’s desktop team
- Review coverage: high for stated role and rationale; results unmeasured
- Confidence note: high for stated role and rationale; results unmeasured

Documents a universal search overlay intended to reduce backtracking without a full navigation rewrite.

### 2. Linear Navigation

- Original work: https://www.gavin.social/work/linear-26
- Source ID: `gavin-nelson-source-2`
- Published: Date not established in this review
- Type: First-person portfolio case study
- Author/speaker credit: Gavin Nelson, describing Linear team work
- Review coverage: high for stated design decisions; outcomes unmeasured
- Confidence note: high for stated design decisions; outcomes unmeasured

Explains a later navigation rethink with reorderable tabs, a dynamic fourth position, and a prototype used to tune gesture-driven transitions.

### 3. Linear Documents

- Original work: https://www.gavin.social/work/linear-documents
- Source ID: `gavin-nelson-source-3`
- Published: Date not established in this review
- Type: First-person portfolio case study
- Author/speaker credit: Gavin Nelson, describing Linear team work
- Review coverage: high for stated scope and rationale; outcomes unmeasured
- Confidence note: high for stated scope and rationale; outcomes unmeasured

Addresses mobile notifications that could not be acted on, with a scoped reading/reply workflow and a unified commenting model.

## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Add universally reachable search before rewriting the entire navigation structure.

Documented scoped decision

**Alternative:** Accept repeated backtracking or fund a full architectural redesign immediately.

**Tradeoff:** A targeted entry point can relieve pain quickly, but does not remove every limitation of the original hierarchy.

Evidence: [Source 1](https://www.gavin.social/work/linear-search)

Decision ID: `gavin-nelson-decision-1`

### 2. Make part of the tab bar configurable to reflect different roles’ recurring work.

Documented navigation design; tradeoff analysis

**Alternative:** Give everyone the same generic home hierarchy.

**Tradeoff:** Personal relevance increases while discoverability, defaults, and configuration become additional design responsibilities.

Evidence: [Source 1](https://www.gavin.social/work/linear-26)

Decision ID: `gavin-nelson-decision-2`

### 3. Tune the expanding tab control in a SwiftUI playground and support touch-drag-release selection.

Documented method and gesture choice; accessibility requirement is analysis

**Alternative:** Judge only static frames or require a separate tap for every step.

**Tradeoff:** High-fidelity exploration exposes gesture behavior, but the resulting interaction still needs accessible and discoverable alternatives.

Evidence: [Source 1](https://www.gavin.social/work/linear-26)

Decision ID: `gavin-nelson-decision-3`

### 4. Ship document reading and replies before full mobile document creation and editing.

Documented team scope decision

**Alternative:** Wait for desktop feature parity before making document notifications actionable.

**Tradeoff:** A smaller release closes the communication loop sooner while leaving authoring workflows incomplete.

Evidence: [Source 1](https://www.gavin.social/work/linear-documents)

Decision ID: `gavin-nelson-decision-4`

### 5. Collect threads in a shared sheet, retain document context, and put replies beside the thread they target.

Documented design choices; implementation cost is analysis

**Alternative:** Open a separate modal for each highlight and use one ambiguous global composer.

**Tradeoff:** Context and target clarity improve in the proposed model, but synchronized document/thread scrolling creates additional state and motion complexity.

Evidence: [Source 1](https://www.gavin.social/work/linear-documents)

Decision ID: `gavin-nelson-decision-5`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. State the forbidden scope before showing the solution.

The Search case study explains why a full navigation rewrite was excluded, making the chosen overlay intelligible as a constrained decision.

[Linked example](https://www.gavin.social/work/linear-search)

### 2. Connect a visible affordance to a specific kind of user variation.

The Navigation case study explains role-dependent needs before describing the dynamic tab position and reordering.

[Linked example](https://www.gavin.social/work/linear-26)

### 3. Describe the broken loop in user terms.

The Documents case study starts with receiving a notification that cannot be opened or answered, then explains the minimum work needed to finish that journey.

[Linked example](https://www.gavin.social/work/linear-documents)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Practice the judgment

Choose a growing mobile workflow. First design a constrained improvement that leaves its navigation architecture intact. Then design a broader alternative around two distinct user roles. Include one notification-to-reply journey and prototype its gesture and state transitions.

**Deliverable:** Two navigation proposals, an explicit scope comparison, a working interaction prototype, and a notification/recovery test script.

**Evaluate:** Which pain is relieved now, and which is only deferred? Can each role reach its frequent task without configuring anything? Can users identify which item a reply targets? Test deep links, interrupted gestures, large text, reduced motion, and non-gesture alternatives. Does the smaller release actually complete a user job?

## Limits and counterexamples

- These are curated personal case studies, not independent usability studies or evidence of measured adoption gains.
- The portfolio assigns project years but no exact publication dates, so date remains null.
- Linear’s shipping products are team work; Nelson’s first-person explanations establish his reported contribution, not sole authorship.
- Text and depicted interaction descriptions were reviewed, but prototypes were not run or accessibility-audited.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
