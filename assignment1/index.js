function create_UID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

function genID() {
  let input = document.getElementById("name").value;
  if (input === "") {
    alert("Name can not be empty.");
  } else {
    let uid = create_UID();
    let now = new Date();
    let datetime =
      now.getDate() +
      "/" +
      (now.getMonth() + 1) +
      "/" +
      now.getFullYear() +
      "  " +
      now.toLocaleTimeString();

    document.getElementById("response").value =
      "Name : " +
      input +
      `\n` +
      "ID : " +
      uid +
      `\n` +
      "Requested At : " +
      datetime;
  }
}
