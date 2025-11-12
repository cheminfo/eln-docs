---
slug: blog-2025-11-12
title: Various improvements
author: Luc Patiny
author_title: cheminfo contributor
author_url: https://github.com/lpatiny
author_image_url: https://avatars.githubusercontent.com/u/1484241?v=4
tags: [reactions, stock]
---

# Reactions

Based on user feedback, multiple improvements have been added to the ELN reaction workflow page.

## Copy reactant or product

A new icon in the reaction editor allows copying any reactant or product as a molfile V3000.

![Copy reactant and product as molfile](2025-11-12-various-improvements/copy-as-molfile.gif)

## Check stock location and edit reagents

When adding reagents to a reaction, the storage location is now displayed for any matching samples in the stock. You can also edit the corresponding sample directly from the reagent list.

![Search stock and edit](2025-11-12-various-improvements/edit-reagents.gif)

## Set molfile and molecular formula from sample

For samples created from imported data (such as NMR spectra), it is now possible to assign both the molecular formula and chemical structure with a single click. You can also open the sample for editing directly.

![Set molfile and MF of sample](2025-11-12-various-improvements/set-mf-molfile.gif)

## Define the kind of product

When adding a new product, any reactant or product can now be selected to extract the structure and molecular formula, which is very useful for defining recovered starting material.

The product of a reaction can now be flagged as the expected product, a side product, or a recovered starting material. Only pure products are considered in yield calculations.

![Edit sample from stock](2025-11-12-various-improvements/product-kind.gif)

# Edit sample from stock

You can now open and edit a sample directly from the stock by double-clicking its entry to access the editing interface.

![Edit sample from stock](2025-11-12-various-improvements/stock-to-edit.gif)
