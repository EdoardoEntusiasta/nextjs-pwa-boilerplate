## What's this

The result of collaborations from which I have drawn the best, combining the parts that I appreciated most of my and other people's work.

-relevants credis inside-

A ready-made package for website development and progressive web apps. It includes translations, storybooks, an idea for the organization of services, and some common components based on Material-ui.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started
The package is made of:

Nextjs, Webpack 5, Storybook, material-ui, Babel, React, Typescript, gsap, styled-components, next i18n, lingui


First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Storybook

First, run the development server:

```bash
npm run storybook
# or
yarn storybook
```

To learn more visit the official documentation: https://storybook.js.org/docs/react/get-started/introduction


## Lingui js and internazionalization
Configuration is based on the following guide
https://blog.logrocket.com/complete-guide-internationalization-nextjs/

TO ADD A LANGUAGE
1. Add new locale slug in next.config.js -> locales [...]
2. Add the same locale slug in .linguirc -> locales [...]
3. At the next refresh the localhost/{locale-slug} address will be immediately available

TO ADD A TRANSLATION
1. Add a `<Trans>`placeholder text`</Trans>` element
2. Execute: "npm run extract" to extract the placeholders and make them available for translation
3. Insert the relative translation in locales/{locale-slug}/messages.po
4. Execute "npm run compile & npm run dev"

LINKS

If you want to make sure that the links follow the current translation, use the TextLink component which automatically adds the prefix of the active language.

## Integrated fetch calls
The package contains a series of interceptors and classes useful for managing the API response data. Through some procedures shown as an example it will be possible to create your own services and the corresponding data models.
Note that these services are configured to work with a well-defined response structure, also exposed in the code. Obviously, no one prevents you from manipulating the algorithms to meet your needs.
To get an idea, look in the "my_tools/services" and "my_tools/models" folder.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

