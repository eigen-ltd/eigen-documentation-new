---
title: 3.24 Asset Widget
description: A guide to using the asset widget in Ingenuity 7.
sidebar:
    order: 27
---

The Asset Widget displays a context menu of information related to a specific asset such as its properties, measurements, documents and related assets.

To add the Asset Widget to your dashboard, drag and drop from the widget menu.

![Asset Widget](~/assets/dashboards/asset-widget/image1.png)

:::note
This widget requires a configured Asset Control widget to be present on the same dashboard. See Asset Control widget.
:::

Under Asset tag, click the variable button (shown as a box icon) and choose one of the assets present on your page.

![Asset Widget](~/assets/dashboards/asset-widget/image2.png)

:::tip
The variable button (shown as a box icon) used to select the asset only appears when an Asset Control widget exists on the dashboard. See Asset Control widget.
:::

On the dashboard, the Asset Widget will display in a similar way to the Text widget and can be formatted as such. See Text widget.

![Asset Widget](~/assets/dashboards/asset-widget/image3.png)

![Asset Widget](~/assets/dashboards/asset-widget/image4.png)

Toggle show status to show an indicator next to the Asset Widget.

![Asset Widget](~/assets/dashboards/asset-widget/image5.png)

Toggle status formatting to apply the status formatting that you have added to the indicator to the text part of the widget.

:::note
Configure indicator status the same way as an Indicator widget. 
:::

#### Using the widget:

Outside of edit mode, clicking the Asset Widget dynamically brings up the common menu for the currently selected asset which will display any properties, measurements, documents and related assets.

:::note
As the Asset Control widget's selection changes (e.g. switching from Well A to Well B), the Asset Widget updates to match, allowing you to view the set of properties, measurements, and documents for whichever asset is currently selected.
:::

![Asset Widget](~/assets/dashboards/asset-widget/image6.png)

Clicking on multiple assets adds each one into the common menu as a separate tab. For example, you can click to add Well A, then switch the Asset Control widget's selection to Well B and add it as well. This lets you switch between tabs in the common menu to compare Well A and Well B side by side.

![Asset Widget](~/assets/dashboards/asset-widget/image7.png)

Click the x next to a tab to remove that asset from the common menu.

![Asset Widget](~/assets/dashboards/asset-widget/image8.png)

**Drag button** – lets you drag the common menu around the screen.
**Pin button** – pins the common menu to the side of the screen.

![Asset Widget](~/assets/dashboards/asset-widget/image9.png)

Close (x, top right) – closes the common menu. Click on an asset again to reopen it (this will also re-add that asset to the menu).

:::note 
Closing the common menu does not delete the assets already added to it. Reopening the menu will show them again. However, navigating away from the page will reset the menu, clearing any assets that were added.
:::

See [Asset Control Widget section]((/ingenuity/modules/dashboards/widgets/asset-control-widget)) for more information.