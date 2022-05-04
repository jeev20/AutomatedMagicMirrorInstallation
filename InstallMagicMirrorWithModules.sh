#!/bin/bash

# Get user input to install autostart function
while true; do
read -p "Do you want the MagicMirror to autostart after a reboot? (y/n) " yn

function InstallMagicMirror {
  # Installing nodejs and npm and cleanup
    sudo apt update -y 
    sudo apt install nodejs -y && sudo apt install npm -y
    sudo apt autoremove -y

    # Installing MagicMirror 
    cd .. && curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    git clone https://github.com/MichMich/MagicMirror

    echo "CD and npm install"
    cd "$(dirname "$0")/MagicMirror" && npm install --only=prod --omit=dev && npm audit fix  --force
    npm install postman-request

    echo "Copy config sample"
    cp "config/config.js.sample" "config/config.js" 

    cd "$(dirname "$0")/modules" && git clone https://github.com/YR/MMM-YrNow
    # The author has not fixed two errors (request module depricated and incorrect url) Lets fix it
    sed  -i 's/request/postman-request/2'  "$(dirname "$0")/MMM-YrNow/node_helper.js"
    sed -i 's/\/id//1' "$(dirname "$0")/MMM-YrNow/MMM-YrNow.js"

    # Install MMM-Worldclock 
    git clone https://github.com/BKeyport/MMM-Worldclock 

    # Install MMM-PostDelivery-Norway
    git clone https://github.com/reidarw/MMM-PostDelivery-Norway.git
    # The author has not fixed one error (request module depricated)
    sed  -i 's/request/postman-request/2'  "$(dirname "$0")/MMM-PostDelivery-Norway/node_helper.js"

    # Install MMM-TRV-WastePlan
    git clone https://github.com/reidarw/MMM-TRV-WastePlan.git
    # The author has not fixed one error (request module depricated)
    sed  -i 's/request/postman-request/2'  "$(dirname "$0")/MMM-TRV-WastePlan/node_helper.js"

    # Install MMM-Entur-tavle
    git clone https://github.com/Arve/MMM-Entur-tavle.git

    # Install MMM-Tibber
    git clone https://github.com/ottopaulsen/MMM-Tibber
    cd "$(dirname "$0")/MMM-Tibber" && npm install && npm audit fix --force

    # Back to modules install MMM-Tools
    cd .. 
    git clone https://github.com/bugsounet/MMM-Tools
    cd "$(dirname "$0")/MMM-Tools" && npm install && npm audit fix --force

    # Back to modules install
    cd .. 

    # Go parent directory where the script is
    cd ..

    # Go out of the script directory
    cd ..

    # Copy the config file
    cp "$(dirname "$0")/AutomatedMagicMirrorInstallation/config.js"   "$(dirname "$0")/MagicMirror/config/config.js" 
}



case $yn in 
	[yY] ) 
        # If user wants to start at reboot
        # Call install function
        InstallMagicMirror
        # Starting MagicMirror
        echo "Start MagicMirror with autostart..."
        cd "$(dirname "$0")/MagicMirror"
        #sed  -i 's/~\/MagicMirror/../1'  "$(dirname "$0")/installers/mm.sh"

        # Install pm2 
        sudo npm install -g pm2

        # Downloaded / Cloned folder
        cd ..

        # Copy the bash file
        cp "$(dirname "$0")/AutomatedMagicMirrorInstallation/mm.sh"   "$(dirname "$0")/mm.sh" 

        # https://docs.magicmirror.builders/configuration/autostart.html#using-pm2 
        pm2 start mm.sh
        pm2 save --force
        
		break;;
	[nN] ) 
        # Call install function
        InstallMagicMirror
        # Starting MagicMirror
        echo "Starting MagicMirror..."
        cd "$(dirname "$0")/MagicMirror"
        npm run start;
		exit;;
	* ) echo invalid response;;
esac

done





