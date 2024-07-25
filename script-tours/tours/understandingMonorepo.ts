export default async function understandingMonorepo() {
    const steps = await Promise.all([
        {
            title: "What is Monorepo?",
            description: "## What is Monorepo?\n\nSuppose we are creating an application with a React.js frontend and a Node.js backend. Traditionally, we needed to create two different repositories: one for the frontend and one for the backend. If they share multiple code snippets, we need to make changes in both the repositories or can publish the common modules as a private npm package. To avoid this complexity, we can create a single repository with multiple projects running in it and have a common section where all projects can share the common code.These projects are known as **workspaces** in a monorepo setup. This is the main use case of monorepo. \n\n![](https://res.cloudinary.com/dty2rgx6f/image/upload/v1719945379/Codetours/Understanding%20Monorepo%20Structure%20of%20Rocket.Chat/Polyrepo_vs_Monorepo_isj4qz.png)\n\n#### The other use cases are:-\n- Consistent dependency version of packages used across the project\n- Improved collaboration as all members can view the complete project\n- Streamlines [CI/CD](https://about.gitlab.com/topics/ci-cd/) as a single pipeline can handle all projects deployment\n\n**To learn more click in the given [link](https://semaphoreci.com/blog/what-is-monorepo#:~:text=A%20monorepo%20is%20a%20version,Monorepos%20can%20reach%20colossal%20sizes)**"
        },
        {
            title: "What is Turborepo?",
            description: "## What is Turborepo?\nTurborepo is a tool designed to optimize the development and build process for monorepos. In simple words its monorepo on steroids.\n\nBy default turborepo extends the features presented by monorepo, the extra benefits are\n- **Incremental Builds**- Say we have a 3 workspaces- frontend,backend and common modules running in our turborepo. We made a change in the frontend folder and want to deploy it for production. In a vanilla monorepo setup, it will build each workspaces from the scratch but in turborepo, it builds only the frontend workspace and caches the rest. Turborepo also creates a dependency graph between workspaces. For example, lets say workspace A depends on workspace B (A->B) and we changed the code in A, since B depends on A it will rebuild both A and B. But if we changed the code in B and tried to build the repo, it will cache A and rebuild B only. **This vastly reduces build times and simplifies the CI/CD process**    \n- **Individual Scaling** - Each workspace can be individually scaled and even be deployed separately.\n\nFor more understanding please follow the docs [link](https://turbo.build/repo/docs)\n        \n        "
        },
        {
            file: "package.json",
            description: "## Understanding our Repository\n\nNow that we have covered the foundational knowledge, let's dive into understanding how our project operates. This is the root folder, where Turborepo manages all workspaces using the [turbo.json](./turbo.json) file. Here in this package.json, we have the dependencies and scripts that Turborepo requires to run the project.\"",
            line: 1
        },
    ]);
    return {
        $schema: 'https://aka.ms/codetour-schema',
        title: 'Understanding Monorepo Structure of Rocket.Chat',
        steps,
    };
}
