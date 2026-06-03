---
title: 'CS 342 - Project 4: My FUSE File System'
bigTitle: 'CS 342'
emphasis: 'FUSE'
headline: 'Designing A Simple {emphasis} File System In C'
excerpt: 'A user-space file system in C using FUSE, with indexed allocation, block management, inodes, and a formatted disk image stored inside a regular Linux file.'
author: 'Simay Uygur'
course: 'CS 342 - Operating Systems'
context: 'Implemented in C on Linux using FUSE 3 as a user-space file system with custom on-disk structures and block-based storage management.'
repoUrl: 'https://github.com/erengokirmak/cs342-projects'
postType: 'homework'
status: 'Completed - repository is private because of course policy'
readTime: '7 Min Read'
date: 2026-05-08
cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=70'
tags: ['cs342', 'c', 'linux', 'fuse', 'file-system', 'operating-systems']
---

## Project overview

In this project we designed and implemented a simple file system in C using
the FUSE framework. The file system ran in user space, while storing file data
and metadata inside a regular Linux file that acted as the disk.

The project focused on file-system fundamentals such as block allocation,
inode-based metadata, indexed allocation, bitmap management, mounting, and
basic file operations.

## What we built

- A user-space file system using FUSE 3
- A formatter program to initialize the disk image with the MFS layout
- On-disk structures including superblock, free-space bitmap, inode map, inode
  table, and root directory
- Support for listing files, creating files, deleting files, reading, writing,
  and retrieving file attributes

## Key technical decisions

The design centered around a single-directory file system with fixed-size
directory entries and indexed allocation. Each file used an inode plus a single
index block that pointed to data blocks.

That kept the layout simpler while still making us implement the essential
concepts of block-based storage, metadata management, and file-operation
callbacks.

## Challenges and lessons learned

This project connected operating systems concepts to a working storage model.
We had to think in blocks, not just bytes, and manage persistence across mount
and unmount cycles.

It also made the relationship between user-space callbacks and file-system
behavior much clearer, especially how higher-level operations map onto low-level
metadata and block updates.

## Repository note

The source code lives in a private course repository because the course policy
does not allow publishing assignment solutions publicly.
