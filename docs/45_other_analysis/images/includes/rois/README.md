:::tip REGIONS OF INTEREST (ROIS)

<details>
    <summary>
    Many parameters are calculated for regions of interest.
    </summary>
    <div>

# Information about ROIs

Many parameters characterizing ROIs are automatically calculated.

## ROI

Region Of Interest (ROI) posses various characteristics. Among them:

- Surface: the number of pixels in the ROI
- External: the number of pixels that touch at least one other external pixel
- Perimeter: ROI perimeter using cutting edge algorithm (see illustration)
- Diameter of a circle of equal projection area (D<sub>EQPC</sub>):
  <img src="https://tex.cheminfo.org/?tex=D_%7BEQPC%7D%20%3D%202%20%5Csqrt%7B%5Cfrac%7BSurface%7D%7B%5Cpi%7D%7D"/>
- Diameter of a circle of equal perimeter (D<sub>PED</sub>):
  <img src="https://tex.cheminfo.org/?tex=D_%7BPED%7D%20%3D%20%5Cfrac%7BExternal%7D%7B%5Cpi%7D"/>

![roi.svg](roi.svg)

Calculation of perimeter of pixel based images is not a trivial topic. This has been reviewed in the [literature](http://urn.nb.no/URN:NBN:no-13191).

In this tool we use the following approach:

- We count all the pixel sides that are outside the ROI (each side counts as 1)
- If a pixel has 2 external sides, we remove from the sum (2 - √2) = ~0.59
- If a pixel has 3 external sides, we remove from the sum 2 \* (2 - √2) = ~ 1.17

This means that for each border pixel the contribution to the perimeter is:

- pixels with one external side: 1
- pixels with two external sides: ~1.41
- pixels with three external sides: ~1.83

Practically the shape of the perimeter is represented in the following image:

![perimeter.svg](perimeter.svg)

## Minimum bounding rectangle (MBR)

An information that allows to determine the shape of a ROI is the `Minimum Bounding Rectange`(MBR) that represents the smallest rectangle that surround the ROI.

The MBR is characterized by:

- width: length of the longest side of the rectangle
- height: length of the smallest side of the rectangle
- perimeter: perimeter of the rectangle
- surface: surface of the rectangle

![mbr.svg](mbr.svg)

## Convex Hull (CH)

The convex hull may be visualized as the shape enclosed by a rubber band stretched around the ROI. It is useful to estimate the compactness of the ROI.

Two parameters are available for the convex hull:

- surface
- perimeter

![hull.svg](hull.svg)

## Feret diameters

The feret diameters of a ROI can be calculated using a virtual caliper. 2 diameters are calculated:

- min: the minimal size of the ROI that could be measured using a caliper
- max: the maximal size of the ROI that could be measured by a caliper
- ψA (Aspect ratio): ratio of the minimum to the maximum Feret diameter (0 < ψA ≤ 1), an indication of the elongation of the particle

![feret.svg](feret.svg)

## Other parameters

### Sphericity

The sphericity is the ratio of the perimeter of the equivalent circle, P<sub>PED</sub>, to the real perimeter, P<sub>real</sub>.
A perfect sphere as a sphericity of 1. The idea is that irregular shape causes an increase in the perimeter and therefore this ratio has a lower value. Knowing that the smallest possible perimeter for a given projection area is a circle, 0 < S ≤ 1.

Please note that the evaluation of perimeter is a complex topic and check above the approach that is used in this application. It
is not impossible that the sphericity is slightly higher than 1.

<img src="https://tex.cheminfo.org/?tex=S%20%3D%20%5Cfrac%7BP_%7BEQPC%7D%7D%7BP_%7Breal%7D%7D"/>

### Convexity

The convexity ($\psi_C$) describes the compactness of a particle. The convexity is the ratio of the projection area itself and the area of the convex hull. The maximum theoretical convexity is 1, if there are no concave regions. Due to the pixelation of images, all particles seem to have small concave regions, corresponding to the tiny steps with every pixel in the perimeter line. Therefore, the maximum convexity calculated in reality is mostly limited to 0.99.

<img src="https://tex.cheminfo.org/?tex=%5Cpsi_C%20%3D%20%5Cfrac%7BROI%7Bsurface%7D%7D%7BCH_%7Bsurface%7D%7D"/>

### Roundness

<img src="https://tex.cheminfo.org/?tex=Roundness%20%3D%20%5Cfrac%7B4%20*%20ROI_%7Bsurface%7D%7D%7B%5Cpi%20*%20Feret_%7Bmax%7D%7D"/>

</div>

</details>

:::