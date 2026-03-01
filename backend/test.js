import cloudinary from "./cloudinary.js";

cloudinary.uploader.upload("https://picsum.photos/400", {
  folder: "test"
}).then(res => {
  console.log("Uploaded:", res.secure_url);
});
