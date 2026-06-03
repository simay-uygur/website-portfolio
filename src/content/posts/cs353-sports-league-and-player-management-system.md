---
title: 'CS 353 - Sports League and Player Management System'
bigTitle: 'CS 353'
emphasis: 'League'
headline: 'Building A Sports {emphasis} And Player Management Database'
excerpt: 'A database system for leagues, tournaments, matches, and player records with integrity constraints, raw SQL workflows, and containerized setup.'
author: 'Simay Uygur'
course: 'CS 353 - Database Systems'
context: 'Built as a course project focused on relational modeling, integrity constraints, and database-backed workflows.'
repoUrl: 'https://github.com/simay-uygur/CS-353-Sports-League-and-Player-Management-System'
postType: 'course-project'
status: 'Completed'
readTime: '5 Min Read'
date: 2025-05-20
cover: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1600&q=70'
featured: true
pageNumber: 'NO. 01'
tags: ['cs353', 'databases', 'sql', 'postgresql', 'docker']
---

## Project overview

This project focused on designing a database system for managing sports
leagues, tournaments, matches, and player data. The main goal was to build a
system with clear relationships, consistent data rules, and workflows that
could support realistic league operations.

## What I built

- A relational schema for leagues, teams, tournaments, matches, and players
- SQL-based workflows for inserting, updating, and querying sports data
- Integrity constraints to keep records valid and reduce inconsistent states
- A containerized setup using Docker and Docker Compose

## Key technical decisions

The core work was in modeling the data carefully enough that the schema itself
supported correct application behavior. That meant thinking about keys,
relationships, normalization, and how to express constraints directly in the
database rather than relying only on application-side assumptions.

## Challenges and lessons learned

The project made database design trade-offs more concrete. I had to think about
consistency, how to structure operations cleanly in SQL, and how to keep the
system understandable as the number of related entities grew.

## GitHub

The repository link above contains the project implementation and supporting
database setup.
