function MenuChoice()
{
    if (document.getElementById("menu").value =="Display Section 1")
    {
       document.getElementById("section1").style.visibility = "visible";
       document.getElementById("section2").style.visibility = "hidden";
    }
   else if (document.getElementById("menu").value =="Display Section 2")
   {
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
   }
   else
   {
    document.getElementById("section2").style.visibility = "hidden";
    document.getElementById("section1").style.visibility = "hidden";
   }

   
}