# FeelingTasky
Project for AtlasHacks II. 

## Demo Video!
Watch [here](https://www.youtube.com/watch?v=Tjfr8At5-d0) on YouTube.

## Team Members:
- Kanyinsola 
- Aiden
- Sammy
- Ahnaf

## Directory Structure:

| category | contents                                  |
|----------|-------------------------------------------|
| . 	   | holds main directories and rendering 	   |
| js       | holds  control logic 					   |
| styles   | holds the CSS (stylesheets)               | 
| views    | HTML files                                | 

## To run...

Install `node` and `npm` to your system. These are both required to run Electron, which is the platform this application is based on. Installation instructions depend on your system, but can be generally found via the [official site.](https://nodejs.org/en/download/) If running on a *nix system, you may just be able to download it via the package manager.

For example, installing Node.js on Ubuntu is as simple as running `sudo apt install nodejs`. This will acquire the latest version of nodejs available through the package manager.

Next, you'll want to ensure that you have Node.js and NPM running appropriately on your system. You can do this by running `node -v` and `npm -v`. If they are installed correctly, those commands should return a version number. If you're on windows and you get something about the command not being recognized or not being in path, then maybe try [this](https://medium.com/@kevinmarkvi/how-to-add-executables-to-your-path-in-windows-5ffa4ce61a53). Another option is to just download a [better](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-10.10.0-amd64-netinst.iso) operating system. :wink:

Once you've sorted all of that out, you should navigate towards the folder you want to put the application in and run `git clone https://github.com/Foxnaut/FeelingTasky.git`. If git doesn't work for you, try troubleshooting or something. Navigate into the directory using `cd` and then run `npm install`. This command will import all the necessary libraries required to run our application to your local system. Essentially, since these libraries are quite large, it's much more advantageous to have the libraries managed locally with the NPM system than by just importing all the code from this repository.

Now you've got all the pieces required. Run `npm start` and our app should whir to life! Thanks for reading. :smile:
