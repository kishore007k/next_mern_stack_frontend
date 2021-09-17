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

const connectDB = (handler) => async (req, res) => {
	if (mongoose.connections[0].readyState) {
		// Use current db connection
		return handler(req, res);
	}
	// Use new db connection
	await mongoose.connect(process.env.MONGODB_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
	return handler(req, res);
};

export default connectDB;
```

<br />

### How to Connect to Database:

To connect to the Database you can simply call the `connectDB()` function.

```js
import bcrypt from "bcryptjs";
import connectDB from "../../utils/connectDB";
import UserModel from "../../models/userModel";

const handler = async (req, res) => {
	switch (req.method) {
		case "GET":
			try {
				const users = await UserModel.find({});
				res.status(200).send({ data: users });
			} catch (error) {
				res.status(400).send({ error: error });
			}
			break;

		case "POST":
			try {
				const { userName, email, password, cPassword } = req.body;
				if (password !== cPassword) {
					return res.send({ message: "Passwords doesn't match" });
				}
				const hashed = bcrypt.hashSync(password, 10);
				const newUser = new UserModel({
					userName,
					email,
					password: hashed,
				});
				const saved = await newUser.save();
				if (saved) return res.send({ data: saved });
			} catch (error) {
				res.send({ error: error });
			}
			break;

		default:
			res.status(400).send({ error: "Server Error" });
			break;
	}
};

export default connectDB(handler);
```

<br />

<p align="center">
  <a href="https://github.com/kishore007k" target="_blank">
    <img src="https://user-images.githubusercontent.com/34863222/131228260-096334c8-c906-44c8-a4f0-cf3af7d49ac0.png" />
  </a>
</p>

---

### Models

All the models are created in the Models folder in the root directory.

Example:

```js
// User Model
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			maxlength: 32,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			index: { unique: true },
			match: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
		},
		password: {
			type: String,
			required: true,
		},
		cPassword: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

mongoose.models = {};

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
```

---

### Middleware

All the `verifyUser`, `isLoggedIn` & `isAdmin` checks should be defined in the Middlewares folder and exported.