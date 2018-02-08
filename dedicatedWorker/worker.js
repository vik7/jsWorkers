function calculateAverage(numbers, callback){
    if(!numbers) {
        console.log("Come-on don't play! Give me at-least one :)");
        return;
    }
    const lengthOfNumbers = numbers.length;
    if(lengthOfNumbers === 0){
        console.log("Come-on don't play! Give me some no to play :)");
        return;
    }
    let sum = 0;
    function getTheSum(index){
        if(index < lengthOfNumbers){
            setTimeout(function () {
                sum += numbers[index];
                getTheSum(index+1);
            },0);
        }else{
            callback(sum/lengthOfNumbers);
        }
    }
    getTheSum(0);

}

self.addEventListener('message', function (e) {
    function avgSum(val){
        return val;
    }
    const data = e.data;
    switch (data.cmd){
        case 'avg':
             calculateAverage( data.data, avgSum =>  {
                self.postMessage(avgSum);
            });


            break;
        default:
            self.postMessage('Unknown command');


    }
}, false);