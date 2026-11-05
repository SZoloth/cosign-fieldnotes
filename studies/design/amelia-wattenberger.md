# Amelia Wattenberger

[All studies](../README.md) · design · Reviewed 2026-11-05

Design practitioner · 5 public works

## Study lens

Use AI to create manipulable models of a problem, not merely more prose for the user to review.

**Focus:** Explorable explanations, human-AI interfaces, and tools for thought

## What was actually reviewed

Five primary artifacts reviewed, spanning critique, prototype, historical analogy, and a structural design framework. Unknown publication dates are left unspecified.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. Why Chatbots Are Not the Future

- Original work: https://wattenberger.com/thoughts/boo-chatbots/
- Source ID: `amelia-wattenberger-source-1`
- Published: Date not established in this review
- Type: Interactive essay
- Author/speaker credit: Amelia Wattenberger
- Review coverage: high
- Confidence note: high

Identifies weak affordances, repeated context entry, isolated answers, and forced generation-review switching as limitations of plain chat.

### 2. Code was our medium for thought

- Original work: https://wattenberger.com/thoughts/code-is-a-medium-for-thought/
- Source ID: `amelia-wattenberger-source-2`
- Published: Date not established in this review
- Type: Interactive essay and embedded prototype
- Author/speaker credit: Amelia Wattenberger
- Review coverage: high
- Confidence note: high

Explores the loss of mental models when code production accelerates beyond understanding, and proposes editable playgrounds for reasoning about a product.

### 3. Chat is AI's command line

- Original work: https://wattenberger.com/thoughts/ai-is-still-in-its-terminal-era/
- Source ID: `amelia-wattenberger-source-3`
- Published: Date not established in this review
- Type: Interactive essay
- Author/speaker credit: Amelia Wattenberger
- Review coverage: high
- Confidence note: high

Uses a travel-planning example to explore direct manipulation, dependent updates, undo, and visible work state alongside conversational direction.

### 4. Code Atlas

- Original work: https://githubnext.com/projects/code-atlas/
- Source ID: `amelia-wattenberger-source-4`
- Published: 2023-06
- Type: First-party research prototype write-up
- Author/speaker credit: Amelia Wattenberger, credited by GitHub Next
- Review coverage: high
- Confidence note: high

A prototype represents model-generated solutions as executable connected code blocks and editable inputs. The project page explicitly labels it an early exploration.

### 5. Bridging the hard and the soft

- Original work: https://wattenberger.com/thoughts/hard-and-soft/
- Source ID: `amelia-wattenberger-source-5`
- Published: Date not established in this review
- Type: Interactive conceptual essay
- Author/speaker credit: Amelia Wattenberger
- Review coverage: high
- Confidence note: high

Develops a framework for combining dependable structure with adaptive content and workflows at multiple scales.

## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Keep a persistent editable working artifact instead of producing detached answers.

Author's proposed interaction direction

**Alternative:** Append a fresh full response for each requested change.

**Tradeoff:** Continuity makes changes easier to inspect; it requires a coherent editing and version model.

Evidence: [Source 1](https://wattenberger.com/thoughts/boo-chatbots/)

Decision ID: `amelia-wattenberger-decision-1`

### 2. Expose inputs and intermediate structure as an editable workflow.

Documented research prototype decision

**Alternative:** Return a polished answer without a model the person can manipulate.

**Tradeoff:** A visible model supports debugging and learning; generated structure can still be wrong and needs validation.

Evidence: [Source 1](https://githubnext.com/projects/code-atlas/)

Decision ID: `amelia-wattenberger-decision-2`

### 3. Let direct edits update dependent constraints and keep work status beside the object.

Demonstrated design proposal

**Alternative:** Translate every small adjustment into another textual instruction.

**Tradeoff:** This suits spatial and relational tasks but can be expensive to generalize across arbitrary requests.

Evidence: [Source 1](https://wattenberger.com/thoughts/ai-is-still-in-its-terminal-era/)

Decision ID: `amelia-wattenberger-decision-3`

### 4. Combine fixed modules with flexible generated elements instead of treating rigidity and adaptability as a binary.

Author's conceptual framework

**Alternative:** Either hard-code the complete workflow or generate the whole interface.

**Tradeoff:** Boundaries can provide reliable behavior; the designer must decide where variation remains understandable.

Evidence: [Source 1](https://wattenberger.com/thoughts/hard-and-soft/)

Decision ID: `amelia-wattenberger-decision-4`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Make the reader experience the argument.

The newer essays place controls and editable examples next to claims about manipulation and exploration.

[Linked example](https://wattenberger.com/thoughts/ai-is-still-in-its-terminal-era/)

### 2. Show a causal sequence rather than only a conclusion.

The code essay walks through research, implementation, observation, and revision before explaining what that cycle taught the developer.

[Linked example](https://wattenberger.com/thoughts/code-is-a-medium-for-thought/)

### 3. Carry one metaphor across several scales.

Hard and soft materials frame distinctions between content, components, modules, and whole workflows.

[Linked example](https://wattenberger.com/thoughts/hard-and-soft/)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Practice the judgment

Take one AI-generated plan. Build a small editable model with three controls, dependencies, undo, and one intentionally invalid state. Compare it with a chat-only version.

**Deliverable:** A working explorable explanation and a short comparison using the same task.

**Evaluate:** Can a learner predict a change before making it? Can they locate and correct the invalid assumption? Does the interface preserve understanding after several revisions?

## Limits and counterexamples

- The essays are arguments and prototypes, not controlled comparisons establishing that chat always loses.
- Code Atlas is a 2023 early-stage exploration; its claims about contemporary model limitations must be read historically.
- The interactive pages were inspected through their published text and controls, not comprehensively usability-tested.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
