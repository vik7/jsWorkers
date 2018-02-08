
const worker = new Worker('./worker.js');
worker.postMessage({cmd:'avg', data:[1,2,3,4]});

worker.addEventListener('message', function (e) {
   console.log(e.data);
});
