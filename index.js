var array;


array = ['http://ts2.mm.bing.net/th?id=OIP.xTk4dZ0Wtu_b65dT5tT5QwHaE8&pid=15.1', 'https://th.bing.com/th/id/OIP.zdN-wNPWhA42wD1BJYNd5QHaEs?w=312&h=197&c=7&r=0&o=5&dpr=1.6&pid=1.7', 'https://th.bing.com/th/id/OIP.mMJzNxYYg0z1bspdMd3wyAHaEr?w=241&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7', 'https://th.bing.com/th/id/OIP.Yb_DdGIxsIxchM62Mz1gbQAAAA?w=255&h=187&c=7&r=0&o=5&dpr=1.6&pid=1.7', 'https://th.bing.com/th/id/OIP.RWxfw8ViJbvH0Ev_KAEIHQHaEE?w=279&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7', 'https://th.bing.com/th/id/OIP.hLuz0uS9qPX0a6Xrfebu8gHaFj?w=238&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7'];

let element_images = document.getElementById('images');
element_images.setAttribute("src", array[0]);




document.getElementById('next').addEventListener('click', (event) => {
  array.push(array[0]);
  array.shift();
  let element_images2 = document.getElementById('images');
  element_images2.setAttribute("src", array[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  array.unshift(array.slice(-1)[0]);
  array.pop();
  let element_images3 = document.getElementById('images');
  element_images3.setAttribute("src", array[0]);

});