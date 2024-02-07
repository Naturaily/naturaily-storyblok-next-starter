# Naturaily's Jamstack starter

## 📚 Features and tech stack

- 💎 **[Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)** - Consistent, reusable, and atomic design system.
- 📚 **[Storyblok](https://www.storyblok.com/)** - Ready to use integration with Storyblok headless CMS. Including:
  - **[Ready to use Setup script](https://www.storyblok.com/docs/guide/essentials/visual-editor)** - In the scope of `storyblok-setup` package. Setting basic datasources used in stories, blocks, stories themselves, and webhook that revalidates front-end routes on story publish.
  - **[Preview handled](https://www.storyblok.com/docs/guide/essentials/visual-editor)** - In the scope of `storyblok-preview` package.
  - **[Storyblok's GraphQL integration](https://gapi-browser.storyblok.com/?token=insert-here-your-access-token)** - In the scope of `storyblok-api` package.
  - **[Ready to use SEO configuration](https://www.storyblok.com/apps/seo)** - In the scope of `storyblok-seo` package.
  - **[Storyblok RichText support](https://www.storyblok.com/docs/richtext-field)** - In the scope of `storyblok-richtext` package.
  - **[Basic Storyblok blocks ready to use](https://www.storyblok.com/docs/richtext-field)** - In the scope of `storyblok-ui` package.
  - **[Revalidation webhook handler](https://www.storyblok.com/docs/richtext-field)** - In the scope of `storyblok-revalidation` package.
  - **[And some useful utils](https://www.storyblok.com/docs/richtext-field)** - In the scope of `storyblok-utils` package.
- 🏎️ **[Next.js](https://nextjs.org/)** - Fast by default, with config optimized for performance (app routing).
- 🌈 **[Turborepo](https://turbo.build/repo)** - Turborepo is a high-performance build system for JavaScript and TypeScript codebases.
- 💅 **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development.
- ✨ **[ESlint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** - For clean, consistent, and error-free code (`eslint-config-custom` package).
- 📕 **[Storybook](https://storybook.js.org/)** - Create, test, and showcase your components.
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured actions for smooth workflows.
- 💻 **[T3 Env](https://env.t3.gg/)** - Manage your validation for type-safe environment variables (`env` package).
- 🧬 **[Codegen](https://the-guild.dev/graphql/codegen)** - Generate code from your GraphQL schema.
- 🖥️ **[TanStack Query (react-query)](https://tanstack.com/query/latest/)** - Powerful asynchronous state management for TS/JS.
- 🔥 **[Framer motion](https://www.framer.com/motion/)** - Powerful animation library.

## 🔥 Difference between `apps` and `packages`

- `apps` are reusable applications. Each of them is deployable.
- `packages` in turn are shared between apps - this is the place where reusable logic lays.

## 👌 Requirements to get started

```bash
node - v18.16.0
yarn - v1.22.17
```

### ✅ Node

To install Node.js, you can follow the nvm documentation available at [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

```bash
nvm use 18
```

Once installed, you can check the version using the following command:

```bash
node --version
```

Ensure that the command returns `v18.16.0` to confirm that you have the correct version installed.

### ✅ Yarn

The Turbo Repo utilizes Yarn package manager.

To install Yarn, you can follow the official documentation available at [https://yarnpkg.com](https://yarnpkg.com). Once installed, you can check the version using the following command:

```bash
yarn --version
```

Ensure that the command returns `1.22.17` to confirm that you have the correct version installed.

## 🎯 Getting Started

To start using the Turbo Repo with Node.js and Yarn, follow these steps:

1. Install project dependencies:

   ```bash
   yarn install
   ```

2. Create new Storyblok space.

   ![Create space](https://a.storyblok.com/f/218794/3950x694/f7ebe8c1f8/screenshot-2024-02-07-at-10-19-52-am.png)
   ![Create space](https://a.storyblok.com/f/218794/764x735/57281ddcf4/screenshot-2024-02-07-at-10-24-38-am.png)

   Depending on the selection in the `Server Location` field, you will need to create the appropriate variable in the .env file in the next step.

3. Create new Personal Access Token (PAT) in your Storyblok's account settings. Generate Preview Token also in your space settings.

   ![Personal access token](https://a.storyblok.com/f/218794/2644x2216/4639ed2028/screenshot-2024-02-07-at-10-29-53-am.png)

   Copy the `token` and save it. We will need it in the next step.

4. Fill in the required environment variables. (check `.env.example` file) in the storyblok-setup package.

   `STORYBLOK_PERSONAL_ACCESS_TOKEN` - The token generated in step 3.

   `STORYBLOK_REGION` - The value 'en' or 'us', depending on the region you chose when creating the space in step 2.

   `STORYBLOK_SPACE_ID` - ou can find this value in the `settings` tab in Storyblok. Note: `STORYBLOK_SPACE_ID` should not contain `#`

   ```bash
   # packages/storyblok-setup/.env

   STORYBLOK_PERSONAL_ACCESS_TOKEN=""
   STORYBLOK_REGION='eu'
   STORYBLOK_SPACE_ID=""
   ```

5. Delete unnecessary items in your space.

   When creating a new space in Storyblok, it adds several default components and a Home page story. We don't want this. The script you will run in the next step will create these items anew.

   #### Remove story:

   ![Remove story](https://a.storyblok.com/f/218794/3794x908/adc1f04376/screenshot-2024-02-07-at-10-46-59-am.png)

   #### Remove components:

   ![Remove components](https://a.storyblok.com/f/218794/3804x1250/60d1caefc5/screenshot-2024-02-07-at-10-49-45-am.png)

6. Run the `storyblok-setup` script.

   ```bash
   yarn storyblok:setup
   ```

   #### The script will create several items for you in Storyblok CMS:

   - Datasources
   - Few components in block library
   - The basic page structure in the content tab, which includes `homepage`, `global header`, `global footer`, `configuration story`, `not found page`, `redirects`

   The script will also create a `.env` file in the `apps/web/.env` directory based on your data. Finally, the command `yarn dev` will be automatically executed.

## 🤝 Contributing

1. Fork this repository,
2. Create your branch: `git checkout -b my-awesome-contribution`,
3. Commit your changes: `git commit -m 'feat: Add some awesome contribution'`,
4. Push to the branch: `git push origin my-awesome-contribution`.

---

Made with much 🧡 and 💪 by <a href="https://naturaily.com/">Naturaily</a>
