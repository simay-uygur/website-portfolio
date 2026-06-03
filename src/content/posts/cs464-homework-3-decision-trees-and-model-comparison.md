---
title: 'CS 464 - Homework 3: Decision Trees and Model Comparison'
bigTitle: 'CS 464'
emphasis: 'Decision Trees'
headline: 'Implementing {emphasis} And Comparing Learning Models'
excerpt: 'A machine learning homework completed in Python on Google Colab, covering ID3 decision trees, impurity measures, pruning, and conceptual comparisons with Naive Bayes and SVMs.'
author: 'Simay Uygur'
course: 'CS 464 - Introduction to Machine Learning'
context: 'Completed in Python on Google Colab as an individual homework focused on decision trees, entropy, Gini impurity, and model comparison.'
repoUrl: 'https://github.com/simay-uygur'
postType: 'homework'
status: 'Completed'
readTime: '5 Min Read'
date: 2026-05-04
cover: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=70'
tags: ['cs464', 'machine-learning', 'python', 'google-colab', 'decision-trees']
---

## Project overview

This homework focused on decision trees and model behavior in classification.
I completed it in Python on Google Colab, combining written analysis with
explicit implementation and visualization work.

The assignment centered on ID3 decision trees for heart disease risk
prediction, along with conceptual questions about Gini impurity, pruning,
continuous features, and the training behavior of models such as Naive Bayes
and SVMs.

## What I worked on

- Implemented entropy and information gain calculations in Python
- Built an ID3-style decision tree and analyzed the resulting split structure
- Compared entropy and Gini impurity conceptually and practically
- Discussed pre-pruning and post-pruning trade-offs
- Analyzed how model families such as unconstrained decision trees, Naive
  Bayes, and SVMs differ in training behavior

## Key technical ideas

One important part of the homework was understanding that decision trees are
not just about code, but also about split criteria and stopping behavior. The
choice of entropy versus Gini affects how impurity is measured, while pruning
choices affect overfitting and interpretability.

Another key idea was connecting implementation with theory. Building the tree
manually in Python made the logic behind node entropy, information gain, and
feature selection much clearer than treating the algorithm as a black box.

## Challenges and lessons learned

This homework was useful because it tied together model construction, model
interpretation, and conceptual comparison. It showed how small design choices
in tree learning can affect the final structure and how different classifier
families behave under different assumptions.

## Environment

The homework was implemented in Python and run on Google Colab.
