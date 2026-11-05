# Ryo Lu

[All studies](../README.md) · design · Reviewed 2026-11-05

Design practitioner · 3 public works

## Study lens

Make AI useful through the product's existing objects and contexts, while preserving the user's ability to understand and reshape the system.

**Focus:** Composable product systems, contextual AI, and human agency

## What was actually reviewed

Three primary artifacts reviewed: one product essay, one repository README, one personal essay. Product decisions and analyst interpretations are labeled.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. The design thinking behind Notion AI

- Original work: https://www.notion.com/blog/the-design-thinking-behind-notion-ai
- Source ID: `ryo-lu-source-1`
- Published: 2023-09-21
- Type: First-person product design essay
- Author/speaker credit: Ryo Lu
- Review coverage: high
- Confidence note: high

A historical account of integrating AI horizontally across Notion's blocks, packaging common tasks, and changing available actions according to the current page and selection.

### 2. ryOS

- Original work: https://github.com/ryokun6/ryos
- Source ID: `ryo-lu-source-2`
- Published: Date not established in this review
- Type: Public source repository and README
- Author/speaker credit: Ryo Lu / ryOS contributors
- Review coverage: high
- Confidence note: high

A desktop-like environment with a persistent virtual filesystem, multiple applications, and an assistant. Read the architecture as an inspectable product artifact, not as proof that its interaction model is superior.

### 3. augmenting human intellect

- Original work: https://ryo.lu/journal/augmenting-human-intellect
- Source ID: `ryo-lu-source-3`
- Published: 2026-10-29
- Type: Personal essay
- Author/speaker credit: Ryo Lu
- Review coverage: high
- Confidence note: high

Argues for AI tools that increase people's understanding, expression, and control, rather than measuring progress solely by unattended output.

## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Package common AI actions while retaining a customizable underlying system.

Documented product decision

**Alternative:** Expose only an unrestricted prompt or only fixed single-purpose features.

**Tradeoff:** Defaults lower the entry cost; customization preserves flexibility but adds concepts and maintenance.

Evidence: [Source 1](https://www.notion.com/blog/the-design-thinking-behind-notion-ai)

Decision ID: `ryo-lu-decision-1`

### 2. Use page and selection state to prioritize drafting, continuing, extracting, or editing.

Documented product decision; downside is analysis

**Alternative:** Show the same global AI menu everywhere.

**Tradeoff:** Context reduces repeated explanation; context mistakes can hide the action a person wants.

Evidence: [Source 1](https://www.notion.com/blog/the-design-thinking-behind-notion-ai)

Decision ID: `ryo-lu-decision-2`

### 3. Give the assistant shared application and file context inside a persistent environment.

Observed artifact structure; tradeoff is analysis

**Alternative:** Make chat the only place work exists.

**Tradeoff:** Stable objects can support continuity; a desktop metaphor introduces navigation and coordination costs.

Evidence: [Source 1](https://github.com/ryokun6/ryos)

Decision ID: `ryo-lu-decision-3`

### 4. Evaluate empowerment through what the person can understand and change.

Author's stated design position

**Alternative:** Optimize only the volume of work performed without the person.

**Tradeoff:** Meaningful participation may require interaction time that a pure automation metric would count as overhead.

Evidence: [Source 1](https://ryo.lu/journal/augmenting-human-intellect)

Decision ID: `ryo-lu-decision-4`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Move from foundational model to concrete states.

The Notion essay first explains blocks, then walks through empty pages, populated pages, selections, and database use.

[Linked example](https://www.notion.com/blog/the-design-thinking-behind-notion-ai)

### 2. Use historical contrast to sharpen a present choice.

The augmentation essay links earlier human-computer ideas to a current distinction between participating in thought and waiting for output.

[Linked example](https://ryo.lu/journal/augmenting-human-intellect)

### 3. Turn an abstraction into inspectable structure.

The ryOS README enumerates applications, persistent storage, and project directories rather than describing the product only with a slogan.

[Linked example](https://github.com/ryokun6/ryos)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Practice the judgment

Choose a repeated workflow. Define five durable object types and three meaningful states for each. Design contextual AI actions for two states, plus an escape hatch for a custom request.

**Deliverable:** An object map, two interactive screens, and a decision log explaining which context the AI receives.

**Evaluate:** Can another person predict the action from the selected object? Can they compare, revise, and undo the result? Can they explain what changed without reopening a transcript?

## Limits and counterexamples

- The Notion article describes a 2023 design, not the current product specification.
- The ryOS repository was read, not installed or functionally tested.
- The augmentation essay is a normative argument, not an empirical outcome study.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
