# installation

     $ npm install

# start

     $ node index.js

# test

     $ curl -XPOST -H "Content-Type: application/json" -d '{ "decibelValue": 12}' http://localhost:8888/

# plotting

     $ gnuplot
     gnuplot> set datafile separator ","
     gnuplot> plot '/tmp/noise.csv' using 1:3

