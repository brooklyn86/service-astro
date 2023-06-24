#!/bin/sh
cat ./Deploy/banner
echo "\n---------------------------------------------------------------------------------------------------------------------------------"
echo " - Repository : "
echo " - "
echo "----------------------------------------------------------------------------------------------------------------------------------"


read -p "Do you want to start the universe astro? (Y/N)" CONFIRMATION
if [ $CONFIRMATION = "y" ] ; then
    echo "=> Starting universe ASTRO<=" 
    echo "=> Stop all container <=" 
    docker-compose stop
    echo "=> Start all containers <="
    docker-compose up --build -d
fi

echo "" 
echo "=> Started universe ASTRO <="