---
title: 3.18 Live Control Widget
description: A guide to using the live control widget in Ingenuity 7.
sidebar:
    order: 19
---

The Live Control widget works similarly to the live settings toolbar, letting you control the timeframe of connected widgets on a dashboard. Unlike the toolbar, however, you can add multiple Live Control widgets to a single page, with each one linked to specific widgets via tags rather than inheriting its timeframe from a parent toolbar.

![Live control widget](~/assets/dashboards/live-control/image1.png)

This is useful when you want quick, dedicated buttons for common timeframes, for example, Day, Week, Month, or Year, that apply only to a chosen subset of widgets on the page.

To add the Live Control widget to your dashboard, drag and drop from the widget menu onto your dashboard.

![Live control widget](~/assets/dashboards/live-control/image2.png)

For each button you want to add:
1.	Add a new shortcut.
2.	**Period** – enter the time period to associate with the button (see Valid Time Units).
3.	**Label** – add a label to display on the button.

![Live control widget](~/assets/dashboards/live-control/image3.png)

Formatting the buttons
- **Size** – Extra Small, Small, Medium, Large.
- **Horizontal alignment** – Left, Centre, Right.
- **Vertical alignment** – Top, Middle, Bottom.
- **Orientation** – Horizontal, Vertical.

![Live control widget](~/assets/dashboards/live-control/image4.png)

:::note 
The widget's background can also be configured/styled in the same way as other widgets.
:::

#### Connecting buttons to components

To link a Live Control widget to other widgets on the page, give it the same tag as the widgets you want it to control (e.g. "date"). Any chart tagged with "date" will respond to the buttons.

Select Sync Period to keep connected widgets' timeframes synced with the buttons.

![Live control widget](~/assets/dashboards/live-control/image5.png)

You can add multiple Live Control widgets to a page, each linked to a different tag, to control different groups of widgets independently.