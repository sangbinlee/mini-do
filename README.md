# mini-do

# jenkins set
# jenkins set
# jenkins set
# jenkins set
# jenkins set
# jenkins set
# jenkins set

mini-do is a simple todo app built with the latest technologies. It provides a minimalistic and user-friendly interface to manage your tasks efficiently. This README file provides an overview of the mini-do app, including installation instructions and usage guidelines.

## Features

- Add new tasks with a title.
- Mark tasks as completed.
- Delete tasks.
- Filter tasks by status (all, active, completed).
- Clear all completed tasks.
- Responsive design for optimal usage on various devices.
- Integration with user authentication via NextAuth for secure access.

## Technologies Used

mini-do is built using the following technologies:

- [Next.js](https://nextjs.org/): A React framework for server-rendered applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [React Hook Form](https://react-hook-form.com/): A lightweight form validation library for React.
- [Prisma](https://www.prisma.io/): A database toolkit for TypeScript and Node.js.
- [NextAuth](https://next-auth.js.org/): An authentication library for Next.js applications.
- [TSParticles](https://particles.matteobruni.it/): A lightweight particles animation library for React.
- [Zod](https://github.com/vriad/zod): A TypeScript-first schema declaration and validation library.

## Installation

To run mini-do locally, follow these steps:

*1*. Clone the repository:

```bash
git clone https://github.com/emon5122/mini-do
```

*2*. Install the dependencies:

```bash
yarn install
```

*3*. Set up the environment variables:
Copy the .env.example file and rename it to .env. Update the values in the file with your own configuration.



*4*. Set up the database:

```bash
npx prisma migrate dev
```

*5*. Start the development server:

```bash
yarn dev
or
yarn build
yarn start
```

*6*. Open your browser and visit <http://localhost:3000> to access mini-do.

## Usage

- Sign up or log in to your account using the provided authentication system.

- You will be redirected to the main todo list page.

- To add a new task, enter the task title in the input field and press Enter or click the "Add" button.
- To mark a task as completed, click the checkbox next to the task title.

- To delete a task, click the delete icon (X) next to the task.
- Use the filter options at the top of the page to view tasks based on their status (all, active, completed).

- To clear all completed tasks, click the "Clear Completed" button.
- Log out of your account using the provided logout option in the app.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

mini-do is licensed under the MIT License. Feel free to use, modify, and distribute this project as per the terms of the license.

## Acknowledgements

mini-do was created with the help of several open-source libraries and frameworks. Special thanks to the developers and contributors of these projects for their excellent work.

- Next.js
- Tailwind CSS
- React Hook Form
- Prisma
- NextAuth
- TSParticles
- Zod

## Contact

If you have any questions or inquiries, please feel free to reach out.

- Email: <emon5122@gmail.com>

- GitHub: emon5122




# 환경변수 yarn dev
    D:\dev\front-end\mini-do>yarn dev
    yarn run v1.22.19
    $ next dev 
    ▲ Next.js 14.0.3
    - Local:        http://localhost:3000
    - Environments: .env.local, .env


# 환경변수 yarn build 
    D:\dev\front-end\mini-do>yarn build
    yarn run v1.22.19
    $ next build
    ▲ Next.js 14.0.3
    - Environments: .env.production.local, .env.local, .env



# jenkins webhook set
 
    settings
        ip/webhook/
        json




# yarn start
# npm run start
root@ns1:/home/sangbinlee9/front-end/mini-do# npm run start


# docker build -t mini-do:latest .        


# docker run -p 3000:3000 mini-do:latest

    PS D:\dev\front-end\mini-do> docker run -p 3000:3000 mini-do

    > mini-do@1.0.0 start
    > next start

    ▲ Next.js 14.0.3
    - Local:        http://localhost:3000

    [Error: ENOENT: no such file or directory, open '/.next/BUILD_ID'] {
    errno: -2,
    code: 'ENOENT',
    syscall: 'open',
    path: '/.next/BUILD_ID'
    }
    npm notice
    npm notice New major version of npm available! 9.8.1 -> 10.2.4
    npm notice Changelog: <https://github.com/npm/cli/releases/tag/v10.2.4>
    npm notice Run `npm install -g npm@10.2.4` to update!
    npm notice
    PS D:\dev\front-end\mini-do> docker images
    REPOSITORY                       TAG           IMAGE ID       CREATED         SIZE
    mini-do                          latest        7b5492c64c75   2 minutes ago   1.01GB
    react-1                          80            06ee3c257490   9 days ago      46.5MB




    
# jenkins pipeline
