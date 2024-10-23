let user = document.querySelector("#user");
let button = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getData(user.value);
});

async function getData(user) {
  try {
    let data = await window.fetch(`https://api.github.com/users/` + user);
    let finalData = await data.json();
    console.log(finalData);
    let displayData = document.querySelector(".display-data");

    if (finalData.status == "404" && finalData.message == "Not Found") {
      displayData.innerHTML = `<h1>User Details Not Found</h1>`;
    } else {
      let { name, login, company, id, avatar_url, location, html_url, bio } =
        finalData;
        displayData.style.padding = "10px";
      displayData.style.border= "1px solid #0000003f";
      displayData.innerHTML = `
            <img src=${avatar_url} alt=${id} height="200px" width = "200px"/>
            <p>Name : ${name}</p>
            <p>Bio : ${bio}</p>
            <p>Location : ${location}</p>
            <p>Company : ${company}</p>
            <button>
            <a href=${html_url}>More Details</a>
            </button>
            `;
    }
  } catch (error) {
    console.log("err");
  }
}
