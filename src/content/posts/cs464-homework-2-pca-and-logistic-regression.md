---
title: 'CS 464 - Homework 2: PCA and Logistic Regression'
bigTitle: 'CS 464'
emphasis: 'PCA'
headline: 'Applying {emphasis} And Logistic Regression From Scratch'
excerpt: 'A machine learning homework focused on implementing PCA, image reconstruction and denoising, and logistic regression with class imbalance handling and AUPRC evaluation.'
author: 'Simay Uygur'
course: 'CS 464 - Introduction to Machine Learning'
context: 'An individual homework combining unsupervised and supervised learning, including PCA on face images and binary logistic regression for imbalanced biomedical data.'
repoUrl: 'https://github.com/simay-uygur'
postType: 'homework'
status: 'Completed'
readTime: '7 Min Read'
date: 2026-04-10
cover: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1600&q=70'
tags: ['cs464', 'machine-learning', 'pca', 'logistic-regression', 'auprc']
---

## Project overview

This homework had two major parts. The first part focused on Principal
Component Analysis using face images. The second part focused on building a
binary logistic regression classifier for imbalanced gene-expression data.

Both parts emphasized implementing core machine learning ideas directly rather
than relying on high-level ML toolboxes.

## What I worked on

- Implementing PCA and analyzing principal components channel by channel
- Measuring explained variance and reconstructing images with different numbers
  of components
- Using PCA for denoising and evaluating the trade-off between reconstruction
  quality and noise removal
- Building logistic regression with batch gradient descent
- Handling class imbalance with weighted loss
- Evaluating classifiers with Precision-Recall curves and AUPRC

## Key technical ideas

The PCA section focused on dimensionality reduction as both an analysis tool
and a reconstruction tool. It required thinking about explained variance,
eigenvectors as image structure, and how low-dimensional representations can
recover or smooth visual data.

The logistic regression section focused on optimization and evaluation. Beyond
training the model, the assignment highlighted why standard accuracy can be
misleading on imbalanced data and why PR curves and AUPRC are often more
useful.

## Challenges and lessons learned

This homework was valuable because it brought together several important
machine learning themes in one place: representation, reconstruction,
optimization, class imbalance, and evaluation.

It also reinforced how much clearer model behavior becomes when the algorithm
and the evaluation pipeline are implemented explicitly from scratch.

## Repository note

If I later publish or organize my CS 464 homework implementations, this page
can be updated with a direct repository link.
