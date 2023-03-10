#!bin/bash
YELLOW='\033[0;33m'
GREEN='\033[0;32m'
while :
do

echo "${YELLOW}Estou começando a atualizar, AGUARDE!"
git add .
clear

echo "${YELLOW}Atualizando as alterações dadas no arquivo!"
git commit -am "anônimo-api"
clear

echo "${YELLOW}Carregando a sua pasta para o HEROKU!"
git push heroku master
clear

echo "${YELLOW}Carregando os logs do ANÔNIMO-API"
heroku logs --tail

sleep 1      
done

