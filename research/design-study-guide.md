# Design as a set of consequential choices

This study covers fourteen people visible on [Cosign’s Design nominations page](https://cosign.co/awards/design), using fifty distinct primary artifacts. It is a selective learning library, not a ranking or a claim to have studied every nominee. Read `coverage.json` for scope and `core.json`, `craft.json`, and `supplementary.json` for source-linked profiles.

The useful question is not “whose taste should I copy?” It is “what choice did this person make, under which constraints, and when would the opposite choice be better?”

## 1. Stable product or generated work surface?

Read Karri Saarinen, Amelia Wattenberger, Ryo Lu, and Emmet Connolly together.

- Karri supplies a case for coherent product form and deliberate choices as generation becomes cheaper.
- Amelia’s prototypes investigate flexible, editable representations rather than making chat the universal interface.
- Ryo’s Notion account shows contextual AI actions inside an existing document model.
- Emmet’s billing scenario explains why a compact form can be better than serial conversation.

These are not mutually exclusive rules. A repeated expert task benefits from predictable controls. An unfamiliar or variable task may benefit from an interface assembled around the current problem. A generated surface still needs stable rules for state, permission, correction, and recovery.

**Practice:** Build one workflow three ways: conventional controls, chat, and a mixed interface. Keep the underlying task and data fixed. Compare completion, correction cost, discoverability, and confidence about what will happen next. Record which findings depend on model reliability.

## 2. Animation is a state transition, not an ornament

Read Rauno Freiberg, Emil Kowalski, Devon Govett, Raphael Salaja, and Samuel Kraft together.

The shared concern is behavior under real input: repeated use, interruption, gesture cancellation, keyboard input, reduced motion, and navigation. Their implementation choices differ. A visually compelling first run is only one test case.

**Practice:** Choose a sheet or panel. Test open–close–open interruption, rapid repeated activation, escape, touch drag, keyboard navigation, reduced motion, reload, and back/forward. Compare an expressive version with a minimal version. Treat neither JavaScript gestures nor native browser behavior as automatically superior; establish which failure cases each solves.

## 3. Make quality inspectable

Read Katie Dill, Brian Lovin, and Steve Ruiz together.

Katie’s operating practices expose end-to-end friction. Brian’s work examines how builders and agents can use feedback and evaluation. Steve demonstrates that a seemingly small interface question can become a concrete measurement or state-machine problem.

**Practice:** Start from one complaint such as “this feels hard to click” or “the result is hard to verify.” Translate it into an observable failure, instrument a small experiment, and retain a qualitative review. Do not turn a convenient proxy into the entire definition of quality.

Useful evidence includes successful task completion, recoverable errors, input-mode parity, observed hesitation, and whether the output actually solves the original problem. A beautiful screenshot and a passing automated check are both partial views.

## 4. Ownership creates obligations

Read shadcn, Devon Govett, and Samuel Kraft together.

Source ownership makes local modification possible, but also assigns responsibility for upgrades, accessibility, and drift. Behavior primitives reduce repeated work, but a wrapper or composed component can still break the contract. The learning target is not simply “copy code” or “use a library.” It is understanding which layer owns each invariant.

**Practice:** Modify one component from a local source-owned system. Document the upstream behavior contract, the local change, the keyboard and focus tests, and the future update strategy. Explain why the customization belongs at that layer.

## 5. Explain decisions so another person can reuse them

Read Josh Puckett, Emmet Connolly, Raphael Salaja, and Samuel Kraft as communicators.

Several repeatable techniques appear in the sample:

- Show a specific failure before introducing an abstraction.
- Hold the example constant while varying one parameter.
- Describe a rejected alternative rather than presenting the result as inevitable.
- Give readers a test they can apply to their own work.
- Mark the boundary of the advice: historical API, capability assumption, context, or untested claim.

**Practice:** Write a 500-word decision note around an interface you actually changed. Include the observed problem, two credible options, the chosen constraint, a before/after demonstration, the test result, and the condition that would make you reverse the choice. Remove general praise that is not doing explanatory work.

## A short sequence for deliberate practice

1. Choose one workflow and establish its baseline. Do not select a different project for every exercise.
2. Prototype two meaningfully different representations and test the same task.
3. Stress the preferred interaction through interruption, repetition, and alternate input modes.
4. Walk the entire journey, including discovery and recovery outside the main screen.
5. Instrument the most consequential failure and compare the change against the baseline.
6. Write the decision note, including what remains uncertain and the cost of maintaining the result.

The final artifact should be an improved workflow with an evidence trail, not a collection of borrowed visual effects.

## Source and attribution boundaries

Dates are retained only when visible or corroborated; live documentation may be undated. Sources include personal essays, implementation tutorials, official project documentation, and original interviews. A speaker explaining team work is not credited as its sole maker. Company-reported lifts are not treated as independent causal evidence. Historical examples teach reasoning, not exact current APIs. No live demos, production metrics, or assistive-technology behavior were independently tested for this collection.

All prose in the research files is original educational summary and analysis. Linked works remain the property of their authors and projects. No endorsement or affiliation is implied.
