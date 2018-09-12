#!/bin/bash

echo 'Deploying...'
aws s3 sync ./dist/ s3://elecciones-contratos.monitorciudadano.co