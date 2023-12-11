// const users = document.getElementById('user-list');
const users = document.querySelector(".user-list");
const userName = document.getElementById("user");
const userArr = [];

const getUserData = async () => {
  try {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    console.log(data);

    if (data) {
      users.innerHTML = "";
    }

    data.map((user) => {
      const li = document.createElement("li");

      userArr.push(li);

      li.insertAdjacentHTML(
        "afterbegin",
        `
    <div class="user-data">
                    <img src=${user.avatar_url} alt=${user.avatar_url} srcset="">
                    <div>
                        <p>${user.login}</p>
                        <a target="_blank" href=${user.html_url}>Github Profile</a>
                    </div>
                </div> `
      );

      users.appendChild(li);
    });
  } catch (e) {
    console.log(e);
  }
};

userName.addEventListener("input", (e) => {
  const val = e.target.value;
  console.log(val);

  userArr.filter((currElem) => {
    console.log(currElem);
    currElem.innerText.toLowerCase().includes(val.toLowerCase())
      ? currElem.classList.remove("hide")
      : currElem.classList.add("hide");
  });
});

getUserData();
