# How to use Firebase

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Using

**Next.js**

```bash
npx create-next-app@latest
```

**Prettier**

```bash
yarn add prettier
```

**prettier-plugin-tailwindcss**

```bash
yarn add prettier-plugin-tailwindcss
```

- Create `prettier.config.js` file add

```js
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
};
```

**npx shadcn-ui**

```bash
npx shadcn-ui@latest init

```

**Recoil**

```bash
yarn add recoil
```

**Firebase**

```bash
yarn add firebase
```

**For Authentication we are using Library** [React Firebase Hooks](https://www.npmjs.com/package/react-firebase-hooks)

```bash
yarn add react-firebase-hooks
```

**Using safe-json-stringify so Next.js Understand Firebase TimeStamp**

```bash
yarn add safe-json-stringify
```

**Oftentimes when you Install a Library it tells you to install the `types` for that Library**

```bash
yarn add @types/safe-json-stringify
```

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
