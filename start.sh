#!/bin/sh
cat ./Deploy/banner
echo "\n---------------------------------------------------------------------------------------------------------------------------------"
echo " - Repository : "
echo " - "
echo "----------------------------------------------------------------------------------------------------------------------------------"


read -p "Do you want to start the universe astro? (Y/N)" CONFIRMATION
if [ $CONFIRMATION = "y" ] ; then
    echo "=> Starting universe ASTRO <=" 
    echo "=> Stop all container <=" 
    docker-compose stop
    echo "=> Install node modules for services <="
    for pathService in `ls ./Services`
        do
            $(cd Services/$pathService && npm install) > /dev/null 2>&1
        done
    echo "=> DONE - Installed node modules <="
    echo "=> Start all containers <="
    docker-compose up --build -d

    echo "" 
    echo "=> Started universe ASTRO <="
fi
