# AugmentView 👁️
![圖片](https://github.com/user-attachments/assets/62724171-5515-452f-a4b4-dc215a3dc730)

# Overview:
`AugmentView` is a dynamic and interactive application designed to help users visualize and understand various image data augmentation techniques. 

Tailored for machine learning practitioners, data scientists, and educators, this app provides a hands-on experience with essential augmentations used to enhance image datasets. 

By offering clear visual examples and explanations, AugmentView empowers users to grasp the impact of each technique on image data, aiding in the creation of more robust machine learning models.

# Key Features:
- Augmentation Techniques:

  The app features the following augmentation techniques:
  - Grayscale: Converts the image to grayscale, removing all color and leaving only shades of gray.
  - Blur: Applies a blur effect, reducing the sharpness and detail in the image.
  - Horizontal Flip (H-Flip): Flips the image horizontally, creating a mirror image.
  - Vertical Flip (V-Flip): Flips the image vertically, inverting it top to bottom.
  - Hue Rotation: Rotates the hues in the image, altering the color spectrum.
  - Rotate 90 Degrees: Rotate the image by 90 degrees clockwise or counterclockwise.
  - Brighten: Increases the image's brightness, making it appear lighter.
  - Crop: Crops a portion of the image, focusing on a specific region.

- WebAssembly-Accelerated Processing:

  AugmentView leverages WebAssembly (Wasm) technology to ensure fast and efficient image processing. By running performance-critical parts of the app's code in WebAssembly, image augmentations are processed with near-native speed, providing a seamless experience even for complex operations. This is particularly beneficial when working with large images or when applying multiple augmentations in real-time.

- Interactive Augmentation:

  Users can select and apply any available augmentations to the chosen image with a single tap or click. The app instantly displays the augmented image alongside the original for easy comparison.

- Before and After Comparison:

  The app provides side-by-side comparisons of the original and augmented images, allowing users to see the effects of each technique clearly.
