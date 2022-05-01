# Automated MagicMirror Installation
This bash script automates the process of installing [MagicMirror](https://github.com/MichMich/MagicMirror) with any of your favourite modules. This approach allows for easy backup and replication of your mirror if need be. 

The script installs [MagicMirror](https://github.com/MichMich/MagicMirror)  in the same directory as this cloned repository. 

### Usage
1. Clone this repository
2. *cd* into the cloned repository
3. Convert the script to executable *(right click --> Properties --> Permissions --> Is executable --> Checked)*
4. Edit the `config.js` file to the requried configuration for each of the modules. Example modules and configuration used in this script can be found here:  

   |Module Name    |  Github  URL |  
    |---|---|
    |MMM-World Clock   | https://github.com/BKeyport/MMM-Worldclock  |
    |MMM-PostDelivery-Norway| https://github.com/reidarw/MMM-PostDelivery-Norway.git|
    | MMM-TRV-WastePlan  |  https://github.com/reidarw/MMM-TRV-WastePlan.git|
    |MMM-Entur-tavle|https://github.com/Arve/MMM-Entur-tavle.git|
    |MMM-Tibber|https://github.com/ottopaulsen/MMM-Tibber|
    |MMM-Tools|https://github.com/bugsounet/MMM-Tools|

5. Run the  `InstallMagicMirrorWithModules.js`
6. The script will require your user password before running the script as some of the commands require superuser role (sudo). [MagicMirror](https://github.com/MichMich/MagicMirror) itself does not need superuser role, but the apt update and upgrade commands do. 
7. That is it! You should see your [MagicMirror](https://github.com/MichMich/MagicMirror) up and running 

After installation is complete. The next time you want to start [MagicMirror](https://github.com/MichMich/MagicMirror), navigate to the directory and use one of the following commands:  
* `npm run server` 
OR 
* `npm run start`

### Script tested in 
* Rapsberry Pi 3B+ 
* Kubuntu 20.04

If you would like to contribute, please do and send me a pull request. +1
