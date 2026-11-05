# Six more designers, five harder questions

This companion adds practice across Benji Taylor, Paul Bakaus, Nate Parrott, Gavin Nelson, Matt Perry, and jhey. Together with the initial collection, the design research now covers 20 nominees, 72 distinct primary artifacts, 86 decisions, and 60 writing or communication techniques. See [design-coverage-addendum.json](design-coverage-addendum.json) for precise scope.

The exercises below are original applications, not assignments prescribed or endorsed by the people studied. Use products, assets, and data you have permission to work with. Reading a repository is not a recommendation to install or run it.

## 1. When should you fix navigation, and when should you replace it?

Read Gavin Nelson’s [Linear Search](https://www.gavin.social/work/linear-search), [Linear Navigation](https://www.gavin.social/work/linear-26), and [Linear Documents](https://www.gavin.social/work/linear-documents) together.

The useful comparison is between the decision contexts, not between screenshots. A targeted intervention and an architectural redesign can both be right at different points.

**Work:** Choose a product with at least three sections and two user roles. Make a constrained proposal that leaves the navigation model intact. Make a second proposal that changes the model. For each, write the job it completes, the pain it leaves unresolved, the expected migration cost, and the evidence that would justify spending more.

**Test:** Give someone a task that crosses sections, a deep link into the middle, and a notification requiring action. Observe whether they can finish without returning to a starting screen. Do not narrate the structure while they test it.

**Decision note:** Explain which proposal you would ship first and what observation would trigger the second. A smaller scope only counts as successful if it completes something meaningful.

## 2. Is the problem missing vocabulary, missing grounding, or missing controls?

Compare Benji Taylor’s [Annotating for agents](https://benji.org/annotating), Paul Bakaus’s [The Curse of Cursor for X](https://www.paulbakaus.com/the-curse-of-cursor-for-x/), and Nate Parrott’s [Claude Design account](https://claude.com/blog/how-the-product-designer-who-built-claude-design-uses-it-to-explore-ideas-before-building-them).

These are three different problems that can hide inside the same complaint: “It does not look right.”

**Work:** Pick one component and write three pieces of feedback:

1. Name the desired change precisely, without pointing at an element.
2. Identify the exact target and state, but keep the requested change vague.
3. Supply both, then expose a direct control for the final adjustment.

**Test:** Ask a collaborator or permitted tool to act on each version. Record clarification requests, wrong-target edits, unintended changes, and whether the last adjustment is faster to describe or manipulate. Keep inputs and requested outcome constant.

**Decision note:** Separate the target, the desired transformation, the protected invariant, and the acceptance check. Do not judge the methods only by whether the first generated screenshot looks attractive.

## 3. What happens between the frames you usually test?

Read Matt Perry’s [hover investigation](https://motion.dev/magazine/collision-detection-in-hover-detection), jhey’s [parallax tutorial](https://dev.to/jh3y/parallax-powered-by-css-custom-properties-3p83), and Benji Taylor’s [Liveline](https://benji.org/liveline).

**Work:** Build a small interaction and create a hostile-input matrix before polishing it. Include rapid traversal, direction reversal, interrupted motion, missed or delayed updates, resized containers, and a user who requests reduced motion. Add one relevant non-pointer input mode.

**Test:** For each case, distinguish four outcomes: missed intent, misleading presentation, incorrect state, and slow rendering. A frame-rate number cannot tell you which of these occurred.

**Decision note:** State what approximation your implementation uses and where it fails. Examples might include sampled input, a simplified collision shape, an interpolated value, or a responsive breakpoint. State the fallback when the approximation is no longer safe.

## 4. Which belief deserves a prototype?

Pair Nate Parrott’s [Beyond Prototyping](https://www.aidesignfieldguide.com/articles/nate-parrott) with Paul Bakaus’s [shader process account](https://www.paulbakaus.com/carving-shaders-out-of-claude-code/).

**Work:** Before building, classify your main uncertainty:

- Is the capability technically possible?
- Can the interaction be understandable?
- Will someone choose to use it?
- Can it run acceptably under real constraints?

Design a different small experiment for each question. Do not use an impressive answer to the first as evidence for the third. Identify which work you would throw away if the belief fails.

**Test:** Give the rough prototype a job in a real workflow. Record what the participant does without prompting, then separately test technical and performance constraints. Define stop conditions before you become attached to the implementation.

**Decision note:** Include the cheapest experiment you wish you had run earlier and whether your conclusion depends on today’s model or browser capabilities.

## 5. Can a quality check explain what it cannot judge?

Compare the [Impeccable README](https://github.com/pbakaus/impeccable), Katie Dill’s [quality-practices interview](https://creatoreconomy.so/p/how-stripe-crafts-quality-products-katie-dill), and Rauno Freiberg’s [interaction-design essay](https://rauno.me/craft/interaction-design).

**Work:** Create three explicit checks for one flow, such as an identifiable focus target, a reversible action, or an accurate visible state. Add a human walkthrough of the complete job. Deliberately produce one version that passes the checks but is still poor.

**Test:** Ask reviewers to explain the failure without inventing another universal rule. Identify whether the problem concerns context, intent, learned behavior, or the composition of individually acceptable parts.

**Decision note:** Describe one justified exception, the evidence required to allow it, and who should review it. A quality system should make disagreement inspectable rather than hide it behind an aggregate score.

## A practical review form

For each exercise, keep a short record with these fields:

- **Observation:** What happened, with a recording or reproducible case?
- **Decision:** What did you change?
- **Alternative:** What credible option did you reject?
- **Constraint:** What made the choice appropriate here?
- **Evidence:** What improved, and what did not?
- **Cost:** What maintenance, complexity, or attention did the change add?
- **Reversal:** What new evidence would make you choose differently?

Keep source claims separate from your experiment results. The library gives you hypotheses and examples, not permission to claim that another team’s outcome will transfer to your product.
