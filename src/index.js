fetch("http://localhost:3000/pups")
.then(res => res.json())
.then(pups => pupName(pups))
function pupName(pups) {
    let dogBar = document.getElementById("dog-bar");
    pups.forEach(pup => {
        const pupNames = document.createElement('SPAN'); 
        pupNames.innerHTML = pup.name;
        dogBar.append(pupNames);
    })
}
document.querySelector('SPAN').addEventListener('click', dogInfo)
fetch("http://localhost:3000/pups")
    .then(res => res.json())
    .then(info => dogInfo(info))
function dogInfo(info) {
    let pupInfo = document.getElementById('dog-info');
    info.forEach(pup => {
        const img = document.createElement('img');
        img.src = img;
        const h2 = document.createElement('h2');
        h2.innerHTML = pup.name;
        const buttn = document.createElement('button');
        buttn.innerHTML = pup.isGoodDog;
        
        pupInfo.append(img);
        pupInfo.append(h2);
        pupInfo.append(buttn);
    })
}
