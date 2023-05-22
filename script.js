function highlight() {
    //Write your code here
    let para= document.getElementsByTagName("strong");
	for(let a=0 ; a <para.length ; a++){
		para[a].style.color= "green";
	}
	 


}


function return_normal() {
    //Write your code here
    let para= document.getElementsByTagName("strong")
	for(let a=0 ;a <para.length;a++){
		para[a].style.color="black";
	}

    
}