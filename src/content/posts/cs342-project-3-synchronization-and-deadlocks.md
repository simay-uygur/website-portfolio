---
title: 'CS 342 - Project 3: Synchronization and Deadlocks'
bigTitle: 'CS 342'
emphasis: 'Deadlocks'
headline: 'Managing Synchronization And {emphasis} In C'
excerpt: 'A C/Linux resource manager library using shared memory and POSIX semaphores to coordinate resource requests, detect deadlocks, and support avoidance.'
author: 'Simay Uygur'
course: 'CS 342 - Operating Systems'
context: 'Implemented in C on Linux as a resource management library for multiple concurrent child processes using shared memory and semaphores.'
repoUrl: 'https://github.com/erengokirmak/cs342-projects'
postType: 'homework'
status: 'Completed - repository is private because of course policy'
readTime: '7 Min Read'
date: 2026-04-13
cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=70'
tags: ['cs342', 'c', 'linux', 'semaphores', 'shared-memory', 'deadlocks']
---

## Project overview

In this project we developed a resource manager library in C for Linux that
simulated shared resources across multiple child processes. The library had to
coordinate resource requests, releases, and process lifecycle events while
remaining free of race conditions.

It also had to support two important operating systems concerns: deadlock
detection and deadlock avoidance.

## What we built

- A shared-memory resource manager for multiple concurrent processes
- Synchronization with POSIX semaphores
- Allocation, request, release, and process lifecycle operations
- Deadlock detection logic
- Optional deadlock avoidance based on declared maximum claims

## Key technical decisions

The core design problem was keeping shared state consistent while multiple
processes could call into the library concurrently. That required careful
synchronization around shared-memory structures such as available resources,
allocations, requests, and demand matrices.

Another important decision was separating the behavior for the two modes:
plain allocation with possible deadlock, and safe allocation with avoidance
enabled. That affected when requests could proceed and when processes had to
block.

## Challenges and lessons learned

This project made synchronization issues much more concrete. It was not enough
for the logic to work in one process; it had to remain correct under
concurrent access, blocking, release, and state transitions.

It also helped us understand the practical difference between detecting a bad
state after it occurs and preventing the system from entering that state in
the first place.

## Repository note

The implementation is stored in a private course repository. We are keeping it
private because the assignment policy does not allow public posting of
solutions.
