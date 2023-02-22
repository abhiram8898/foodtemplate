function validate() {
    var name = document.getElementById("namee").value;
    email = document.getElementById("email").value;
    let reg = /^[a-z A-Z]{2,15}$/;
    var e =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name == "") {
        alert("Name is empty");
        return false;
    } else if (!reg.test(name)) {
        alert("name is  not character ");
        return false;
    } else if (email == "") {
        alert("enter mail");
        return false;
    } else if (!e.test(email)) {
        alert("enter valid mail addres");
        return false;
    } else {
        return true;
    }
}
