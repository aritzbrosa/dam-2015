(function() {
    var facto = function(num) {
    	total=1;
        if(typeof num ==='number' && num >=0){
            for(i=1;i<=num;i++){
                total=total*i;
            }
        }
        else{
            return false;
        }
        return total;
    };


    console.log(facto(5));
    console.log(facto(6));
    console.log(facto(8));
    console.log(facto(10));
})();
