---
title: What makes code good?
date: "2020-02-08T12:00:00Z"
description: "Lessons I have learned thus far about the principles of writing code that works."
---

> Lessons I have learned thus far about the principles of writing code that works.

I have always worked in small teams. As such, I don’t have a ton of experience with [Test-driven development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development) or working in environments with mature [DevOps](https://en.wikipedia.org/wiki/DevOps) processes. I love these ideas in concept and have even worked to implement some of the principles of them in my projects, but I have not worked on code immersed in these. My experience is not particularly unique. I have only been working on software in a professional capacity since 2016 and very few people start out on huge projects for huge teams. The advice I see for how to develop good code is permeated with assumptions about the situations in which people code that do not always prove true. As such, I would like to share some of what I have learned, in case it is useful.

I realized quickly in my career that “good code” meant different things to the different people around me. My boss, the senior developers I worked with, the strangers I interacted with on forums online, and the people who used the software I worked on, all had different expectations. This was a lot of noise to filter through, and a lot of people trying to say the same thing with different words. This is what I concluded:

**The defining aspects of good code are that it is workable and maintainable.**

Everything else is a nice-to-have.

#Workable

This is critical. The code must meet the requirements. Not meet a complex [Definition of Done](https://www.agilealliance.org/glossary/definition-of-done/), but just the requirements specific to that task. More often than not, that is all that matters. This is what working on a tight timeline and for a small team teaches you. And is what people so often skip over when discussing good code.

**Make it work.**

Requirements aren’t always super clear. Sometimes development is more like translating incompatible ideas than it is like solving math problems. There’s always a spectrum of answers. But so long as what you make is on [the spectrum](https://isaiahnixon.com/spectrum-software-translation/), you’ve arrived. This is also the essence of agile development, despite everything else that is so often lumped in with that concept.

#Maintainable

Maintainability means different things depending on the context. In a lot of ways, there’s no silver bullet. There are many ways to make code [unmaintainable](https://github.com/Droogans/unmaintainable-code), and equally as many guides and philosophies for how you ought to code. But, I have found these principles translate across contexts and supersede any technical treatise on coding standards.

##Look at all the code

Emphasis should be placed here, that I mostly work on small projects in small teams. But, reading the entire codebase (at the very least the docs and skimming the code) has saved me tons of time later down the road. It reduces the probability you’ll duplicate pre-existing efforts and decreases the chance you’ll be blindsided later by functionality you know nothing about.

This is also an ongoing process. Take time to read through the code your colleagues are committing to the projects you are working on. You might learn new things, catch mistakes ahead of time, and find ways to save yourself effort in the future.

##Ask for feedback

In-depth feedback systems are too-often not baked into the development processes of smaller teams. Be proactive. When you develop something important, ask for feedback. You may not be able to do this for every line of code or every feature, but getting that feedback on even some of your code will make you and the project stronger. Integrate and accept the criticism, get better at what you do.

##Write for people

[Human code > clean code](https://dev.to/d_ir/clean-code-dirty-code-human-code-6nm). You know yourself and the people you work with. Write your code with that in mind. There are some basic principles you can follow, such as [SOLID](https://en.wikipedia.org/wiki/SOLID). But, these are not as rigid as their acronym might suggest. You need to be subjective about this. There is no objective truth of readability in code. Do what works for you and your team.

## Take notes with the code

While coding you should be taking notes:

* Why you decided to take this path and not another
* What you attempted to do but failed
* Things you should go back and fix later but are good enough for now
* Procedures that you have found useful when dealing with the codebase

Take all of these and embed them directly in the codebase as docs and code comments. Sometimes, you might write too much and want to delete it later. But more often than not, it’s better to be verbose in a document rather than forget to write it in the first place because you don't have time to make it perfect.
