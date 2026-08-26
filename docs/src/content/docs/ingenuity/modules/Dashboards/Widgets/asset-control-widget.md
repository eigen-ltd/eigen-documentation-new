---
title: 3.25 Asset Control Widget
description: A guide to using the asset control widget in Ingenuity 7.
sidebar:
    order: 28
---

Asset Driven Dashboards let you dynamically drive a dashboard from an asset model, so you can build dashboard content just by dragging and dropping items from an asset rather than configuring each widget manually. [Refer to  Asset Model section](/ingenuity/modules/asset-model/asset-model-browser/#15-what-is-an-asset-model) for an introduction to asset models. 

This is useful when a dashboard has a small number of properties you want to template for example, when navigating between wells, where you want to easily switch the entire dashboard between data from Well A or Well B using a single control. 

:::note
Asset properties are drawn from the Asset Model [see Asset Model section](/ingenuity/modules/asset-model/asset-model-browser/#15-what-is-an-asset-model), and can also be viewed directly from the Asset Model tab. 

![Asset Control Widget](~/assets/dashboards/asset-control-widget/image1.png)

:::

## Adding the Asset Control widget 

There are two ways to add the Asset Control widget to your dashboard: 

**Option 1: From the Assets menu** – click the Assets menu on the left-hand side, select a template, and drag the Asset Control widget directly onto your dashboard. [See Assets section.](/ingenuity/modules/dashboards/model-driven-dashboards/)

![Asset Control Widget](~/assets/dashboards/asset-control-widget/image2.png)


**Option 2: From the widget menu** – drag and drop the Asset Control widget onto your dashboard. 

![Asset Control Widget](~/assets/dashboards/asset-control-widget/image3.png)


Then select a template from the settings panel on the right, under Asset Options.

![Asset Control Widget](~/assets/dashboards/asset-control-widget/image4.png)

#### Update URL 

Enabling Update URL passes the current variable selection into the page URL. This allows you to create hyperlinks from other pages that link directly to this dashboard with the relevant filters pre-selected.

## Using the Asset Control Widget 

Once added to your page, the Asset menu, under existing templates displays a dropdown containing the options preconfigured in the selected template.

![Asset Control Widget](~/assets/dashboards/asset-control-widget/image5.png)


:::tip 
Existing templates: if you have multiple filters on a dashboard, each can be configured individually. For example, you could template two halves of a dashboard, one showing Well A and the other a different well or asset type, to compare them side by side. 
:::

Expanding the dropdown shows the properties available in the template. Each can be dragged onto the dashboard as a specific widget type, indicated by its icon:

![Asset Control Widget](~/assets/dashboards/asset-control-widget/image6.png)


- **Hashtag (#)** – drag as a number value.
- **Sparkline icon** – drag as a sparkline.
- **Chart icon** – drag as a chart. 
- **Circle** – drag as an indicator. 
- **Text icon “I”** – drag as a text widget. 
- **Chart icon with a plus** – add another tag to compatible widgets. 

#### Connecting to a widget from the widget menu. 

If you want to use the widget menu rather than the asset menu, drag a normal widget onto your dashboard, then in the value section click the variable button (shown as a box icon).

![Asset Control Widget](~/assets/dashboards/asset-control-widget/image7.png)

This displays the related properties available from the asset model. Select one to bind it to that widget.

![Asset Control Widget](~/assets/dashboards/asset-control-widget/image8.png)

For information on using an attribute in a calculation and using other properties and relationships in the knowledge graph see [Assets section](/ingenuity/modules/dashboards/model-driven-dashboards/)