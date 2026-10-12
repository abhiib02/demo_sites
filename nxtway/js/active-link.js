let links = document.querySelectorAll('.navItem');
let current_url = window.location.href;
let current_arr = current_url.split("/");
console.log(current_arr);
links.forEach((link) => {
    let link_arr = link.href;
    link_arr = link_arr.split("/");
    console.log(link_arr);
    if (current_arr[3]==link_arr[3]) {
        
        link.classList.add('active');
        
    }

});