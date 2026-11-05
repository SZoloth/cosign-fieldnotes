# Mario Zechner

[All studies](../README.md) · product · Reviewed 2026-11-05

Creator of pi; programmer and open-source builder

## Study lens

Study a personal tool built around explicit constraints, then challenge which constraints survive a multi-user or high-stakes setting.

**Focus:** Agent harnesses · Scope control · Observability · Portability · Review capacity

## What was actually reviewed

4 selected public sources. Access varies by work and is stated in each source entry. Verified on the Cosign product nominations roster on 2026-11-05. Nomination is a discovery signal, not an independently validated quality ranking. All four texts are authored essays. Product claims and benchmark interpretations remain the author’s account. The linked GitHub package could not be fetched through the research tool. No current code audit or current feature inventory is claimed. Exercises, tradeoff analysis and counterexamples are editorial synthesis.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. What I learned building an opinionated and minimal coding agent

- Original work: https://mariozechner.at/posts/2025-11-30-pi-coding-agent/
- Source ID: `mario-pi-2025`
- Published: 2025-11-30
- Type: Authored technical essay
- Attribution: Mario Zechner; personal implementation account.
- Review coverage: Public page opened and relevant body text inspected.
- Read / listen for: Read the toolset, visibility requirements, package boundaries and benchmark caveats as a dated design record.



### 2. What if you don't need MCP at all?

- Original work: https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/
- Source ID: `mario-mcp-2025`
- Published: 2025-11-02
- Type: Authored technical essay
- Attribution: Mario Zechner; worked example, not a universal protocol comparison.
- Review coverage: Public page opened and relevant body text inspected.
- Read / listen for: Follow the browser-task example from requirements to tool inventory and composable outputs.



### 3. Armin is wrong and here's why

- Original work: https://mariozechner.at/posts/2025-11-22-armin-is-wrong/
- Source ID: `mario-state-2025`
- Published: 2025-11-22
- Type: Authored technical argument
- Attribution: Mario Zechner responding to Armin Ronacher; the response is one side of a debate.
- Review coverage: Public page opened and relevant body text inspected.
- Read / listen for: Separate recoverable application state from opaque provider state.



### 4. Thoughts on slowing the fuck down

- Original work: https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/
- Source ID: `mario-slow-2026`
- Published: 2026-03-25
- Type: Authored opinion essay
- Attribution: Mario Zechner; explicitly anecdotal industry observations.
- Review coverage: Public page opened and relevant body text inspected.
- Read / listen for: Read the review-capacity argument and the limits of narrow evaluation functions.



## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Build around a visible, stable kernel

A feature list is less useful than an explicit contract about what the operator can inspect. Zechner prioritized inspectable context and sessions, separated API, agent loop and terminal UI, and used four default tools.

**Tradeoff:** A smaller core transfers some integration work to users.

**Limit:** This describes the November 2025 design, not a verified inventory of the current release.

**Transfer question / exercise:** Choose an agent workflow. Draw its state, tools and UI separately. Mark every hidden input. Define a versioned trace format and show how a reviewer would reproduce one failure without reading application source.

Evidence: [Source 1](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/)

Decision ID: `mario-visible-kernel`

### 2. Price tool overhead against a concrete task

Compare tool exposure and result handling for the job, not the prestige of an integration standard. The browser example replaces broad server interfaces with a small script set; outputs can be composed outside model context.

**Tradeoff:** A narrow interface saves context but can make discovery and maintenance harder.

**Limit:** The article itself allows that both approaches can be efficient; its token counts are historical, task-specific measurements.

**Transfer question / exercise:** For five recurring tasks, list tool descriptions loaded, output retained, authentication requirements and maintenance owner. Compare two implementations on successful completion, not token reduction alone. Use authorized test accounts and synthetic data.

Evidence: [Source 1](https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/)

Decision ID: `mario-tool-economics`

### 3. Make recovery a product requirement

Identify what the application must reconstruct before choosing who hosts its state. Zechner distinguishes local observable logs from provider-private caches and execution environments; losing necessary remote artifacts is more serious than losing optional traces.

**Tradeoff:** Owning recovery state adds storage, synchronization and lifecycle work.

**Limit:** His API observations are dated opinions; test present provider contracts rather than assuming permanent limitations.

**Transfer question / exercise:** Create a failure matrix: expired session, lost container, provider switch, interrupted write. For each, specify authoritative data, recovery action, user-visible loss and a test. Never store credentials in the recovery log.

Evidence: [Source 1](https://mariozechner.at/posts/2025-11-22-armin-is-wrong/)

Decision ID: `mario-own-state`

### 4. Treat review capacity as a throughput constraint

More generated output is not equivalent to more trustworthy product change. He recommends bounded, evaluable tasks and limiting generated code to what a human can review. He warns narrow objectives omit other quality dimensions.

**Tradeoff:** Deliberate review reduces raw output but preserves understanding.

**Limit:** The essay does not establish a causal industry-wide decline in software quality or prove all autonomous development fails.

**Transfer question / exercise:** For a week, track changes accepted, review time, regressions, duplicated concepts and rollback time. Compare a small-diff policy with your baseline. Inspect failures that tests passed. Decide whether speed improved after review costs.

Evidence: [Source 1](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)

Decision ID: `mario-review-budget`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Use exclusions as the outline

The pi essay organizes several sections around features deliberately left out. Write three non-goals with the rejected alternative, the user cost of exclusion and the condition that would reverse the choice.

[Linked example](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/)

### 2. Start with the smallest executable example

The MCP argument defines a specific browser workload before comparing interfaces. Replace a broad claim with one repeatable task, two implementations and a result readers can inspect.

[Linked example](https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/)

### 3. Concede a narrower truth

The state essay explicitly returns to where the opposing perspective is useful. Write the strongest version of an objection, concede its valid part, then restate the smaller claim you can defend.

[Linked example](https://mariozechner.at/posts/2025-11-22-armin-is-wrong/)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Design an inspectable agent workflow

Select a reversible, low-risk task and define the human acceptance decision. Specify the minimum tools, persisted state, permissions and artifacts. Run a baseline and a reduced-tool version on the same cases. Inject one interrupted run and show how work resumes without repeating external actions. Record a reason to add complexity and a reason to refuse it.

**Deliverable:** A two-page architecture decision record, one synthetic run trace and one recovery drill.

**Evaluate:** Another person can identify the source of every consequential action. The recovery drill preserves correctness, not just conversation continuity. Evaluation includes task success, review effort and unhandled failure modes. No unrestricted access is justified merely by simplicity.

## Limits and counterexamples

- Verified on the Cosign product nominations roster on 2026-11-05. Nomination is a discovery signal, not an independently validated quality ranking.
- All four texts are authored essays. Product claims and benchmark interpretations remain the author’s account.
- The linked GitHub package could not be fetched through the research tool. No current code audit or current feature inventory is claimed.
- Exercises, tradeoff analysis and counterexamples are editorial synthesis.
- This describes the November 2025 design, not a verified inventory of the current release.
- The article itself allows that both approaches can be efficient; its token counts are historical, task-specific measurements.
- His API observations are dated opinions; test present provider contracts rather than assuming permanent limitations.
- The essay does not establish a causal industry-wide decline in software quality or prove all autonomous development fails.
- Minimal tools imply safe autonomy. Few tools can still grant enormous authority. Shell access is not a safety boundary. The 2025 no-guardrails choice is unsuitable as a general enterprise security recommendation. Evaluate least privilege, isolation, approvals and auditability separately.
- A narrow benchmark proves a general workflow. A successful coding or speed task can conceal integration, accessibility, maintainability and recovery failures. Add release-level acceptance tests before adopting the workflow broadly.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
