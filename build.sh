npm --prefix lib run build;

if [[ $NODE_ENV != "production" || $NODE_ENV == "production" && $PROCESS == "backend" ]]
then
    npm --prefix backend run build;
fi

if [[ $NODE_ENV != "production" || $NODE_ENV == "production" && $PROCESS == "frontend" ]]
then
    npm --prefix frontend run build;
fi