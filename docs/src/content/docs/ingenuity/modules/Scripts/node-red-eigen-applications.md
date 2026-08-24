---
title: Node-Red Eigen Applications
description: A guide to using calculations in Ingenuity for data transformation and analysis.
sidebar:
    order: 2
---

## 2	Node-RED® Eigen applications

This section will cover eigen specific Node-RED® examples and features. Detailing the eigen node library and some helpful basic tips to guide your understanding relevant to eigen use cases. Finally, this section will give a basic overview of a more advanced fleshed use case of its application in data driven dashboards to present a basic goal of what you can achieve in Node-RED®. This section assumes familiarity with Node-RED® fundamentals. For beginners, the Node-RED® Documentation remains an essential starting point as aforementioned.

### 2.1	Eigen Node library

Within the Eigen deployed Node-RED® are the two eigen node libraries **Eigen** and **Eigen Util.** The Eigen library features nodes for more basic specific use cases such as helping format and post queries to historians. Further documentation pertaining to the nodes functionality and use can be found by clicking on the book icon. 

![Node Library](~/assets/scripts/image4.png)

On the other hand, the Eigen Util features more advanced nodes developed for assisting eigen programmers with more specific use cases streamlining limitations within Node-RED®. These also contain their own documentation within themselves.

### 2.2	Basics of Eigen flows

A typical use case for Eigen-specific flows involves endpoint nodes to bridge external systems into Node-RED®. These nodes generate a custom URL based on the specified configuration, enabling seamless integration. For example, a configured endpoint node might create a URL like:

https://ingenuity.eigen.co/nodered-server/ {node-name}

This feature is especially useful for connecting external services or applications to your Node-RED® workflows within the Eigen environment.

![A node-red flow](~/assets/scripts/image5.png)

Additionally, response nodes are used to conclude the flow by sending back a custom response. This allows developers to tailor the flow’s output, whether it’s a message, data payload, or status update.

Together, endpoint and response nodes form the backbone of many Eigen use cases. For instance, they enable the creation of dynamic and data-driven dashboards that provide real-time insights and interactive features, showcasing the flexibility and power of Node-RED® within the Eigen ecosystem.

### 2.3	Data Driven Dashboard

![Use case example](~/assets/scripts/image6.png)

Data Driven   Dashboards are one example of an advanced use case for Node-RED®.  As you can see it follows similar but more complex format to the example shown in section 2.2, but in this case, we are passing in variables from a ingenuity page on the submit and running advanced calculations within function nodes. Then when requested from a page it will collect these values and send them back to ingenuity for use in charts 

