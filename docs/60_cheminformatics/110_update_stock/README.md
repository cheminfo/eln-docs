---
slug: /uuid/4a89aab36f39d984feca711db0013ecf
---

# Update Stock

`Update Stock` is a tool to update the stock of chemical compounds in your lab. This page allows you to create new locations, add products and update the stock of the products.

## Add products to the stock

To add a new product to the stock at a specific location, you can scan the label of the location, then scan the label of the product. The product will be added to the stock at the location.


:::warning Important
It is important to place the mouse cursor on the input field `scan` before scanning the label. Also, make sure of the following:
- The scanner is configured with the correct keyboard type (azerty, qwerty, etc).
- The scanner is configured to send a `Enter` key after scanning the label.
:::

Once the location and the products' label are scanned, the products will be added to the stock at the location and will appear in the table on the middle panel.

![global](global_view.png)

## Update the stock status

The saved product's status can be updated by selecting the corresponding `status` and scanning the label of the product. The location will not matter since the product is already in the stock.

![list_status](list_status.png)


## Create a new location label

It is possible to generate a label for a new location. To do so, go on the right panel `Print location`, enter a meaningful name for the location (use room number, shelf number, `-`, `.`, etc.), select the printer and click on the `Print` button.

![create_loc](create_location.png)

This will print a label that can be scanned to add a new location in the stock.

![qr_data_matrix](qr_data_matrix.png)

For more convenience, you can also print labels for multiple locations by selecting a printer and clicking on the `location + range`. This will ask for the location, the range and the format of the labels.

![location_range](location_range.png)

The table below will show the list of labels that will be printed.