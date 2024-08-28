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


if [[ ! -d "${REPO_ROOT}/nextjs-e-commerce/node_modules" ]]; then
      npm install --prefix ${REPO_ROOT}/nextjs-e-commerce
      check_error $?
    fi


if [ ! -d ${REPO_ROOT}/nextjs-e-commerce/venv ]; then
  python3.10 -m venv ${REPO_ROOT}/nextjs-e-commerce/venv
  echo "Python venv created!"
  source ${REPO_ROOT}/nextjs-e-commerce/venv/bin/activate;
else
  source ${REPO_ROOT}/nextjs-e-commerce/venv/bin/activate;
fi


flask --app api init-db
npm run dev;




