// Mengambil data dari API 
// fetch("https://reqres.in/api/users/")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error("wah, ada error nih:", error));


// fetch("https://reqres.in/api/users")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(json => {
//     const data = json.data;

//     for (let i = 0; i < data.length; i++) {
//       const user = data[i];

//       document.body.innerHTML += `
//       <div>
//         <p>firstname: ${user.first_name}</p>
//         <p>lastname: ${user.last_name}</p>
//         <img src="${user.avatar}"/>
//       </div>`;
//     }
//   })
//   .catch(e => console.log(e));

async function ambilDanCetakData() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const json = await response.json();
    const data = json.data;

    for (let i = 0; i < data.length; i++) {
      const user = data[i];

      document.body.innerHTML += `
          <div>
            <p>firstname: ${user.first_name}</p>
            <p>lastname: ${user.last_name}</p>
            <img src="${user.avatar}"/>
          </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

async function buatData() {
    try {
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Bruce", job: "CEO" }),
      });
      const json = await response.json();
  
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  
  buatData();
  
  ambilDanCetakData();