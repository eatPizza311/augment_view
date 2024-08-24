use base64::prelude::*;
use std::io::Cursor;

use image::{load_from_memory, GenericImageView, ImageFormat::Png};
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn augmentation(encoded_file: &str, method: &str) -> String {
    log(&"Augmentation called".into());

    let base64_to_vector = BASE64_STANDARD.decode(encoded_file).unwrap();
    log(&"Image decoded".into());

    let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"Image loaded".into());

    match method {
        "grayscale" => img = img.grayscale(),
        "blur" => img = img.blur(5.0),
        "fliph" => img = img.fliph(),
        "flipv" => img = img.flipv(),
        "huerotate" => img = img.huerotate(180),
        "rotate90" => img = img.rotate90(),
        "brighten" => img = img.brighten(100),
        "crop_imm" => img = img.crop_imm(0, 50, img.height() / 2, img.width() / 2),
        _ => (),
    }
    log(&"Augmentation applied".into());

    let mut buffer = Vec::new();
    img.write_to(&mut Cursor::new(&mut buffer), Png).unwrap();
    log(&"New image written".into());

    let encoded_img = BASE64_STANDARD.encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded_img);
    data_url
}
