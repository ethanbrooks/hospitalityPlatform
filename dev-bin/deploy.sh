#!/bin/bash

if [[ "$1" != "" ]]; then
    S3BUCKETNAME="$1"
else
    echo ERROR: Failed to supply S3 bucket name
    exit 1
fi

if [[ "$2" != "" ]]; then
    AWSPROFILE="$2"
else
    echo ERROR: Failed to supply S3 bucket name
    exit 1
fi

git rev-parse HEAD > www/current-git-commit.txt || { echo 'ERROR: git hash failed' ; exit 1; }
#for old in www/*.gz; do mv $old ${old%%.gz*}; done
#for old in www/assets/css/*.gz; do mv $old ${old%%.gz*}; done

#Sync everything EXCEPT *.js, *.css and index.html
# js&css were gzipped so need content-encoding explictly set to gzip
# index.html CANT be cached at the edge
#aws s3 sync www/ s3://${S3BUCKETNAME} --profile ${AWSPROFILE} --metadata-directive REPLACE --cache-control max-age=31536000,public --acl public-read --exclude "*.json" --exclude "*.css" --exclude "*.js" || { echo 'ERROR: s3 sync failed' ; exit 1; }

# Sync js&css
#aws s3 sync www/ s3://${S3BUCKETNAME} --profile ${AWSPROFILE} --metadata-directive REPLACE --cache-control max-age=31536000,public --acl public-read --exclude "*" --include "*.css" --include "*.js" --include "*.json" --exclude "stats-es5.json" --exclude "stats-es2015.json" || { echo 'ERROR: s3 js/css sync failed' ; exit 1; }
# copy index.html making sure its not cached at the edge
aws s3 cp dist/hotelHerrera/index.html s3://${S3BUCKETNAME}/index.html --profile ${AWSPROFILE} --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read || { echo 'ERROR: s3 cp index failed' ; exit 1; }


#Sync everything EXCEPT *.js, *.css and index.html
# js&css were gzipped so need content-encoding explictly set to gzip
# index.html CANT be cached at the edge
aws s3 sync dist/hotelHerrera/ s3://${S3BUCKETNAME} --profile ${AWSPROFILE} --metadata-directive REPLACE --cache-control max-age=31536000,public --acl public-read --exclude "*.json" --exclude "*.css" --exclude "*.js" || { echo 'ERROR: s3 sync failed' ; exit 1; }

# Sync js&css
#aws s3 sync www/ s3://${S3BUCKETNAME} --profile ${AWSPROFILE} --metadata-directive REPLACE --cache-control max-age=31536000,public --acl public-read --exclude "*" --include "*.css" --include "*.js" --include "*.json" --exclude "stats-es5.json" --exclude "stats-es2015.json" || { echo 'ERROR: s3 js/css sync failed' ; exit 1; }
# copy index.html making sure its not cached at the edge
aws s3 cp dist/hotelHerrera/index.html s3://${S3BUCKETNAME}/index.html --profile ${AWSPROFILE} --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read || { echo 'ERROR: s3 cp index failed' ; exit 1; }
