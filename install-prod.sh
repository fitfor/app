npm ci;
npm install --dev;
npm --prefix lib run install-prod;

if [[ $NODE_ENV != "production" || $NODE_ENV == "production" && $PROCESS == "backend" ]]
then
    npm --prefix backend run install-prod;
fi

if [[ $NODE_ENV != "production" || $NODE_ENV == "production" && $PROCESS == "frontend" ]]
then
    npm --prefix frontend run install-prod;
fi