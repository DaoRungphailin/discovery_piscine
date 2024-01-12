let ckies = document.cookie
let list = document.getElementById("ft_list");
console.log(ckies)
if (ckies.length > 0) {
    let ckie = ckies.split(";")
    ckie.forEach(element => {
        const newNode = document.createElement("div");
        newNode.innerHTML = element.split("=")[1]
        newNode.onclick = ()=>{
            let remove = confirm("Do you want to remove this to-do?")
            if (remove) {
                newNode.remove()
                console.log(element.split("=")[0])
                document.cookie = element.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";  
            }
        }
        list.prepend(newNode);
    });
}
function newTask() {
    console.log(ckies)
    let todo = prompt("Create a new To-do")
    if (todo != null && todo != "") {
        let name = new Date().getTime()
        document.cookie = name + "=" + todo;
        const newNode = document.createElement("div");
            newNode.innerHTML = todo
            newNode.onclick = ()=>{
                let remove = confirm("Do you want to remove this to-do?")
                if (remove) {
                    newNode.remove()
                    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                }
            }
            list.prepend(newNode);
    }
}