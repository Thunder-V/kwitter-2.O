user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!!";

function add_room(){
    add_room = document.getElementById("add_room").value;
    firebase.database().ref("/").child(add_room).update({
          purpose: "Adding Room Name"
    });
    localStorage.setItem("add_room", add_room);
    window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name - " + Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";

}