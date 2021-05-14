const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv").config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
	secure: true,
});
console.log(
	process.env.CLOUDINARY_CLOUD_NAME,
	process.env.CLOUDINARY_KEY,
	process.env.CLOUDINARY_SECRET
);
cloudinary.search
	.expression(
		"dogs" // add your folder
	)
	.sort_by("public_id", "desc")
	.max_results(30)
	.execute()
	.then((result) => console.log(result));
