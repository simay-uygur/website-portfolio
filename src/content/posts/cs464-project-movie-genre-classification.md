---
title: 'CS 464 Project - Multi-Label Movie Genre Classification'
bigTitle: 'CS 464 Project'
emphasis: 'Genre'
headline: 'Predicting Movie {emphasis} From Poster Images'
excerpt: 'A machine learning project in Python on Google Colab that compared classical ML and deep learning methods for multi-label movie genre classification from poster images.'
author: 'Simay Uygur'
course: 'CS 464 - Introduction to Machine Learning'
context: 'A group machine learning project using poster images only, implemented in Python on Google Colab with both handcrafted-feature pipelines and transfer learning.'
repoUrl: 'https://github.com/simay-uygur'
postType: 'course-project'
status: 'Completed'
readTime: '7 Min Read'
date: 2026-05-06
cover: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=70'
tags: ['cs464', 'machine-learning', 'python', 'google-colab', 'computer-vision']
---

## Project overview

This project focused on predicting movie genres from poster images. Because a
single movie can belong to several genres at once, we treated the task as a
multi-label image classification problem instead of a single-label one.

The project compared classical machine learning approaches based on handcrafted
visual features with a deep learning approach based on transfer learning.

## What we built

- A cleaned and filtered poster dataset with multi-label genre annotations
- A classical pipeline using color histograms, HOG, and LBP features
- PCA-based variants for dimensionality reduction experiments
- Random Forest, XGBoost, and SVM classifiers for the handcrafted feature branch
- A deep learning branch using ResNet-50 pretrained on ImageNet
- Evaluation with Micro-F1, Macro-F1, and Hamming Loss

## Key technical decisions

One major design choice was to use only poster images for prediction, even
though metadata existed in the original dataset. That made the project a more
focused vision problem and let us compare what different visual
representations can capture.

Another important decision was to compare two different modeling strategies.
The classical branch relied on manually extracted color, edge, and texture
features, while the deep learning branch allowed the model to learn richer
visual patterns directly from the images.

## Results and lessons learned

The project showed that posters do carry useful genre information, but not all
genres are equally easy to predict. Common and visually distinctive genres
were easier to learn, while rare or overlapping genres remained difficult in
the multi-label setting.

Among the tested models, ResNet-50 gave the strongest overall results on the
main F1 metrics, especially Macro-F1, while XGBoost was the strongest
classical baseline.

## My contribution

My part in the project focused on coordinating the experiments and preparing
the dataset split. I organized the training, validation, and test workflow,
maintained the shared Google Colab structure, coordinated experiment files and
outputs, and helped keep the different model branches consistent.

## Environment

The project was implemented in Python and developed primarily on Google
Colab, with datasets, features, checkpoints, and outputs organized through
Google Drive.
