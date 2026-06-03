---
title: 'CS 342 - Project 2: User-Space Threading Library'
bigTitle: 'CS 342'
emphasis: 'Threading'
headline: 'Building A User-Space {emphasis} Library In C'
excerpt: 'A cooperative user-level threading library in C for Linux/x86-64, including thread creation, yielding, join, cancel, and manual context switching.'
author: 'Simay Uygur'
course: 'CS 342 - Operating Systems'
context: 'Implemented in C on Linux/x86-64 as a user-space threading support library with cooperative scheduling.'
repoUrl: 'https://github.com/erengokirmak/cs342-projects'
postType: 'homework'
status: 'Completed - repository is private because of course policy'
readTime: '7 Min Read'
date: 2026-03-24
cover: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=70'
tags: ['cs342', 'c', 'linux', 'threads', 'ucontext', 'scheduling']
---

## Project overview

In this project we implemented a basic thread support library at user space in
C for Linux/x86-64. The library managed cooperative threads entirely in user
space, without relying on kernel-level thread scheduling for each application
thread.

The library API included initialization, thread creation, yield, exit, join,
cancel, and querying the current thread id.

## What we built

- A thread control block structure for storing thread metadata and saved context
- Support for creating threads with their own stacks
- Cooperative scheduling through explicit `tus_yield` calls
- Context save/restore logic using `getcontext` and `setcontext`
- Thread lifecycle operations including `tus_exit`, `tus_join`, and `tus_cancel`

## Key technical decisions

The central implementation issue was context switching. We had to manage
execution state explicitly, including stack setup, saved register state, and the
control flow around `getcontext` returning more than once.

Another important decision was keeping the library cooperative instead of
preemptive. That simplified the scheduling model, but it also meant the
correctness of application behavior depended on threads yielding at reasonable
points.

## Challenges and lessons learned

This project made the mechanics of threading much more explicit than normal
application development. Instead of treating threads as a black-box API, we had
to think about stacks, saved CPU context, scheduling order, and cleanup rules.

It also deepened our understanding of how thread abstractions are built in C
and Linux, especially on x86-64 systems where details like stack alignment and
execution context matter directly.

## Repository note

The source code for this project is stored in a private course repository. It is
kept private because the course policy forbids posting solutions publicly.
