---
title: 3.27 Map
description: A guide to using the map widget in Ingenuity 7.
sidebar:
    order: 30
    badge:
        text: BETA
        variant: tip
---

The Map component displays geographic data on your dashboard. Any data source that provides data in GeoJSON format can be plotted on the map, and the map can be configured to update in real time. 

*For example: Plotting sewage discharges across the UK, colour-coded by recency.*

To add the map component, drag and drop from the widgets menu.

![Map Component](~/assets/dashboards/map/image1.png)

*Navigating the map*

**Zoom in/out** – use the plus (+) and minus (−) buttons.

**View point details** – click on a point to open a pop-up tooltip and see the additional properties stored in its GeoJSON file.

![Map Component](~/assets/dashboards/map/image2.png)

*Setting up a map*

There are two ways to add points to a map: by connecting a GeoJSON data source, or by manually placing markers.

**Option 1: Connect a GeoJSON data source**

![Map Component](~/assets/dashboards/map/image3.png)

1.	**Source** - Add a GeoJson data source.
2.	**Where** – apply a filter to narrow down which data is displayed. For example, you could filter so only data with the Alert Status "Discharging" is shown.
3.	**Name** – give the data source a variable name to identify the specific data source.
4.	**Use output** - GeoJSON output – this is set as the default.
5.	Once your data source is set up, add it to the map as a layer:

:::tip
Choose a descriptive name: you'll use it to select this data source when configuring layers, and it will also appear as the title in the tooltip popup.
:::

**Option 2: Manually place markers**

![Map Component](~/assets/dashboards/map/image4.png)

To add points manually rather than connecting a data source, add a marker in the Layers section and enter coordinates directly (see Layers section below).

**Display settings** – configure colour, opacity and width.

**Popup content** – add content that you want to show when you click on the marker.

![Map Component](~/assets/dashboards/map/image5.png)

*Add layer*

![Map Component](~/assets/dashboards/map/image6.png)

1.	**Layer type** – select "Standard" (additional layer types are coming soon).
2.	**Datasource** – choose from the data source(s) you've added, using the name you gave them.
3.	**GeoJson point type** – choose between Marker and Circle.
4.	**Display settings** – configure colour, opacity, radius, and max zoom.
5.	**Enable popups** – allows users to click markers to view more information.
6.	**Remove** – Remove layer.

![Map Component](~/assets/dashboards/map/image7.png)

Format component
- Set the default zoom level and starting location for the map.
- The following settings work the same as other widgets: Live mode, Background, Tags, Visibility, Type.

