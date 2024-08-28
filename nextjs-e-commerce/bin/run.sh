#!/bin/bash

function get_repo_root_dir {
  dir="$(realpath $1)";
  while [[ ! -d "$dir/.git" ]];
  do
    dir=`echo $dir | sed 's~\(.*\)/.*~\1~'`;
  done;

  export REPO_ROOT=$dir;
}

get_repo_root_dir $0;

source ${REPO_ROOT}/nextjs-e-commerce/venv/bin/activate;
flask --app api init-db
npm run dev;


