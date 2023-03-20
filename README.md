# JC Crud example!

The purpose of this project is to consume a containerized application containing the busineess logic for the CRUD Operations on system users inside the JC environment.

# What is included in this project?

Because the main tech stack was vuejs and their perks, in order to simulate a very similar stack, we'll be using:


- React 18 using Typescript
- React Router
- React Query
- Redux Toolkit
- React Query + Reduc Toolkit integration
- TailwindCss
- Vite
- Containerization (Docker) so it can be exported to the artifact registry and use everywhere

# Requirements

- Internet Connection.![enter image description here](https://i.etsystatic.com/32271027/r/il/28ecd8/3811750888/il_794xN.3811750888_hv48.jpg)
## For production
- Docker, for install instructions take a look [here](https://www.docker.com/)
- execute the following commands

```
docker build -t jc-crud .

```
You can change "jc-crud" for any name you want, just keep in mind you should use this name when you're about to run the container

To Run the docker container execute:

```
docker run --name jc-crud--container -p 8080:80 -d jc-crud
```
our application is now running in a Docker container. Open a browser and navigate to http://localhost:8080 to view your containerized React application.


## For development
- Nodejs 16+  and npm installed,  you can take a look at [NVM](https://github.com/nvm-sh/nvm) or [NVM for windows](https://github.com/coreybutler/nvm-windows)
- Make Sure to install the dependencies using 

```
npm install

```
In the root directory

To run the development server you can execute

```
npm run dev

```
And enjoy the HMR that vite will provide, just make sure to open the url prompted in the  command interface

Enjoy!
