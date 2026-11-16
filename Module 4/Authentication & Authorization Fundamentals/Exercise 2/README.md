# Exercise 2 — User Database Schema

Practice exercise for **Authentication & Authorization Fundamentals** using Node.js, Mongoose and bcrypt.

## User schema

The model in `src/models/user.model.js` declares:

| Field | Rules |
| --- | --- |
| `username` | Required string |
| `email` | Required string, unique index |
| `password` | Required string, omitted from normal Mongoose query selection |
| `role` | `USER` or `ADMIN`; defaults to `USER` |
| `refreshToken` | String; defaults to `null` |

A Mongoose `pre("save")` hook hashes newly assigned/changed passwords with bcrypt before document saves. This hook **does not** cover query updates such as `updateOne` or `findOneAndUpdate`; those need separate handling.

## Run the local demonstration

```bash
npm ci
node src/test-password.js
```

The demonstration hashes and checks a sample password without connecting to MongoDB.

## Notes

- A MongoDB connection is required to save actual users and verify that the `email` unique index rejects duplicates.
- The `select: false` option is not a substitute for hashing a password.
- This is a schema exercise, not a complete authentication API.
