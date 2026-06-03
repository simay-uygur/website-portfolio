---
title: 'CS 342 - Project 1: Processes, IPC, and Threads'
bigTitle: 'CS 342'
emphasis: 'IPC'
headline: 'Implementing Processes, {emphasis}, And Threads In C'
excerpt: 'A C/Linux project that compares multi-process and multi-threaded solutions for scanning multiple input files, collecting long-word statistics, and merging results efficiently.'
author: 'Simay Uygur'
course: 'CS 342 - Operating Systems'
context: 'Implemented in C on Linux as part of the operating systems course, with both process-based and thread-based versions of the same workload.'
repoUrl: 'https://github.com/erengokirmak/cs342-projects'
postType: 'homework'
status: 'Completed - repository is private because of course policy'
readTime: '6 Min Read'
date: 2026-02-22
cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=70'
tags: ['cs342', 'c', 'linux', 'processes', 'threads', 'ipc']
---

## Project overview

In this project we implemented two versions of the same text-processing
problem in C on Linux. The goal was to read multiple input files, identify
words longer than a given threshold, and report where those words appeared.

The first version used multiple child processes and POSIX pipes. The second
version used multiple threads. This made the project a practical comparison
between process-based concurrency and thread-based concurrency.

## What we built

- A multi-process program that created one child process per input file
- Child-to-parent communication with pipes
- Parent-side merging, sorting, and output generation
- A multithreaded version of the same system using shared memory through
  process-wide data structures instead of pipes

## Key technical decisions

For the process-based version, the important design issue was how to send data
from children to the parent in bounded chunks while the parent kept reading
from multiple pipes concurrently. That required us to think carefully about
data transfer limits, incremental reads, and coordination between producers
and the parent.

For the threaded version, the main difference was that threads could share
memory directly. That simplified data movement, but it also required us to
think more carefully about how each thread stored and exposed its results for
later merging.

## Challenges and lessons learned

This project made the trade-offs between processes and threads very concrete.
Processes gave us clear separation and explicit IPC, while threads reduced
communication overhead but required tighter control over shared data.

It also strengthened our understanding of Linux systems programming in C,
especially `fork`, pipes, concurrent execution, and the differences between
multi-process and multi-threaded program structure.

## Repository note

The source code for this project is in a private course repository. The
repository is not public because the course policy does not allow publishing
solutions openly.
