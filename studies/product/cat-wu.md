# Cat Wu

[All studies](../README.md) · product · Reviewed 2026-11-05

Product leader; work studied on Claude Code

## Study lens

Making product judgment concrete through prototypes, evaluations, and repeated tests of changing model capabilities.

**Focus:** AI product judgment · Evaluations · Prototyping · Capability change

## What was actually reviewed

3 selected public sources. Access varies by work and is stated in each source entry. Most evidence is retrospective self-report from a vendor or interviews, not independent causal evaluation. The Yang page provides only partial written access. Do not attribute its unpublished takeaways or unreviewed audio to this research. The bylined essay is suitable for studying Wu's published prose. Interviews demonstrate spoken explanation; host titles and summaries are not her writing. No current-employment assertion is made; roles are recorded as they appeared in the dated artifacts.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. Product management on the AI exponential

- Original work: https://claude.com/resources/articles/product-management-on-the-ai-exponential
- Source ID: `cw-exponential`
- Published: 2026-03-19
- Type: Bylined first-person essay
- Attribution: Explicitly credited to Cat Wu. Describes collective Claude Code work and credits specific colleagues; not evidence she personally invented every feature.
- Review coverage: Article body read. Historical title is Head of Product for Claude Code; this entry does not assert her current employer.
- Read / listen for: A repeated Excalidraw test anchors the argument. Inspect the sections on demos/evals, revisiting features, and simplifying implementations.



### 2. Claude Code: Anthropic's Agent in Your Terminal

- Original work: https://www.latent.space/p/claude-code
- Source ID: `cw-latent`
- Published: 2025-05-07
- Type: Original interview and speaker-labeled transcript
- Attribution: Cat Wu and Boris Cherny interviewed by Latent Space. Spoken primary testimony, not a Wu-authored essay. Check speaker labels: the terminal/product architecture argument is principally Cherny's.
- Review coverage: Original transcript read at relevant sections. It contains transcription errors, including variants of the product name.
- Read / listen for: 03:28–06:57 for joining the project and PM responsibilities; 16:49 for human review; 01:09:21–01:10:00 for simplification.



### 3. Inside Claude Code: How an AI Native Team Actually Works

- Original work: https://creatoreconomy.so/p/inside-claude-code-how-an-ai-native-actually-works-cat-wu
- Source ID: `cw-yang`
- Published: 2025-09-14
- Type: Original interview landing page and public editorial takeaways
- Attribution: Peter Yang's publication and framing; Cat Wu is the interview guest. The visible takeaways contain attributed remarks but are not a bylined Wu article.
- Review coverage: Public introduction, chapter list, and first two takeaways read. Remaining written takeaways are paywalled; full audiovisual episode was not reviewed.
- Read / listen for: Public takeaways on prototypes and engineer ownership. Chapters point to 05:00 ownership, 10:04 feedback, and 19:58 evaluations; these timestamps are navigation, not independently reviewed evidence.



## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Make a working prototype the decision object

Wu describes a team moving from document-first planning toward demos and evaluations. A plugins prototype helped validate UX; agent-team evaluations exposed where the feature worked and failed. Team operating model described by Wu; individual examples credit colleagues.

**Tradeoff:** Earlier observable feedback versus the risk of leaving rationale and cross-team obligations undocumented.

Evidence: [Source 1](https://claude.com/resources/articles/product-management-on-the-ai-exponential) · [Source 2](https://creatoreconomy.so/p/inside-claude-code-how-an-ai-native-actually-works-cat-wu)

Decision ID: `cw-prototype-first`

### 2. Retire scaffolding when the model improves

The team removed reminders that had compensated for unreliable todo completion. Separately, users manually combining Code and Chrome revealed a workflow worth integrating. Reported collective product decisions, not sole-authorship claims.

**Tradeoff:** Simpler interaction and implementation versus revalidation costs whenever model behavior changes.

Evidence: [Source 1](https://claude.com/resources/articles/product-management-on-the-ai-exponential)

Decision ID: `cw-remove-scaffolding`

### 3. Give strong product engineers room to decide

Wu says she concentrates on clearing legal, marketing, and other obstacles while engineers originate much of the roadmap. The team discusses the capabilities future models should support, rather than treating a precise forecast as certain. Wu's account of her PM responsibilities and shared planning.

**Tradeoff:** Fast distributed decisions versus dependence on experienced builders with aligned goals.

Evidence: [Source 1](https://www.latent.space/p/claude-code)

Decision ID: `cw-light-touch`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Use one recurring test to explain change

The Excalidraw opening makes an abstract capability trend visible through the same task across releases.

[Linked example](https://claude.com/resources/articles/product-management-on-the-ai-exponential)

### 2. Describe role boundaries through actual work

Rather than presenting PM as universal authority, Wu names the obstacles she clears and distinguishes her contribution from engineers' product thinking.

[Linked example](https://www.latent.space/p/claude-code)

### 3. Connect an operating principle to observable behavior

The public interview takeaways connect engineer ownership to internal adoption and progressive release, giving the audience something to examine rather than a job-title slogan.

[Linked example](https://creatoreconomy.so/p/inside-claude-code-how-an-ai-native-actually-works-cat-wu)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Turn one uncertain requirement into a test

Choose one uncertain workflow, such as finding a reusable document. Write ten realistic tasks, including an ambiguous request, a nonexistent item, and an item the user cannot access. Build the smallest testable prototype. Ask users to complete the tasks without explanation. Record completion, correction effort, and unsafe or misleading outcomes separately. Write the decision you would make before adding another feature.

**Deliverable:** A runnable prototype, a ten-case evaluation sheet, and a one-page ship/change/stop decision.

**Evaluate:** Tests represent the intended users rather than only the builder. A failed safety-critical case is not averaged away by easy successes. The next iteration follows observed behavior.

### 2. Keep a capability-change ledger

List five workarounds in an AI app and the failure each compensates for. Save representative inputs and acceptance criteria. After a model change, retest before removing a workaround. Publish a short note separating measured improvement, unresolved failures, and the change you propose.

**Deliverable:** A versioned before/after test log with an explicit rollback condition.

**Evaluate:** Comparison uses the same tasks and criteria. Removal follows evidence rather than a model-release announcement.

## Limits and counterexamples

- Most evidence is retrospective self-report from a vendor or interviews, not independent causal evaluation.
- The Yang page provides only partial written access. Do not attribute its unpublished takeaways or unreviewed audio to this research.
- The bylined essay is suitable for studying Wu's published prose. Interviews demonstrate spoken explanation; host titles and summaries are not her writing.
- No current-employment assertion is made; roles are recorded as they appeared in the dated artifacts.
- undefined Fast coding is not evidence of complete automation: Wu explicitly notes substantial human code review.
- undefined Analyst transfer limit: an expert internal user population can be an unusually favorable test bed. Verify external users, accessibility needs, permission boundaries, and deployment risks separately.
- undefined Analyst counterexample: a rapid prototype cannot replace an auditable specification for a consequential integration, data migration, or permission change.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
