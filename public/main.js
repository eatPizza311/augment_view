async function init() {
    let rustApp = null

    try {
        rustApp = await import('../pkg')
    }
    catch(e) {
        console.error(e)
        return;
    }
    
    console.log(rustApp)

    const input = document.getElementById('upload')
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        let base64 = fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
        )
        console.log(input.files[0])
        let method = getSelectedValue()
        let img_data_url = rustApp.augmentation(base64, method)
        document.getElementById('original-img').setAttribute('src', fileReader.result)
        document.getElementById('new-img').setAttribute('src', img_data_url)
        document.getElementById('original-img-caption').textContent = "Original"
        document.getElementById('new-img-caption').textContent = "Augmented"

        document.getElementById('explanation').textContent = generateAugmentationExplanation(method)
    }

    input.addEventListener('change', () => {
        fileReader.readAsDataURL(input.files[0])
    })
}

function getSelectedValue() {
  // Get all radio buttons with the name 'options'
  const radios = document.getElementsByName('options');

  // Loop through each radio button to find the selected one
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      // Get the value of the selected radio button
      const selectedValue = radios[i].value;
      console.log("Selected value: " + selectedValue);
      // You can now use selectedValue as needed
      return selectedValue;
    }
  }

  // If no option is selected
  console.log("No option selected");
  return null;
}

function generateAugmentationExplanation(augmentationType) {
    switch (augmentationType) {
        case 'grayscale':
            return 'Grayscale conversion removes all color information from the image, leaving only shades of gray. This can be useful in situations where color is not important, reducing the complexity of the data and focusing on texture and intensity patterns.';
        case 'blur':
            return 'Blurring an image reduces the sharpness and detail by averaging pixel values in a neighborhood. This can help simulate out-of-focus effects or reduce noise, making the model more robust to different focus conditions.';
        case 'fliph':
            return 'Horizontal flip (fliph) mirrors the image along the vertical axis, creating a left-to-right flipped version. This augmentation helps the model generalize to mirror images and handle situations where objects can appear on either side of the image.';
        case 'flipv':
            return 'Vertical flip (flipv) mirrors the image along the horizontal axis, creating an upside-down version. This can be useful for augmenting datasets where objects might appear in different orientations, such as in aerial or satellite imagery.';
        case 'huerotate':
            return 'Hue rotation shifts the colors in the image by rotating the hue values in the color space. This augmentation can simulate different lighting conditions or color variations, making the model more resilient to changes in color.';
        case 'rotate90':
            return 'A 90-degree rotation rotates the image by 90 degrees clockwise or counterclockwise. This augmentation helps the model handle objects in different orientations, improving robustness to rotational variance.';
        case 'brighten':
            return 'Brightening an image increases the intensity of all pixels, making the image appear lighter. This augmentation can simulate different lighting conditions, ensuring the model can perform well under varying brightness levels.';
        case 'crop_imm':
            return 'Cropping removes a portion of the image, focusing on a specific region. This augmentation can help the model learn to recognize objects even when they are partially visible or when the image is zoomed in.';
        default:
            return 'Unknown augmentation type. Please provide a valid augmentation type such as grayscale, blur, fliph, flipv, huerotate, rotate90, brighten, or crop.';
    }
}

init()
