( ()=>{
    console.log("this",this);

})();
// f1();

// console.log(this);

const obj={
    fn : function () {
        console.log("this fn",this);
    },
    fn2 :  () => {
        console.log("this fn2",this);
    }
}

obj.fn();
obj.fn2();