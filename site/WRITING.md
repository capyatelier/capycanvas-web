# Writing the Capy Canvas manual

This guide sets the language, structure and tone of everything Capy Canvas
publishes for artists: the manual, the website, release notes, store listings and
the app's own text. All of it must follow this guide. Sections 1 to 4 and 8 to 11
cover the manual, section 12 covers release notes and store copy, and the words,
cadence and punctuation rules in sections 5 to 7 apply to every text. Every
English text is checked against it before it is published, and translations
follow it too. Read it in full before writing your first page, then keep the
checklist for your kind of text open while you work.

## 1. The reader

The reader is a working artist. They paint, ink, retouch and grade photos for a
living or with real commitment, and they have used digital art software for
years. They know what a clipping mask, a blend mode, a curve, a soft proof or
pen pressure is. They do not know how software is built, and they don't need to.

They are new to Capy Canvas. They come to the manual from a search or from the
sidebar with one question, read one section, and go back to their drawing. They
rarely read a page from top to bottom, and almost never read the manual in order.

Three things follow from this:

- **Write for lookup.** Every section has to make sense on its own.
- **Assume art knowledge.** Never explain what an artist already knows.
- **Leave out engineering.** Describe what the artist sees and does, never how
  the app produces it.

## 2. What the manual is for

The manual tells the reader what a feature does, where to find it, what they
will see on screen, and what rules and limits apply. That is all.

It does not:

- teach drawing, painting, color theory or photography;
- persuade anyone to use the app, or praise a feature;
- explain how the app works inside;
- compare Capy Canvas with other software;
- give opinions about how to work.

Tutorials are separate. A tutorial walks through one project from start to
finish and may explain why a step comes where it does. Section 9 covers them.

## 3. Pages

### One page, one place in the app

A manual page covers one place in the app: a panel, a tool, a menu, a dialog or
a settings group. Each `##` section on the page covers one feature in that
place. The reader finds things by where they are in the app, so the manual is
organized the same way.

| Page | Sections |
| --- | --- |
| Layers panel | Header · Layer rows · Footer buttons · Swipes and holds · Layer menu |
| Layer settings | Alpha lock · Lock editing · Clip to Layer Below · Use as reference · Pass Through · Color mode |
| Crop | Cropping · Ratio · Overlay · Straightening · Revealing cropped pixels |
| Export | Destination · Format · Metadata · Transparency · Export Again |

Within its scope a page is complete. Cover every feature in that place,
including the small ones. A page stays short because each entry is short, not
because features are left out.

### Titles and headings

Name pages and sections after the thing, using the app's own label where one
exists. Use a noun or a gerund. Never use a question, a slogan or a pun.

| Avoid | Use |
| --- | --- |
| Hide, reorder and fade | Hiding layers · Reordering layers · Layer opacity |
| Protect and organize | Lock editing |
| What is a mask? | Masks |
| Go deeper with brushes | Brush settings |
| Limit where it applies | Masking a filter |
| Make it yours | Customizing |

Headings on one page don't need to match each other in shape. If one feature is
a single control and the next is a whole workflow, let the headings show that.

### Length

| Unit | Length |
| --- | --- |
| Page | 150–450 words, not counting tables |
| Section | 1–6 sentences, plus an optional list of routes or settings |
| Settings entry | 1–2 sentences |
| Procedure | 2–6 numbered steps |

A section with one sentence is fine. Don't add a second sentence to balance it.

### Frontmatter

Each page has a `title`, a `description` and, optionally, a `navTitle` and a list
of `related` pages. The description is one plain sentence saying what the page
covers. It appears in search results and link previews.

> **Description:** The Crop tool, crop ratios and overlays, straightening, and getting cropped pixels back.

Not:

> **Description:** Learn how to frame your photos perfectly with Capy Canvas's flexible cropping tools.

## 4. Sections

Each section does up to four jobs, always in this order. Leave out any job that
has nothing to say.

1. **What it does.** One sentence, usually starting "You can …".
2. **How to get there.** The route or routes, exactly as labeled in the app.
3. **What you'll see.** The indicator on screen, and where it appears.
4. **Rules.** Limits, exceptions, disabled states and interactions, each stated flatly.

You may add one sentence on when the feature is useful. Put it after the first
job, and only if a working artist could miss the point. Most sections don't need it.

A complete section:

> ## Clip to Layer Below
>
> You can clip a layer to limit it to the painted area of the layer below.
>
> Do one of the following:
>
> - Select the layer, then select **Clip to Layer Below** in the Layers panel header.
> - Open the layer's menu and choose **Layer Settings > Clip to Layer Below**.
> - To add a new clipped layer, choose **New > New clipping layer** from the layer's menu.
>
> A rail to the left of the thumbnails joins clipped layers to their base. In the
> layer's menu, the item names the base, for example "Clipped to Ribbon". Moving
> the base layer moves its clipped layers with it.
>
> You can't clip to a group set to Pass Through. Turn off Pass Through on the group first.

Every sentence in that section answers something a reader might look up. None
of them is there to connect, summarize or encourage.

### Job 1: what it does

Start with "You can" and a plain verb. Say what the feature does to the
drawing, not what it means to the artist.

| Avoid | Use |
| --- | --- |
| Lock editing gives you peace of mind while you work on other layers. | You can lock a layer so that it can't be painted on or changed. |
| Quick Mask is a powerful way to refine selections with your brushes. | You can paint a selection with any brush in Quick Mask. |
| Command search makes every feature just a few keystrokes away. | You can find and run any command by typing its name. |

### Job 2: how to get there

Give every route the reader might use: the menu path, the panel button, the
Sketch title bar drawer, the canvas bar button, the key, the gesture. When there
are two or more, list them after "Do one of the following:".

> Do one of the following:
>
> - Choose **Edit > Search Commands…**.
> - Press **Ctrl+K**.

Write menu paths with `>` between levels, in bold as one unit:
**Layer > New > New clipping layer**. Write keys in bold with `+`: **Ctrl+Shift+Z**.

Name panels and their parts the way the app does. Say where a button is when
the reader might not find it: "in the Layers panel header", "at the bottom of
the Layers panel", "in the title bar in Sketch".

Each workspace arranges tools and panels differently, and readers can rearrange
them. Don't write a paragraph for each workspace. Give the menu path or command
first, because it works everywhere, then add workspace routes as list items.

| Avoid | Use |
| --- | --- |
| In Paint, the Filters panel is in the right column. In Sketch, the Filters button in the title bar opens a drawer instead, and in Photo you can find Filters next to Properties. | Do one of the following: · Open the **Filters** panel. · Choose a filter from the **Filter** menu. · In Sketch, select **Filters** in the title bar. |

### Job 3: what you'll see

Tell the reader what changes on screen and where, so they know the action worked.

> When a layer is locked, a lock icon appears on its row.

> While you edit a mask, a bar labeled "Editing *layer* mask" appears at the bottom of the canvas.

Describe the indicator by its shape and position. Don't describe colors that
change with the theme.

### Job 4: rules

State limits, exceptions and interactions as plain facts. Use "only", "can't",
"if" and "while". One rule per sentence.

> Apply Mask works only on paint layers.

> If you add a filter while a selection is active, the selection becomes the filter's mask.

> You can't clip to a group set to Pass Through.

Use a **Memo** for the one thing most likely to surprise a reader, written as a
blockquote that starts with `**Memo:**`. Use at most one per section, and only
when the fact would otherwise be lost among routes.

> **Memo:** Fingers never draw. Use a pen or a mouse to draw on the canvas.

### Procedures

Use numbered steps when a task needs several controls in a fixed order. Start
with "To …:" and keep each step to one action.

> To limit a filter to part of a layer:
>
> 1. Select the area with a selection tool.
> 2. Select **Add Filter** at the bottom of the Layers panel and choose a filter.
>
> The selection becomes the filter's mask.

Don't number a single action, and don't wrap a procedure in narrative.

### Settings references

A settings group gets one image of the group, cropped to the panel, followed by
one `###` entry per control in the order they appear on screen. Each entry has
one or two sentences: what the control does, and its range or choices when that
affects how it is used. Cover every control, including obvious ones. Readers
look them up.

> ### Hardness
>
> Sets how sharp the edge of the brush tip is. Lower values give a softer edge.
>
> ### Spacing
>
> Sets the distance between dabs along a stroke, as a percentage of the brush size.

## 5. Words

### Control labels

Write every control label exactly as the app shows it, in bold, including
capitalization and the trailing "…". **Revert to Original Photo**, not
"Revert to original". **Clip to Layer Below**, not "clip to the layer below".
Never invent a name for something the app doesn't name. Describe it by
position instead: "the button at the top of the Layers panel".

In translated pages, use the app's own label in that language, word for word.

### Verbs

Readers use a mouse, a pen or a finger. Use verbs that fit all three.

| Action | Verb |
| --- | --- |
| A menu command | **Choose** **File > Export…** |
| A button, tab, layer, list item or option | **Select** **New layer** |
| A switch or checkbox | **Turn on** / **Turn off** **Alpha lock** |
| A key | **Press** **Ctrl+Z** |
| Press and hold | **Hold** the layer |
| Move while pressing | **Drag** the layer |
| A touch gesture | **Tap** with two fingers |
| Mouse only | **Right-click** |

Write keys as on Windows and Linux. The Quickstart and Keyboard shortcuts pages
say once that Command replaces Ctrl on macOS and iPad. Don't repeat it on other pages.

### Art words

Use the standard vocabulary of painting, illustration and photography without
defining it: layer, mask, clipping, blend mode, opacity, flow, hardness,
pressure, tilt, flats, line art, values, glazing, the tooth of the paper,
highlights, shadows, white balance, gamut, color profile, bit depth, HDR, soft proof.

Use the trade word, not a description of the action.

| Avoid | Use |
| --- | --- |
| going over the same area again | layering |
| the bumps in the paper | the tooth |
| the main colors under the line art | the flats |
| make the picture lighter or darker in places | dodge and burn |

### Capy Canvas words

Some names belong to Capy Canvas: Tool Set, the canvas bar, Sketch, Paint and
Photo, Zen mode, Pass Through as a group setting, Paper as a layer, filters
attached with **Add Filter**. Define each one once, on the page that covers it,
and link to that page elsewhere.

### Words to leave out

Engineering words. Describe what the reader sees instead.

GPU, shader, tile, texture (meaning GPU memory), renderer, compositor,
pipeline, buffer, cache, WebAssembly, WebGPU, session, state, host, client,
package, manifest, payload, thread, frame time, latency, toggle (as a noun).

Promotional and filler words. Delete them, or say what you actually mean.

powerful, seamless, intuitive, effortless, flexible, robust, smooth (unless it
describes a stroke), beautiful, stunning, perfect, great, amazing, best,
easily, simply, just, quickly, effectively, a variety of, a range of, various,
numerous, leverage, utilize, enhance, unlock, empower, explore, dive into,
journey, experience (as a noun), workflow (as a vague noun), crucial,
essential, key (as an adjective), ensure, note that, keep in mind, remember
that, it's worth, don't worry, feel free, whether you're, in order to,
allows you to, lets you, helps you, makes it easy.

"You can" covers almost every case those words try to cover.

### Numbers

Give a number only when it changes what the reader does: a limit they will run
into, a default they need to know, a unit. Don't count things for the sake of it.

| Avoid | Use |
| --- | --- |
| The Brush size panel offers 40 preset sizes. | Select a size in the **Brush size** panel. |
| Choose from 24 blend modes. | (List the modes in the Blend modes reference.) |
| Sample size can be 1, 5, 15, 51 or 101 pixels. | ✓ Keep. These are the choices the reader picks from. |

## 6. Cadence

Sentences in this manual stand alone. A reader who lands on any sentence should
get one usable fact from it. Most problems with tone come from sentences built
for rhythm rather than for information. The patterns below are the common ones.
Each comes with examples from earlier drafts of this manual.

### The hinge

A claim, a comma, then "so", "which", "letting you" or "meaning" and its
consequence. Used once, it's fine. Used by habit, every sentence ends up with the
same two beats, and the second beat usually explains something the reader would
have worked out.

| Avoid | Use |
| --- | --- |
| The grain stays fixed to the page, so going over an area again fills in more of it. | Grain is fixed to the canvas. |
| Hiding keeps everything on the layer, so you can bring it back at any time. | Hiding a layer keeps its paint. |
| Each filter is its own layer, so you can adjust, hide or remove it later without touching the paint underneath. | A filter added from the Filters panel is a layer of its own. |

Keep a "because" or "so" clause only when it explains a mechanism the reader
couldn't guess:

> ✓ The center of a stroke can look darker than its edges, because the dabs overlap there.

### Groups of three

Lists of three, headings of three, three sentences of equal length in a row.
The pattern is the problem, not the number. When the app has exactly three
things, list them. When you reach for a third item to round off a sentence,
cut it.

| Avoid | Use |
| --- | --- |
| Hide, reorder and fade (heading) | Hiding layers |
| You can adjust, hide or remove it later. | You can change its settings later. |
| Fingers never paint. Hold one finger still to pick a color. Two fingers pan, zoom and rotate. | One entry per gesture, under its own heading (see the example below). |

The touch gestures, written for lookup:

> ## Picking a color
>
> Hold one finger still on the canvas to pick the color under it.
>
> ## Moving the canvas
>
> Drag the canvas with two fingers to scroll. Pinch with two fingers to zoom,
> and rotate two fingers to rotate the canvas.
>
> ## Undo and redo
>
> Tap the canvas with two fingers to undo, or with three fingers to redo.

### Slogan openers

A short, absolute sentence placed first for effect. Lead with the fact the
reader came for, stated plainly.

| Avoid | Use |
| --- | --- |
| Fingers never paint. | **Memo:** Fingers never draw. Use a pen or a mouse to draw on the canvas. |
| Layers are where your drawing lives. | You can keep parts of a drawing on separate layers in the **Layers** panel. |

### Connective tissue

Phrases that link sentences or sections without adding a fact. Delete them.

"From here,", "Now that you've …,", "Next,", "In this section,", "Let's",
"Once you're comfortable,", "That way", "With that in mind", "As mentioned above",
"To choose colors, continue with …".

| Avoid | Use |
| --- | --- |
| From here, Brushes and painting shows how to choose and adjust brushes. | (Put the page in `related`.) |
| Now that your layers are set up, it's time to add some color. | (Delete.) |

### Purpose padding

An opening that tells the reader why they might want to do something before
telling them how. Artists know why.

| Avoid | Use |
| --- | --- |
| Before you rearrange anything or try every brush, it helps to make a few marks and save them. | (Start with the first step.) |
| Most drawings look great with the default settings. | (Delete.) |
| Layers are like sheets of clear film stacked on top of each other. | (Delete. Artists know what layers are.) |

### Reassurance and encouragement

| Avoid | Use |
| --- | --- |
| Don't worry, you can always undo. | (Delete.) |
| You can come back to Properties at any time to change the settings again. | (Delete. "Filters stay editable" is said once, where it's defined.) |
| Try it on a copy of the layer if you want to keep the original. | (Delete. Artists know how to duplicate a layer.) |

### Closing summaries

The last sentence of a section restating the first. Delete it.

> ~~A filter affects everything below it in the layer list. … Keep line art and other details you don't want changed above the filter.~~

### Weak endings

English puts stress at the end of a sentence. End on the word that matters,
not on "it", "them", "there" or "this".

| Avoid | Use |
| --- | --- |
| Double-click a layer's name to rename it. | ✓ Fine. The action is the point. |
| If the layer has a mask, clicking that one lets you edit it. | Select the mask thumbnail to edit the mask. |
| Paint brushes behave differently from dry media because they react to what is already there. | Paint brushes pick up the color already on the layer. |

### Vague nouns and paraphrase

Name the control, the layer, the setting. "An area", "things", "stuff", "the
settings", "your work" and "more of it" hide the fact.

| Avoid | Use |
| --- | --- |
| Change the settings to suit your style. | Change **Hardness** and **Spacing** in the **Tool** panel. |
| Put your work somewhere safe. | Save the drawing as a `.capy` file. |

### Hedges

"Likely", "a little", "generally", "usually", "may", "might", "can sometimes".
If something is always true, say so. If it depends, say on what.

| Avoid | Use |
| --- | --- |
| Proof shows how the colors are likely to look on paper. | Proof shows the drawing as it will print with the chosen printer profile. |
| Flow is a little different from opacity. | Flow sets how much paint each dab adds. Opacity sets the most paint a stroke can lay down. |

### Metaphor and personification

No similes, no metaphors, no app that "knows" or "wants". Physical media are
fine when the app actually simulates them: watercolor does soak and spread.

| Avoid | Use |
| --- | --- |
| Paper is the canvas your ideas grow on. | Paper is a white fill layer at the bottom of the layer list. |
| Capy Canvas remembers your favorite brush. | Tool Set shows the last brush you used in each group. |

### Over-explaining

Don't explain a control's name back to the reader.

| Avoid | Use |
| --- | --- |
| **Opacity** sets how see-through the new paint is. | (Delete. Covered by the settings reference, if at all.) |
| **Hide layer** hides the layer. | (Delete.) |

### Uniform shape

Read the page as a whole. If every section has three sentences, every heading
has the same pattern and every paragraph ends with a consequence, the page will
read as machine-made even when each sentence is fine. Let the shape follow the
content: one sentence where there's one fact, a list where there are routes,
a table where there are settings.

### Summary, then restatement

A sentence that names its subjects, followed by sentences that repeat them with
details. Fix the structure, not the words: attach each detail to the thing it
describes and say it once.

| Avoid | Use |
| --- | --- |
| We redesigned smoothing and added a new taper engine for pens. Pen pressure is now smoothed too, and tapers work even if your pen has no pressure. | We redesigned smoothing to include pen pressure, and added a new taper engine that works with or without a pressure-sensitive pen. |
| We also built a new display stack. Photos open up to 5x faster, because it loads textures at your screen's native resolution. It's also more responsive, and it uses disk instead of RAM for large images. | We also built a more responsive display stack that loads textures at your screen's native resolution and keeps large images on disk instead of in RAM. |

### Mirrored pairs

Two unrelated facts balanced in one sentence for rhythm, such as "X is now Y too,
and Z works even if W", or a chain of "it … it's also … and it". Give each fact
to the thing it belongs to. "Too", "also" and "even if" are usually the sign.

### Feature as subject

A feature doing a vague verb to a vague object: "smoothing now covers pen
pressure", "the taper engine gives lines clean ends", "handles graphics tablets
better". Say what we did or what the artist gets.

| Avoid | Use |
| --- | --- |
| It also handles multi-GPU systems and graphics tablets better. | On Windows, Capy Canvas has better multi-GPU and graphics tablet support. |
| A new taper engine gives lines clean ends. | Pens have a new taper engine that works without pen pressure. |

### The wrong benefit

A true detail picked because it was easy to describe. Read the change before
describing it, and lead with what an artist notices. "We made smoothing
stronger" was true, but the change artists notice is that pen pressure is now
smoothed along the line.

### Lawyer words

A verb or condition chosen so that an unverified claim stays technically true:
"draw on images up to 1 gigapixel" to avoid promising that they save, or "on
Windows laptops with two graphics cards" to avoid promising a general fix. The
reader can't tell whether it applies to them. Verify the plain claim, or leave
it out.

### Code words and double meanings

Words from the code ("fills under the lines", "spills to disk") and words with
two meanings ("the .capy format is stable", where stable could mean it doesn't
crash or doesn't change). Say what the artist sees or can rely on.

| Avoid | Use |
| --- | --- |
| The .capy format is stable, but it's better not to take chances. | Drawings saved in 1.0.15 or later will keep opening in future versions. |
| Fill closes small gaps and fills under the lines. | The bucket tool closes small gaps in line art and leaves no white edge along the lines. |

### Benchmark prose

Device models, megapixel counts and "X seconds instead of Y" in a sentence read
as a test report and pick the best case. Give one multiplier in prose ("up to
5x faster") and put the measurements in a chart.

## 7. Punctuation and typography

- No em dashes or en dashes in prose. Use a period, a colon or parentheses.
  Ranges in tables can use an en dash: 150–450.
- No exclamation marks.
- No questions, except in a heading of a troubleshooting section, and there are none yet.
- Semicolons only to join two very short related facts. Never in a chain.
- Bold only for control labels, keys and menu paths. Never for emphasis.
- Italics only for layer names the reader typed, such as *Line art*, and for
  variable parts of labels, such as "Editing *layer* mask".
- Parentheses for platform differences and confirmations:
  "(Command on macOS)", "(the pointer becomes a cross)".
- Use the serial comma in English.
- Sentence case for headings, except where a heading is an app label.
- Use American spelling.

## 8. Images

Use about one image per section, cropped to the panel, row, bar or dialog the
section describes. A full-window image belongs only on the pages that show a
whole workspace. Show the result of a setting only where the result is visual,
such as a filter or a brush texture.

Images are captured from the real editor with the scripts in `scripts/capture/`
in both appearances and in every site language, so each page shows the editor in
its own language. Write them in Markdown with the `shot:` scheme. The alt text
is required and describes what the image shows:

```markdown
![The Layers panel header with Blend, Opacity and the layer switches.](shot:layers/panel-header)
```

When an image has numbered callouts, add a title. It becomes the caption:

```markdown
![The Layers panel.](shot:layers/panel "1 Header · 2 Layer rows · 3 Footer buttons")
```

Don't write "the screenshot above shows". The image sits next to the text it
illustrates.

## 9. Tutorials

A tutorial follows one project from start to finish. It has an introduction and
numbered stages. It may use a little more connecting language than the manual,
because the reader is following along, but every rule in sections 5–7 still
applies.

Each stage:

1. Opens with one sentence on what this stage produces.
2. Uses numbered `##` headings for its steps: "## 1. Draw the sketch".
3. Introduces each operation by name before asking for it, and links to the
   manual page that covers it in full.
4. Says what the drawing or layer list should look like after the step, so the
   reader can check.
5. Ends with a link to the next stage. That link is the one allowed transition.

A tutorial step:

> ## 2. Block in the flats
>
> Select the *Line art* layer and choose **Layer Settings > Use as reference**.
> Then select **Enclose and Fill** in Tool Set and draw a loose loop around the
> ribbon. The enclosed area fills up to the line art.
>
> The layer list now has *Ribbon* below *Line art*.

Don't give painting advice. "Keep the shading loose at first" is a lesson in
painting. "Lower **Opacity** to 40%" is an instruction.

## 10. Translations

- Translate from the English page, one page at a time.
- Write the app name as `{appName}` in all translated copy, Markdown and
  frontmatter, including English. Keep this placeholder unchanged. The build
  supplies the approved name for the page language from `src/data/branding.mjs`.
  Run `npm run check:branding` before submitting a translation.
- Use the app's own labels for that language, from the app's translation files,
  word for word. Never translate a control label yourself.
- Keep keys, file names, menu separators (`>`), `shot:` references and link
  targets exactly as in English, with the locale prefix on links.
- Use the register the app uses in that language.
- Keep the same sections and the same facts. Don't add or drop sentences.
- Apply sections 5–7 in the target language too. Every language has its own
  filler phrases and hinges.
- Keep layer names from the downloadable examples (*Line art*, *Ribbon*) in
  English, because the files contain those names.

## 11. Review checklist

Each new or changed English page is reviewed against this list before it is
published. Report every failure with the sentence and the rule number.

1. The page covers one place in the app, and every feature in that place has a section.
2. Each section does only the four jobs (plus at most one "useful when" sentence), in order.
3. Every control label is exact, bold and matches the app, including "…".
4. Every route the reader might use is given, menu path first.
5. No engineering words (5).
6. No promotional or filler words (5).
7. No numbers that don't change a decision (5).
8. No art concept is explained.
9. No hinge used by habit; no "so" clause that explains the obvious (6).
10. No groups of three for rhythm; no slogan openers (6).
11. No connective tissue, purpose padding, reassurance or closing summary (6).
12. No sentence ends on a vague pronoun when a noun would carry the stress (6).
13. No hedges, metaphors or personification (6).
14. Sections differ in shape where their content differs (6).
15. No em dashes, exclamation marks or bold for emphasis (7).
16. Images are cropped to what the section describes, with alt text (8).
17. The description is one plain sentence (3).
18. Read aloud, no two sentences in a row have the same rhythm.

A page passes when every item passes. "Mostly fine" is a fail.


## 12. Release notes and store copy

Release notes, the AppStream entry and store listings speak for the people who
make Capy Canvas. They're written in the owner's voice: first person plural,
plain, personable and to the point. Keep the owner's own phrasing wherever it's
accurate. This is the model:

> There's a lot in this release - over 1,600 commits since the last one. Capy
> Canvas now works on phones, and is a lot faster and more reliable than before.

### Structure

- **AppStream entry.** One opening line, four to seven short fragment bullets
  and one closing line, within Google Play's 500 characters. No warnings or
  caveats the owner didn't ask for.
- **Long notes.** An opening paragraph saying what the release is about and
  why, then one short section per theme with at most one image or chart, a list
  of other changes, the full changelog link, a note before updating, and thanks
  to contributors. Link the issue or pull request a change answers. Match the
  length and cadence of earlier notes: a few hundred words.
- **Known issues.** Leave them out unless the owner asks for them.

### Start from what the artist can now do

Release notes have a different job from the manual. The manual describes a
feature neutrally; release notes tell an artist what they can now do in their
own work that they couldn't before. Decide that first, before checking any
wording, and write it as the main sentence of each section and bullet:

> Now you can draw on the go, directly on your iPhone and Android.

That sentence matters because it's the reason phones matter to an artist.
Everything else is a detail, and a detail goes in only if it changes whether
the reader can use the feature. Platforms, input methods, surfaces and
mechanisms usually don't: "or in your phone's browser" and "with pen or finger"
add coverage, not value. A true, well-written detail can still be the wrong
thing to say.

Ask of every line: would an artist do something differently after reading it?
If not, cut it. The cadence checks in section 6 and the claim checks below come
after this; they catch badly written or untrue sentences, not sentences that
shouldn't be there.

| Avoid | Use |
| --- | --- |
| Draw with pen or finger on iPhone and Android, or in your phone's browser. | Now you can draw on the go, directly on your iPhone and Android. |

### Claims

- Check every feature you name in the app. Use its label as the app shows it,
  and say where it is when it isn't a tool: "Edit ▸ Flat All Areas", not "Flat
  All Areas" written as if it were a tool. Don't take names from string files
  or commit messages.
- Check every verb against what the change does. Smoothing that now acts on
  pressure "accounts for" pressure; it doesn't "include" it.
- Don't state shares or quantities nobody measured ("most of the work went
  there"). Say the intent instead ("that was the focus").
- Every number comes from a matched comparison with the previous release on
  named devices. In prose, give one multiplier; put the measurements in a chart
  with one device per bar pair.
- Name devices by brand and model, and check the brand.
- A claim that needs a qualifier to be true is rewritten to what is true, or
  left out. Never narrow a claim with a hedge to dodge checking it.
- When you explain why something is faster, name the actual mechanism in plain
  words ("compiles fewer shaders when it starts and reuses them between
  launches").
- Name tools the way artists say them in release notes ("bucket tool"); the
  manual uses the app's labels.

### Images

Images work on the light and dark site themes. App captures can stay dark; the
background is transparent, or there is a variant per theme chosen with
`<picture>`. Show the app in styled device frames, keep screenshots unstretched,
and look at every image at display size on both backgrounds before committing.

### Checklist

1. Each section and bullet leads with what the artist can now do in their own work, and every other line changes whether they can use it.
2. The text is in the owner's voice, and none of the cadence patterns in section 6 appear.
3. Each feature and its detail are said once, together.
4. Each benefit is the one an artist notices, checked against the change itself.
5. Every feature named is in the app under that name, with its menu path when it isn't a tool, and every verb matches what changed.
6. Every number has a matched comparison behind it, and the devices are named correctly.
7. No qualifier exists only to keep a claim technically true.
8. The AppStream entry fits in 500 characters.
9. Every image reads well on both themes.
