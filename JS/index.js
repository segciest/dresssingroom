function getValue() {
  let promise = axios({
    url: "./../data/Data.json",
    method: "GET",
  });
  promise
    .then(function (res) {
      const arr = res;
      console.log(res);

      const navPills = res.data.navPills;
      console.log(res.data.navPills);
      renderPills(navPills);

      const tabPanes = res.data.tabPanes;
      console.log(res.data.tabPanes);
      render(tabPanes);
    })
    .catch(function (err) {
      console.log(err);
    });
}
getValue();
console.log(getValue());
//   mở tab
$("#myTab button").on("click", function (event) {
  event.preventDefault();
  $(this).tab("show");
});

// render pill
let renderPills = (arr) => {
  let content = "";
  let content2 = "";
  arr.forEach((item, index) => {
    let { tabName, showName, type } = arr[index];
    content += `
        <li class="nav-item" role="presentation">
            <button style="width:100%" class="nav-link" id="${item.tabName}-tab" data-toggle="tab" data-target="#${item.type}" type="button" role="tab" aria-controls="${item.type}" aria-selected="true">${item.showName}</button>
        </li>
    `;
    content2 += `
        <div class="tab-pane fade show " id="${item.type}" role="tabpanel" aria-labelledby="${item.tabName}"></div>
    `;
  });
  document.querySelector(".nav-pills").innerHTML = content;
  document.querySelector(".tab-content").innerHTML = content2;
};

// Render item
let render = (arr) => {
  arr.forEach((item, index) => {
    let { id, type, name, desc, imgSrc_jpg, imgSrc_png } = arr;
    let a = item.type;
    let src = item.imgSrc_png;
    document.getElementById(`${a}`).innerHTML += `
        <button type="button" onclick="dressing2(${item.id})">
            <img id="${item.id}" src="${item.imgSrc_jpg}"></img>
        </button>
            
        `;
  });
};

let dressing = (id, src) => {
  //   let { id, type, name, desc, imgSrc_jpg, imgSrc_png } = arr;
  img = `<img src="${src}"></img>`;
  switch (arr.type) {
    case "topclothes":
      document.querySelector(".body").innerHTML = img;
      break;
    case "botclothes":
      document.querySelector(".body").innerHTML = img;
      break;
    case "shoes":
      document.querySelector(".feet").innerHTML = img;
      break;
    case "handbags":
      document.querySelector(".handbag").innerHTML = img;
      break;
    case "necklaces":
      document.querySelector(".necklace").innerHTML = img;
      break;
    case "hairstyle":
      document.querySelector(".model").innerHTML = img;
      break;
    case "background":
      document.querySelector(".background").innerHTML = img;
      break;
  }
};

let dressing2 = (id) => {
  let promise = axios({
    url: "./../data/Data.json",
    method: "GET",
  });
  promise
    .then(function (res) {
      //   const arr = res;
      //   console.log(res);

      const navPills = res.data.navPills;
      //   console.log(res.data.navPills);

      const tabPanes = res.data.tabPanes;
      //   console.log(res.data.tabPanes);
      tabPanes.forEach((item, index) => {
        if (id == item.id) {
          let img = `<img src="${item.imgSrc_png}"></img>`;
          switch (item.type) {
            case "topclothes":
              document.querySelector(".body").innerHTML = img;
              break;
            case "botclothes":
              document.querySelector(".body").innerHTML = img;
              break;
            case "shoes":
              document.querySelector(".feet").innerHTML = img;
              break;
            case "handbags":
              document.querySelector(".handbag").innerHTML = img;
              break;
            case "necklaces":
              document.querySelector(".necklace").innerHTML = img;
              break;
            case "hairstyle":
              document.querySelector(".model").innerHTML = img;
              break;
            case "background":
              document.querySelector(".background").innerHTML = img;
              break;
          }
        }
      });
    })
    .catch(function (err) {
      console.log(err);
    });
};
