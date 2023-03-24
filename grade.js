function calculateMarks(){
    let Eng = parseInt( document.getElementById("English").value)
    let Mat = parseInt( document.getElementById("Matchs").value)
    let Phy = parseInt(document.getElementById("Physics").value)
    let Che = parseInt(document.getElementById("Chemistry").value)
    let Com = parseInt(document.getElementById("Computers").value)



    if(Eng > 100 || Eng < 0 || Mat>100 || Mat<0 || Phy>100 || Phy<0 || Che>100 || Che<0 || Com>100 ||Com<0){
        alert("Please Enter Valid Marks")
    }else{
        var Total = Eng+Mat+Phy+Che+Com;
       document.getElementById("marksCount").innerHTML=Total
       var per = Total/500*100;
       document.getElementById("AverageM").innerHTML=per;
       if(Eng>40 && Mat>40 && Phy>40 && Che>40 && Com > 40){
        document.getElementById("GradeM").innerHTML="Candidate is Pass"
       }else{
        document.getElementById("GradeM").innerHTML="Candidate is Fail"

       }

    }
    



}
calculateMarks()