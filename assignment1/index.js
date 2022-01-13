function genID() {
    let input = document.getElementById("name").value;
    if (input === "") {
        alert("Name can not be empty.");
    } else {
        let uid = Date.now().toString(36) + Math.random().toString(36).substring(2);
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
