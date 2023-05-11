
function getDate(){
    const d = new Date();
    const days = ['Saturday',"Sunday"," Monday"," Tuesday", "Wednesday", "Thursday", "Friday",'Saturday'  ];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ,${date},${month},${year}`;
}
document.querySelector('.date').innerHTML = getDate();

function getTime(){
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    h = h <10 ? "0" : h;
    m = m <10 ? "0" : m;
    s = s <10 ? "0" : s ;
    const time =  `${h}:  ${m}: ${s} ${ampm} `;
document.querySelector('.time').innerHTML =  time;

}
setInterval(getTime, 0000)

