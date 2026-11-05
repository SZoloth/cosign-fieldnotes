# Emrecan Dogan

[All studies](../README.md) · product · Reviewed 2026-11-05

Product leader at Glean in the cited works

## Study lens

Study enterprise AI as a shared operating system: common jobs beneath bespoke requests, explicit agent identity and an adoption path that includes administrators.

**Focus:** Enterprise discovery · Shared agents · Permissions · Admin experience · Rollout design

## What was actually reviewed

3 selected public sources. Access varies by work and is stated in each source entry. Verified on the Cosign product nominations roster on 2026-11-05. The corporate posts display “Head of Product”; the profile avoids substituting an unverified title. Transcript lessons concern Dogan’s own answers; interviewer praise and valuation assertions are not treated as evidence of causal impact. Claims that agents learn reliably or avoid repeating mistakes are not independently substantiated; the exercises require observable tests.

This is a bounded source study, not an assessment of the person's entire career. Reported results, team decisions, and editorial interpretations should not be treated as interchangeable evidence.

## Sources

### 1. AI-native products and the future of SaaS

- Original work: https://cieden.com/podcast/ai-native-products-and-the-future-of-saas
- Source ID: `emrecan-cieden`
- Published: Date not established in this review
- Date caveat: No precise publication date confirmed in the retrieved page; inspected 2026-11-05.
- Type: Original interview transcript
- Attribution: Cieden interviewing Emrecan Dogan; speaker-labeled first-person answers.
- Review coverage: Public page opened and relevant body text inspected.
- Read / listen for: Read the sections on requests, deferred jobs, full-stack builders and rollout.



### 2. Introducing independent agents: AI coworkers securely built for autonomous, multiplayer work

- Original work: https://www.glean.com/blog/introducing-independent-agents
- Source ID: `emrecan-independent-2026`
- Published: 2026-06-30
- Type: Bylined product announcement
- Attribution: Emrecan Dogan, Glean; collective product design and corporate claims.
- Review coverage: Public page opened and relevant body text inspected.
- Read / listen for: Inspect identity, accountability, emergency stop and the on-call beta example.



### 3. The collaborative enterprise AI coworker with full meeting context and deep data analysis expertise

- Original work: https://www.glean.com/blog/enterprise-ai-coworker
- Source ID: `emrecan-coworker-2026`
- Published: 2026-06-09
- Type: Bylined product announcement
- Attribution: Emrecan Dogan, Glean; collective product work.
- Review coverage: Public page opened and relevant body text inspected.
- Read / listen for: Study meeting records as reusable context and the stated availability boundary.



## Decisions and tradeoffs

The source supports the documented observation or reported choice. Proposed alternatives, inferred costs, and transfer questions are editorial synthesis unless explicitly attributed.

### 1. Translate bespoke requests into shared jobs

The synthesis step is discovering a common need, not averaging requested features. Dogan describes connecting customer requests at the underlying job level to keep a standardized product.

**Tradeoff:** Generalization can serve more customers but erase important local constraints.

**Limit:** This is a reported practice, not evidence that every request should be generalized.

**Transfer question / exercise:** Take six fictional requests from three teams. Separate requested interface, underlying job, policy constraint and desired outcome. Propose one shared capability and one deliberately unsupported variation. Test the synthesis with representatives of each team.

Evidence: [Source 1](https://cieden.com/podcast/ai-native-products-and-the-future-of-saas)

Decision ID: `emrecan-common-job`

### 2. Keep adoption work in the definition of done

A functioning prototype still needs an enterprise delivery path. Dogan retains admin tools, help content, release notes and staged deployment as necessary work even as builders cross functional boundaries.

**Tradeoff:** Enablement work can slow a visible launch while protecting usable adoption.

**Limit:** His account does not prescribe an unchanged process for every customer or company stage.

**Transfer question / exercise:** Write a release checklist for a search feature: entitlement, admin preview, representative test group, documentation, rollback, ownership and adoption support. Include a failure in which the feature works but the organization cannot deploy it.

Evidence: [Source 1](https://cieden.com/podcast/ai-native-products-and-the-future-of-saas)

Decision ID: `emrecan-rollout`

### 3. Give shared agents explicit identity and accountability

A team agent should have a legible authority model, not implicit access borrowed from an arbitrary person. The announcement specifies provisioned agent identities, inspectable runs and an administrator emergency stop.

**Tradeoff:** Independent identity improves continuity but adds access-review and lifecycle obligations.

**Limit:** These are vendor design claims; no penetration test or independent permission audit was performed.

**Transfer question / exercise:** For an on-call assistant, specify which resources it reads, which actions require review, who owns it, how access expires and how to stop it. Test departure of its original sponsor and a mistaken escalation using synthetic records.

Evidence: [Source 1](https://www.glean.com/blog/introducing-independent-agents)

Decision ID: `emrecan-agent-identity`

### 4. Separate investigation from consequential execution

Define the transition from useful preparation to authorized action. The on-call example gathers context, investigates theories and drafts a fix for review.

**Tradeoff:** Keeping approval can reduce speed while containing irreversible mistakes.

**Limit:** The example is not a guarantee that every autonomous workflow has adequate review or that stated time savings generalize.

**Transfer question / exercise:** Draw a state machine for alert, investigation, draft, approval, execution and verification. At each transition record evidence, authority and retry rules. Inject an ambiguous result and show that the agent checks outcome before repeating an action.

Evidence: [Source 1](https://www.glean.com/blog/introducing-independent-agents)

Decision ID: `emrecan-bounded-autonomy`

### 5. Make meeting output reusable beyond the meeting

Treat decisions as governed artifacts that can support later work. The meeting-notes launch puts transcripts and actions alongside other enterprise sources; sharing makes them reusable knowledge.

**Tradeoff:** Reusable context increases discovery but also raises consent, retention and access questions.

**Limit:** Searchability does not make every meeting appropriate for organization-wide sharing.

**Transfer question / exercise:** Create a decision-record template with source, owner, date, audience, status, expiry and superseding decision. Test finding the current decision after two contradictory meetings. Use fictional records and explicit access boundaries.

Evidence: [Source 1](https://www.glean.com/blog/enterprise-ai-coworker)

Decision ID: `emrecan-shared-artifacts`

## Communication observations

These are observations about the linked written or spoken explanation. Interview structure and edited summaries may also reflect the publisher's work.

### 1. Separate new practices from durable obligations

The interview contrasts emerging builder roles with release responsibilities that remain. Write a change proposal in two columns: what changes and what still has to be true. Attach a failure example to each obligation.

[Linked example](https://cieden.com/podcast/ai-native-products-and-the-future-of-saas)

### 2. Turn a metaphor into inspectable requirements

The independent-agent post decomposes the coworker idea into named operational properties. For any metaphor such as copilot or teammate, translate it into permissions, state, outputs and failure handling.

[Linked example](https://www.glean.com/blog/introducing-independent-agents)

### 3. Describe the broken handoff before the feature

The meeting post moves from decisions lost across tools to a persistent artifact. Explain one lost handoff, its cost and the new artifact that closes it. Then state availability and commercial limits separately.

[Linked example](https://www.glean.com/blog/enterprise-ai-coworker)

## Practice

Original exercises inspired by the sources, not practitioner-prescribed methods.

### 1. Design a governable team agent

Interview three simulated roles: end user, administrator and process owner. Convert their requests into shared jobs and explicit exceptions. Define agent identity, permissible actions, human review and emergency stop. Create reusable decision artifacts with audience and retention rules. Run a pilot plan with adoption, accuracy, unauthorized-disclosure and recovery tests.

**Deliverable:** A service blueprint, permissions matrix and rollout plan for a fictional internal support assistant.

**Evaluate:** Authority is explicit for every consequential step. The rollout includes administrators and support, not only end users. The agent can explain the source and currency of a recommendation. The design remains useful when it must abstain or request approval.

## Limits and counterexamples

- Verified on the Cosign product nominations roster on 2026-11-05.
- The corporate posts display “Head of Product”; the profile avoids substituting an unverified title.
- Transcript lessons concern Dogan’s own answers; interviewer praise and valuation assertions are not treated as evidence of causal impact.
- Claims that agents learn reliably or avoid repeating mistakes are not independently substantiated; the exercises require observable tests.
- This is a reported practice, not evidence that every request should be generalized.
- His account does not prescribe an unchanged process for every customer or company stage.
- These are vendor design claims; no penetration test or independent permission audit was performed.
- The example is not a guarantee that every autonomous workflow has adequate review or that stated time savings generalize.
- Searchability does not make every meeting appropriate for organization-wide sharing.
- A shared agent should see everything. Continuity and collaboration do not justify unrestricted access. Test cross-team data isolation and distinguish the agent’s access from each recipient’s right to receive its output.
- A single standardized product means one workflow for all. Common jobs can coexist with irreducible regulatory or organizational constraints. Standardize the capability while allowing governed variation where evidence requires it.

---

Source works remain with their authors and publishers. This file contains original short paraphrases and analysis. Inclusion does not imply affiliation or endorsement.
