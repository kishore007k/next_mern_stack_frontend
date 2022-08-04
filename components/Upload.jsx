/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Upload = () => {
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const thumbs = files.map((file) => (
		<div key={file.name}>
			<div>
				<img src={file.preview} alt="image" />
			</div>
		</div>
	));

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	return (
		<section className="bg-gray-100 px-5 py-10">
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				<p>Drag & drop some files here, or click to select files</p>
			</div>
			<aside>{thumbs}</aside>
		</section>
	);
};

export default Upload;
