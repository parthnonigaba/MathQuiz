function addUser(){
    Player1_Name = document.getElementById ("Player1_Name_Input").value;
    Player2_Name = document.getElementById ("Player2_Name_Input").value;
    localStorage.setItem("Player1_Name",Player1_Name);
    localStorage.setItem("Player2_Name",Player2_Name);
    window.location = "game_page.html";

}