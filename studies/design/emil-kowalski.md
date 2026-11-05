# Emil Kowalski

[All studies](../README.md) · design · Reviewed 2026-11-05

Design practitioner · 3 public works

## Study lens

Interruptible motion, gesture edge cases, and teachable component craft

**Focus:** Interruptible motion, gesture edge cases, and teachable component craft

## What was actually reviewed

Three primary works read. High confidence in reported choices; unknown publication dates. Performance and accessibility were not independently tested.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. 7 Practical Animation Tips

- Original work: https://emilkowal.ski/ui/7-practical-animation-tips
- Source ID: `emil-kowalski-source-1`
- Published: Date not established in this review
- Date caveat: No publication date visible in the inspected page; reviewed 2026-11-05.
- Type: Primary instructional essay with paired interactive examples
- Author/speaker credit: Emil Kowalski
- Review coverage: High for recommendations; their effectiveness is not independently measured here
- Confidence note: High for recommendations; their effectiveness is not independently measured here

Makes responsiveness concrete through easing comparisons, origin-aware scaling, tooltip timing, and repetition-sensitive animation choices.

### 2. Building a toast component

- Original work: https://emilkowal.ski/ui/building-a-toast-component
- Source ID: `emil-kowalski-source-2`
- Published: Date not established in this review
- Date caveat: Article recalls building Sonner in 2023; that is not established as this page's publication date.
- Type: Primary Sonner implementation retrospective
- Author/speaker credit: Emil Kowalski
- Review coverage: High; personal first-person account, not a repository audit
- Confidence note: High; personal first-person account, not a repository audit

Connects retargetable animation to toast stacking, then covers a simple calling API and details such as pausing dismissal while the tab is hidden.

### 3. Building a drawer component

- Original work: https://emilkowal.ski/ui/building-a-drawer-component
- Source ID: `emil-kowalski-source-3`
- Published: Date not established in this review
- Date caveat: No publication date visible in the inspected page; reviewed 2026-11-05.
- Type: Primary Vaul implementation case study
- Author/speaker credit: Emil Kowalski
- Review coverage: High for described design process; historical implementation notes
- Confidence note: High for described design process; historical implementation notes

Builds on Radix Dialog, then works through dragging, scrolling, virtual keyboards, multiple touches, and snap points.

## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Use retargetable CSS transitions for toasts whose positions change during rapid arrivals.

Emil's Sonner implementation

**Alternative:** Keep the initial CSS keyframe implementation.

**Tradeoff:** Existing toasts can transition toward new destinations instead of jumping. Our interpretation: an interaction that can be interrupted needs a state model, not only a polished entrance.

Evidence: [Source 1](https://emilkowal.ski/ui/building-a-toast-component)

Decision ID: `emil-kowalski-decision-1`

### 2. Update the drawer element's transform directly during dragging.

Emil's Vaul implementation

**Alternative:** Update an inherited CSS variable used for the transform.

**Tradeoff:** His investigation traced lag in larger drawers to descendant style recalculation. The choice localizes hot-path updates; it does not imply CSS variables are generally slow.

Evidence: [Source 1](https://emilkowal.ski/ui/building-a-drawer-component)

Decision ID: `emil-kowalski-decision-2`

### 3. Allow drawer dragging only at the content's scroll boundary, with a short lockout after returning to the top.

Emil's Vaul implementation

**Alternative:** Immediately turn a fast upward scroll into a momentum-based dismissal gesture.

**Tradeoff:** The reported 100 ms guard prevents accidental closure. Our interpretation: a small delay protects intent at the boundary between two gesture meanings.

Evidence: [Source 1](https://emilkowal.ski/ui/building-a-drawer-component)

Decision ID: `emil-kowalski-decision-3`

### 4. Delay the first tooltip, but show subsequent tooltips in the group immediately without animation.

Emil's recommendation, with behavior credited to existing component libraries

**Alternative:** Apply the same entrance delay and motion to every tooltip.

**Tradeoff:** Initial delay discourages accidental activation; subsequent immediacy supports intentional scanning. This is a contextual timing rule, not a call to make every tooltip instantaneous.

Evidence: [Source 1](https://emilkowal.ski/ui/7-practical-animation-tips)

Decision ID: `emil-kowalski-decision-4`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Hold a variable constant in a comparison

The easing demonstration keeps duration at 300 ms while comparing curves. This teaches readers to isolate perceived responsiveness from elapsed time.

[Linked example](https://emilkowal.ski/ui/7-practical-animation-tips)

### 2. Teach through a reproducible failure

The toast essay asks readers to add toasts quickly before presenting the replacement animation approach. The flaw becomes visible before the explanation.

[Linked example](https://emilkowal.ski/ui/building-a-toast-component)

### 3. Retain the debugging surprise

The drawer narrative explains why eliminating React rerenders did not eliminate lag, then identifies inherited-style recalculation as the missing cause.

[Linked example](https://emilkowal.ski/ui/building-a-drawer-component)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Practice the judgment

Build a three-toast stack and deliberately send ten notifications rapidly. Compare an entrance-only implementation with retargetable transitions; also test long content and backgrounding the tab.

**Deliverable:** Two recordings, a tiny state diagram, and a table of interruption, dismissal, visibility, and reduced-motion behavior.

**Evaluate:** No positional jumps, unread notifications are not silently lost, and removing motion still leaves clear status.

## Limits and counterexamples

- The animation tips' sub-300 ms guideline is not universal: the drawer case describes 500 ms motion for a different context.
- Vaul's keyboard workaround admits a delayed viewport adjustment; native imitation carries real browser costs.
- Emil credits Radix foundations and react-hot-toast API inspiration. These are not claims of inventing all underlying patterns.
- No article publication dates were inferred from project launch dates.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
