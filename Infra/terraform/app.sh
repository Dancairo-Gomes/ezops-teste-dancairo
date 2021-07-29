#!/bin/bash

sudo apt-get update -y

sudo apt install git -y

sudo apt-get remove docker docker-engine docker.io -y

sudo apt install docker.io -y

sudo systemctl start docker

sudo systemctl enable docker

sudo docker login --username=dancairo --password=19091993

sudo git clone https://github.com/Dancairo-Gomes/ezops-teste-dancairo.git

cd ezops-teste-dancairo

sudo docker build -t dancairo/chat-app:v1 .

sudo docker run --name chat-app -p 3000:3000 -d dancairo/chat-app:v1