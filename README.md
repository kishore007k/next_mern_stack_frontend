<p align="center">
  <a href="https://github.com/kishore007k">
    <img src="https://user-images.githubusercontent.com/34863222/130753775-7f5c3274-e203-4eb7-b9d8-e57be393c0df.png" alt="icon" />
  </a>
</p>

<br />

<p align="center">
  <img src="https://user-images.githubusercontent.com/34863222/131228195-bbe6aab7-6937-4618-b522-857a07e6ea9f.png" />
</p>

<br />

---

<br />

## Contains:

This template uses [Next.Js](https://github.com/vercel/next.js) + [Mongoose](https://mongoosejs.com/) + [TailwindCSS](https://tailwindcss.com/). The site is deployed in [Vercel](https://vercel.com/kishore007k/next-with-mongoose).

## How to use:

- Clone this repository or use the following code `https://github.com/kishore007k/next-with-mongoose.git`.
- This will clone the repository to your system.
- Add your MongoDB connection string to the `MONGODB_URL` inside the **next.config.js** in the root directory.
- To connect to the database you can either create a Model and use the `connectDB()` function to connect to the MongoDB database.

<br />

## Commands:

```bash
  npm run dev

  # (or)

  yarn build
```

<br />

### MongoDB Database Connection:

The following code will let the user to connect to the MongoDB database. This is located inside the `util/connectDb.js` in the root directory.

```js
import mongoose from "mongoose";

const connectDB = () => {
	if (mongoose.connections[0].readyState) {
		console.log("Already connected.");
		return;
	}
	mongoose.connect(process.env.MONGODB_URL, (err) => {
		if (err) throw err;
		console.log("connected to MongoDB");
	});
};

export default connectDB;
```

<br />

### How to Connect to Database:

To connect to the Database you can simply call the `connectDB()` function.

```js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../utils/connectDB";

connectDB();

export default function handler(req, res) {
	res.status(200).json({ name: "John Doe" });
}
```

<br />

<p align="center">
  <a href="https://github.com/kishore007k" target="_blank">
    <img src="https://user-images.githubusercontent.com/34863222/131228260-096334c8-c906-44c8-a4f0-cf3af7d49ac0.png" />
  </a>
</p>
