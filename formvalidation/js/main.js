function validation(){
   /*For Alphabet */
    let astr=document.getElementById('name').value;
    // a-z A-z
    let regexp=/[a-zA-Z]/g;
    let regexpa=/^[a-zA-Z]+$/g;
      if(!regexpa.test(astr)){
        alert('Non valid User Name Please Enter Again');
      }

  /*For Age */
  let agestr=document.getElementById('age').value;
  let regexpage=/^1[89]|[2-9][0-9]$/g;
  if(!regexpage.test(agestr)){
    alert('Non valid age Please Enter Again');
  }

  /*For Moblie Number */
  let str=document.getElementById('number').value;

   let regexpe=/^[0-9]{10}$/g;
     if(str==''){
        alert('Please Enter Number');
     }
     else(!regexpe.test(str))
     {
        alert('Mobile number is not valid');
     }
}
